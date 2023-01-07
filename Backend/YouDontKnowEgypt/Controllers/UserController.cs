using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouDontKnowEgypt.Models;
using System.Net.Mail;
using YouDontKnowEgypt.common;

namespace YouDontKnowEgypt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        YouDontKnowEgyptContext db;
        public UserController(YouDontKnowEgyptContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public ActionResult getUsers()
        {

            List<User> users = db.Users.ToList();
            if (users == null)
            {
                return NotFound();
            }
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult getUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public ActionResult createUser(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            user.Password = CommonMethods.ConvertToEncrypt(user.Password);
            user.IsAdmin = false;
            db.Users.Add(user);
            db.SaveChanges();
            return Created($"user with name {user.Name}", user);
        }
        [HttpPut("{id}")]
        public ActionResult updateUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();

            }
            user.Password = CommonMethods.ConvertToEncrypt(user.Password);
            db.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            db.Users.Remove(user);
            db.SaveChanges();
            return NoContent();

        }
        // PUT: api/password/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("password/{id}")]
        public IActionResult changePassword(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            User u = db.Users.Find(id);
            u.Password = CommonMethods.ConvertToEncrypt(user.Password); ;
            db.Entry(u).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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
        private bool UserExists(int id)
        {
            return db.Users.Any(e => e.Id == id);
        }

        [HttpGet("information/{id}")]
        public ActionResult getUserName(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
