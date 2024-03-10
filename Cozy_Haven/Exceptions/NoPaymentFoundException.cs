using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class NoPaymentFoundException:Exception
    {
        string message;
        public NoPaymentFoundException()
        {
            message = "No Payment Found";
        }
        public override string Message => message;
    }
}
