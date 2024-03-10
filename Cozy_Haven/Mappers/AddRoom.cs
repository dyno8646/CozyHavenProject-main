using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Mappers
{
    [ExcludeFromCodeCoverage]
    public class AddRoom
    {
        private readonly Room room;

        public AddRoom(RoomDTO addRoomDTO)
        {
            room = new Room
            {
                HotelId = addRoomDTO.HotelId,
                RoomSize = addRoomDTO.RoomSize,
                RoomType = addRoomDTO.RoomType,
                BedType = addRoomDTO.BedType,
                BaseFare = addRoomDTO.BaseFare,
                MaxOccupancy = addRoomDTO.MaxOccupancy,
                AC = addRoomDTO.AC,
                Available = true
            };
        }

        public Room GetRoom()
        {
            return room;
        }
    }
}
