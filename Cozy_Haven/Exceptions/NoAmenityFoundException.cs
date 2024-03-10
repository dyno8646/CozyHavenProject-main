using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class NoAmenityFoundException:Exception
    {
        string message;
        public NoAmenityFoundException()
        {
            message = "No Amenity Found.";
        }
        public override string Message => message;
    }
}
