using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class Hotel
    {
        public Hotel()
        {
            HotelsImages = new HashSet<HotelsImage>();
        }

        public int Id { get; set; }
        public int? GovernorateId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual Governorate Governorate { get; set; }
        public virtual ICollection<HotelsImage> HotelsImages { get; set; }
    }
}
