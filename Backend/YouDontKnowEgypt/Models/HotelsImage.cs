using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class HotelsImage
    {
        public int Id { get; set; }
        public int? HotelId { get; set; }
        public string ImagePath { get; set; }

        public virtual Hotel Hotel { get; set; }
    }
}
