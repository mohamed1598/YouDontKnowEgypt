using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YouDontKnowEgypt.Models;

namespace YouDontKnowEgypt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GovernoratesController : ControllerBase
    {
        private readonly YouDontKnowEgyptContext _context;

        public GovernoratesController(YouDontKnowEgyptContext context)
        {
            _context = context;
        }

        // GET: api/Governorates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Governorate>>> GetGovernorates()
        {
            return await _context.Governorates.ToListAsync();
        }

        // GET: api/Governorates/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Governorate>> GetGovernorateById(int id)
        {
            var governorate = await _context.Governorates.FindAsync(id);

            if (governorate == null)
            {
                return NotFound();
            }

            return Ok(governorate);
        }
        // GET: api/Governorates/cairo
        [HttpGet("{name}")]
        public ActionResult<Governorate> GetGovernorateByName(string name)
        {
            //try to make users make only one location with the same name
            Governorate governorate = _context.Governorates.FirstOrDefault(n => n.Name == name);

            if (governorate == null)
            {
                return NotFound();
            }

            return governorate;
        }
        // PUT: api/Governorates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGovernorate(int id, Governorate governorate)
        {
            if (id != governorate.Id)
            {
                return BadRequest();
            }
            //if (GovernorateExistsByName(governorate.Name))
            //{
            //    return BadRequest();
            //}
            _context.Entry(governorate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GovernorateExistsById(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Governorates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Governorate>> PostGovernorate(Governorate governorate)
        {
            if (governorate == null)
            {
                return BadRequest();
            }
            if (GovernorateExistsByName(governorate.Name))
            {
                return BadRequest("your request has an existing name");
            }
            _context.Governorates.Add(governorate);
            await _context.SaveChangesAsync();
            return Created("GetGovernorate", governorate);
        }

        // DELETE: api/Governorates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGovernorate(int id)
        {
            var governorate = await _context.Governorates.FindAsync(id);
            if (governorate == null)
            {
                return NotFound();
            }

            _context.Governorates.Remove(governorate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GovernorateExistsById(int id)
        {
            return _context.Governorates.Any(e => e.Id == id);
        }
        private bool GovernorateExistsByName(string name)
        {
            return _context.Governorates.Any(e => e.Name == name);
        }

        // GET: api/Governorates/search/name
        [HttpGet("Search/{name}")]
        public async Task<ActionResult<Governorate[]>> SearchGovernorateByName(string name)
        {
            var Governorate = await _context.Governorates.Where(e => e.Name.Contains(name)).ToListAsync();

            //if (Governorate.Count() == 0)
            //{
            //    return NotFound();
            //}

            return Governorate.ToArray();
        }
        // GET: api/Governorates/image/id
        [HttpGet("image/{id:int}")]
        public ActionResult getImage(int id)
        {
            Location loc = _context.Locations.Where(e => e.GovernorateId == id && e.Approved == true).OrderByDescending(e=>e.Id).FirstOrDefault();
            LocationImage l = new LocationImage();
            if (loc != null)
            {
                l = _context.LocationImages.FirstOrDefault(e => e.LocationId == loc.Id);
                return Ok(l);
            }
            l.Id = 0;
            l.ImagePath = "Not Found.png";
            //if (l == null)
            //{
            //    return NotFound();
            //}
            return Ok(l);
        }
        // GET: api/Governorates/locations/id
        [HttpGet("locations/{id:int}")]
        public ActionResult getGovernerateLocations(int id)
        {
            List<Location> loc = _context.Locations.Where(e => e.GovernorateId == id && e.Approved == true).OrderByDescending(e=>e.Id).ToList();

            //if (loc == null)
            //{
            //    return NotFound();
            //}
            return Ok(loc);
        }
    }
}
