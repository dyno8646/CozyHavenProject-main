using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Mappers
{
    [ExcludeFromCodeCoverage]
    public class AddDestination
    {
        private readonly Destination _destination;

        public AddDestination(DestinationDTO destinationDTO)
        {
            _destination = new Destination
            {
                DestinationId = destinationDTO.DestinationId,
                Name = destinationDTO.Name,
                Description = destinationDTO.Description,
                //Country=destinationDTO.Country
            };
        }

        public Destination GetDestination()
        {
            return _destination;
        }
    }
}