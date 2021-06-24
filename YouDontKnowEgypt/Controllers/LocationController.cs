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
      db.Entry(l).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
    public async Task<List<Location>> SearchLocationByName(string name)
    {
      List<Location> locations = await db.Locations.Where(e => e.Name.Contains(name) && e.Approved == true).ToListAsync();
      return locations;
    }
    // GET: api/Location/admin
    [HttpGet("admin")]
    public async Task<ActionResult<List<Location>>> LocWaitingApproval()
    {
      var WaitingLoc = await db.Locations.Where(e => e.Approved == false).ToListAsync();

      if (WaitingLoc.Count() == 0)
      {
        return NotFound();
      }

      return WaitingLoc;
    }
  }
}
