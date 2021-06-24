using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class LocationImage
    {
        public int Id { get; set; }
        public int? LocationId { get; set; }
        public string ImagePath { get; set; }

        public virtual Location Location { get; set; }
    }
}
