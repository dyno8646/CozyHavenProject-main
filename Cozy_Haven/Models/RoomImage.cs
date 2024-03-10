using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class RoomImage
    {
        [Key]
        public int ImageId { get; set; }
        public byte[] ImagePath { get; set; }
        public int? RoomId { get; set; }
        public virtual Room Room { get; set; }

    }
}