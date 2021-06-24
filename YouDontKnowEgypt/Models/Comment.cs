using System;
using System.Collections.Generic;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class Comment
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? LocatoinId { get; set; }
        public string Comment1 { get; set; }

        public virtual Location Locatoin { get; set; }
        public virtual User User { get; set; }
    }
}
