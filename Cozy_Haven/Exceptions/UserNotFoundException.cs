using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class UserNotFoundException:Exception
    {
        string message;
        public UserNotFoundException()
        {
            message = "No User Found";
        }
        public UserNotFoundException(string username)
        {
            message = $"User with {username} not found.";
        }
        public override string Message => message;
    }
}
