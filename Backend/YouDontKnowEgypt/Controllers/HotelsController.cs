﻿using System;
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
    public class HotelsController : ControllerBase
    {
        private readonly YouDontKnowEgyptContext _context;

        public HotelsController(YouDontKnowEgyptContext context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotels()
        {
            return await _context.Hotels.ToListAsync();
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);

            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
        // GET: api/Hotels/Governorate/5
        [HttpGet("Governorate/{id}")]
        public async Task<ActionResult<List<Hotel>>> GetHotelInGovernorate(int id)
        {
            List<Hotel> hotel = await _context.Hotels.Where(e=>e.GovernorateId==id).ToListAsync();

            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
        // GET: api/Hotels/Images/5
        [HttpGet("Images/{id}")]
        public async Task<ActionResult<List<HotelsImage>>> GetHotelImages(int id)
        {
            List<HotelsImage> hotel = await _context.HotelsImages.Where(e => e.HotelId == id).ToListAsync();

            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
        // GET: api/Hotels/Image/5
        [HttpGet("Image/{id}")]
        public async Task<ActionResult<HotelsImage>> GetHotelImage(int id)
        {
            HotelsImage hotel = await _context.HotelsImages.FirstOrDefaultAsync(e => e.HotelId == id);

            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
        // PUT: api/Hotels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHotel(int id, Hotel hotel)
        {
            if (id != hotel.Id)
            {
                return BadRequest();
            }

            _context.Entry(hotel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelExists(id))
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

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hotel>> PostHotel(Hotel hotel)
        {
            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHotel", new { id = hotel.Id }, hotel);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HotelExists(int id)
        {
            return _context.Hotels.Any(e => e.Id == id);
        }
    }
}
