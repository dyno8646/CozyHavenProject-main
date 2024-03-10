using Cozy_Haven.Contexts;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Repository
{
    [ExcludeFromCodeCoverage]
    public class RoomRepository : IRepository<int, Room>
    {
        private readonly CozyHavenContext _context;

        public RoomRepository(CozyHavenContext context)
        {
            _context=context;
        }
        public async Task<Room> Add(Room item)
        {
            _context.Rooms.Add(item);
            _context.SaveChanges();
            return item;
        }

        public async Task<Room> Delete(int key)
        {
            var room=await GetById(key);
            if (room!=null)
            {
                _context.RoomImages.RemoveRange(_context.RoomImages.Where(image => image.RoomId == room.RoomId));
                _context.SaveChanges();
                _context.Rooms.Remove(room);
                _context.SaveChanges();
                return room;
            }
            return null;
        }

        public async Task<List<Room>> GetAll()
        {
            return _context.Rooms
                .Include(r => r.Bookings)
                .Include(r => r.Amenities)
                .ToList();
        }

        public async Task<Room> GetById(int key)
        {
            var room = _context.Rooms
                .Include(r => r.Bookings)
                .Include(r => r.Amenities)
                .FirstOrDefault(r=>r.RoomId == key);
            return room;
        }

        public async Task<Room> Update(Room item)
        {
            var room= await GetById(item.RoomId);
            if (room!=null)
            {
                _context.Entry<Room>(item).State=EntityState.Modified;
                _context.SaveChanges();
                return item;
            }
            return null;
            
        }
    }
}
