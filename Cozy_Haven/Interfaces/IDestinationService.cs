using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cozy_Haven.Interfaces
{
    public interface IDestinationService
    {
        public Task<Destination> AddDestination(DestinationDTO destination);
        public Task<Destination> DeleteDestination(int id);
        public Task<List<Destination>> GetAllDestinations();
        public Task<Destination> GetDestination(int id);
        public Task<Destination> UpdateDestination(Destination destination);
    }
}