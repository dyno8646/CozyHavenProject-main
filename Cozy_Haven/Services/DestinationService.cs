using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Mappers;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Repository;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

namespace Cozy_Haven.Services
{
    public class DestinationService : IDestinationService
    {
        private readonly IRepository<int, Destination> _repository;
        private readonly ILogger<DestinationService> _logger;

        public DestinationService(IRepository<int, Destination> repository, ILogger<DestinationService> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        public async Task<Destination> AddDestination(DestinationDTO destinationDTO)
        {
            var destinationMapper = new AddDestination(destinationDTO);
            var destination = destinationMapper.GetDestination();

            return await _repository.Add(destination);
        }

        public async Task<Destination> DeleteDestination(int id)
        {
            var destination = await GetDestination(id);
            if (destination != null)
            {
                return await _repository.Delete(id);
            }
            throw new NoDestinationFoundException();
        }

        public async Task<List<Destination>> GetAllDestinations()
        {
            var destinations = await _repository.GetAll();
            if (destinations != null)
            {
                return destinations;
            }
            throw new NoDestinationFoundException();
        }

        public Task<Destination> GetDestination(int id)
        {
            return _repository.GetById(id);
        }
        [ExcludeFromCodeCoverage]
        public async Task<Destination> UpdateDestination(Destination destination)
        {
            var existingDestination = await GetDestination(destination.DestinationId);
            if (existingDestination != null)
            {
                existingDestination.Name = destination.Name;
                existingDestination.Description = destination.Description;
                //existingDestination.Country=destination.Country;

                return await _repository.Update(existingDestination);
            }
            throw new NoDestinationFoundException();
        }

    }
}