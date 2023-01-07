using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouDontKnowEgypt.Models;

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
      user.IsAdmin = false;
      db.Users.Add(user);
      db.SaveChanges();
      return Created($"user with name {user.Name}", user);
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
  }
}
