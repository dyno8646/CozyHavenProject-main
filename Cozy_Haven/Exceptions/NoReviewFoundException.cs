﻿using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Exceptions
{
    [ExcludeFromCodeCoverage]
    public class NoReviewFoundException:Exception
    {
        string message;
        public NoReviewFoundException()
        {
            message = "No Review Found.";
        }
        public NoReviewFoundException(string username)
        {
            message = $"No review is submitted by {username}";
        }
        public override string Message => message;
    }
}
