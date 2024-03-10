using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models.DTOs
{
    [ExcludeFromCodeCoverage]
    public class DestinationDTO
    {
        public int DestinationId { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        //public string Country { get; set; }
    }
}