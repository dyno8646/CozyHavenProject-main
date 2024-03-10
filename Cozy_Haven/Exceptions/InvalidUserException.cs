using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class InvalidUserException:Exception
    {
        string message;
        public InvalidUserException()
        {
            message = "Invalid Username or Password";
        }
        public override string  Message=>message;
    }
}
