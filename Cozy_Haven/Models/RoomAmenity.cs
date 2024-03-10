﻿using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class RoomAmenity
    {
        public int RoomId { get; set; }
        public Room? Room { get; set; }

        public int AmenityId { get; set; }
        public Amenity? Amenity { get; set; }
    }
}
