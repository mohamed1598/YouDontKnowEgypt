using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class Governorate
    {
        public Governorate()
        {
            Locations = new HashSet<Location>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Location> Locations { get; set; }
    }
}
