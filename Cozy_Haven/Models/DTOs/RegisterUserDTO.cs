﻿using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models.DTOs
{
    [ExcludeFromCodeCoverage]
    public class RegisterUserDTO
    {
        public string Username { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public DateTime DateofBirth { get; set; }
        public string ContactNumber {  get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
        public string Address {  get; set; }
        public string Gender { get; set; }
    }
}

