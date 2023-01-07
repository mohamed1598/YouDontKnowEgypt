using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class User
    {
        public User()
        {
            Comments = new HashSet<Comment>();
            Locations = new HashSet<Location>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool? IsAdmin { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Location> Locations { get; set; }
    }
}
