using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class NoRoomFoundException:Exception
    {
        string message;
        public NoRoomFoundException()
        {
            message = "No room found";
        }
        public NoRoomFoundException(string availability)
        {
            message = availability;
        }
        public override string Message => message;
    }
}
