using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class NoDestinationFoundException : Exception
    {
        string message;
        public NoDestinationFoundException()
        {
            message = "No Hotel Found.";
        }
        public NoDestinationFoundException(int name)
        {
            message = $"No Destination found with name {name} is found.";
        }
        public override string Message => message;

    }
}