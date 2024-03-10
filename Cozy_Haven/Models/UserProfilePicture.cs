using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class UserProfilePicture
    {
        [Key]
        public int ImageId { get; set; }
        public byte[] ImagePath { get; set; }
        public string username { get; set; }
        public virtual User User { get; set; }
    }
}