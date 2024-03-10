using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class HotelImage
    {
        [Key]
        public int ImageId { get; set; }
        public byte[] ImagePath { get; set; }
        public int? HotelId { get; set; }
        public virtual Hotel Hotel { get; set; }

    }
}
