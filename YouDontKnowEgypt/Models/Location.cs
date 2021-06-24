using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class Location
    {
        public Location()
        {
            Comments = new HashSet<Comment>();
            LocationImages = new HashSet<LocationImage>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool? Approved { get; set; }
        public int? UserId { get; set; }
        public int? CategoryId { get; set; }
        public int? GovernorateId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Governorate Governorate { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<LocationImage> LocationImages { get; set; }
    }
}
