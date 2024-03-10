using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Helper
{
    [ExcludeFromCodeCoverage]
    public class APIResponse
    {
        public int ResponseCode { get; set; }
        public string Result { get; set; }
        public string Message { get; set; }
    }
}