using Cozy_Haven.Contexts;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

namespace Cozy_Haven.Repository
{
    [ExcludeFromCodeCoverage]
    public class DestinationRepository : IRepository<int, Destination>
    {
        private readonly CozyHavenContext _context;
        private readonly ILogger<DestinationRepository> _logger;

        public DestinationRepository(CozyHavenContext context, ILogger<DestinationRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Destination> Add(Destination item)
        {
            _context.Destinations.Add(item);
            _context.SaveChanges();
            _logger.LogInformation($"Destination added with ID: {item.DestinationId}");
            return item;
        }

        public async Task<Destination> Delete(int key)
        {
            var destination = await GetById(key);
            if (destination != null)
            {
                _context.Destinations.Remove(destination);
                _context.SaveChanges();
                _logger.LogInformation($"Destination deleted with ID: {key}");
                return destination;
            }
            _logger.LogWarning($"Destination with ID: {key} not found for deletion");
            return null;
        }

        public async Task<List<Destination>> GetAll()
        {
            _logger.LogInformation("Fetching all destinations");
            return await _context.Destinations
                .Include(d => d.Hotels)
                .ToListAsync();
        }

        public async Task<Destination> GetById(int key)
        {
            _logger.LogInformation($"Fetching destination with ID: {key}");
            var destination = await _context.Destinations
               .Include(d => d.Hotels)
               .FirstOrDefaultAsync(d => d.DestinationId == key);
            if (destination != null)
            {
                _logger.LogInformation($"Destination found with ID: {key}");
            }
            else
            {
                _logger.LogWarning($"Destination with ID: {key} not found");
            }
            return destination;
        }

        public async Task<Destination> Update(Destination item)
        {
            var destination = await GetById(item.DestinationId);
            if (destination != null)
            {
                _context.Entry<Destination>(item).State = EntityState.Modified;
                _context.SaveChanges();
                _logger.LogInformation($"Destination updated with ID: {item.DestinationId}");
                return item;
            }
            _logger.LogWarning($"Destination with ID: {item.DestinationId} not found for update");
            return null;
        }
    }
}