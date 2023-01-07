using Microsoft.AspNetCore.Http;
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
  public class AuthenticationController : ControllerBase
  {
    YouDontKnowEgyptContext db;
    public AuthenticationController(YouDontKnowEgyptContext db)
    {
      this.db = db;
    }
    [HttpPost]
    public ActionResult CheckUser([FromBody] User user)
    {

      User u = this.db.Users.FirstOrDefault(e => e.Email == user.Email && e.Password == user.Password);
      if (u == null)
      {
        return Ok(false);
      }
      return Ok(u);
    }
  }
}
