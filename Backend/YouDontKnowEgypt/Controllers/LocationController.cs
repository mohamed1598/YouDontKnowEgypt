using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouDontKnowEgypt.Models;

namespace YouDontKnowEgypt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {

        YouDontKnowEgyptContext db;

        public LocationController(YouDontKnowEgyptContext _db)
        {
            db = _db;

        }
        [HttpGet("Paging/{PageNumber}")]
        public ActionResult getLocations(int PageNumber)
        {
            List<Location> locs = db.Locations.Where(s => s.Approved == true).ToList();
            int TotalCount = locs.Count();
            int PageSize = 6;
            int CurrentPage = PageNumber;
            int TotalPages = (int)Math.Ceiling(TotalCount / (double)PageSize);
            if (CurrentPage > TotalPages)
            {
                return NotFound();
            }
            List<Location> pageLocs = locs.Skip((PageNumber - 1) * PageSize).Take(PageSize).ToList();
            return Ok(pageLocs);
            //return await _locationRepository.getLocations(PageNumber);

        }


        [HttpGet("{id:int}")]
        public ActionResult getById(int id)
        {
            Location l = db.Locations.Find(id);
            if (l == null)
            {
                return NotFound();
            }
            return Ok(l);
        }

        [HttpGet("{name}")]
        public ActionResult getByName(string name)
        {
            Location l = db.Locations.FirstOrDefault(n => n.Name == name);
            if (l == null)
            {
                return NotFound();
            }
            return Ok(l);
        }

        [HttpPost]
        public ActionResult create(Location l)
        {
            if (l == null)
            {
                return BadRequest();
            }
            l.Approved = false;
            l.Count = 0;
            l.CreateDate = DateTime.Now;
            l.UpdateDate = DateTime.Now;
            db.Locations.Add(l);
            db.SaveChanges();
            return Created($"location with name {l.Name}", l);
        }

        [HttpPost("admin")]
        public ActionResult createForAdmin(Location l)
        {
            if (l == null)
            {
                return BadRequest();
            }
            l.Approved = true;
            l.Count = 0;
            l.CreateDate = DateTime.Now;
            l.UpdateDate = DateTime.Now;
            db.Locations.Add(l);
            db.SaveChanges();
            return Created($"location with name {l.Name}", l);
        }

        [HttpPut("{id}")]
        public ActionResult update(int id, Location l)
        {
            if (id != l.Id)
            {
                return BadRequest();
            }
            db.Entry(l).State = EntityState.Modified;
            db.SaveChanges();
            return NoContent();

        }

        [HttpDelete("{id}")]
        public ActionResult delete(int id)
        {

            Location l = db.Locations.FirstOrDefault(n => n.Id == id);
            if (l == null)
            {
                return BadRequest();
            }
            db.Locations.Remove(l);
            db.SaveChanges();
            return NoContent();
        }

        // GET: api/Location/search/name
        [HttpGet("Search/{name}")]
        public async Task<ActionResult<Location[]>> SearchLocationByName(string name)
        {
            var location = await db.Locations.Where(e => e.Name.Contains(name) && e.Approved == true).ToListAsync();

            //if (location.Count() == 0)
            //{
            //    return NotFound();
            //}

            return location.ToArray();
        }
        // GET: api/Location/admin
        [HttpGet("admin")]
        public async Task<ActionResult<Location[]>> LocWaitingApproval()
        {
            var WaitingLoc = await db.Locations.Where(e => e.Approved == false).ToListAsync();

            if (WaitingLoc.Count() == 0)
            {
                return NotFound();
            }

            return WaitingLoc.ToArray();
        }
        [HttpGet("approved/{id:int}")]
        public ActionResult approveLocation(int id)
        {
            Location loc = db.Locations.Find(id);
            loc.Approved = true;
            db.Entry(loc).State = EntityState.Modified;
            db.SaveChanges();
            return NoContent();
        }

        [HttpGet("pending")]
        public ActionResult<List<Location>> pendingLocation()
        {
            List<Location> locs = db.Locations.Where(e => e.Approved == false).ToList();

            return Ok(locs);

        }
        [HttpGet("pageNumber")]
        public ActionResult getPageNumber()
        {
            List<Location> locs = db.Locations.Where(s => s.Approved == true).ToList();
            int TotalCount = locs.Count();
            int PageSize = 6;
            int TotalPages = (int)Math.Ceiling(TotalCount / (double)PageSize);
            return Ok(TotalPages);
        }
        [HttpGet("increaseCounter/{id:int}")]
        public ActionResult increaseLocCount(int id)
        {
            Location Loc = db.Locations.Find(id);
            Loc.Count++;
            db.Entry(Loc).State = EntityState.Modified;
            db.SaveChanges();
            return Ok(Loc.Count);
        }
        [HttpGet("Recommended")]
        public ActionResult getRecommendedPlaces()
        {
            Location[] locations = db.Locations.OrderByDescending(e => e.Count).ToArray();
            Location[] first6Locations = new Location[6];
            for (int i = 0; i < 6; i++)
            {
                first6Locations[i] = locations[i];
            }
            return Ok(first6Locations);
        }
        // GET: api/Location/image/id
        [HttpGet("image/{id:int}")]
        public ActionResult getImage(int id)
        {
            LocationImage l = db.LocationImages.FirstOrDefault(e => e.LocationId == id);
            //if (l == null)
            //{
            //    return NotFound();
            //}
            return Ok(l);
        }

        // GET: api/Location/images/id
        [HttpGet("images/{id:int}")]
        public ActionResult getImages(int id)
        {
            List<LocationImage> l = db.LocationImages.Where(e => e.LocationId == id).ToList();
            //if (l == null)
            //{
            //    return NotFound();
            //}
            return Ok(l);
        }
    }
}
