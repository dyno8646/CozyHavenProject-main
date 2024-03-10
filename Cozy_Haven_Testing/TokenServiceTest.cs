using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Services;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cozy_Haven_Testing
{
    public class TokenServiceTest
    {
        private TokenService _tokenService;

        [SetUp]
        public void SetUp()
        {
            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(new Dictionary<string, string>
                {
                { "SecretKey", "This is the dummy key that I use for this token" }
                })
                .Build();

            _tokenService = new TokenService(configuration);
        }

        [Test]
        public async Task GenerateToken_ShouldGenerateToken()
        {
            // Arrange
            var user = new LoginUserDTO
            {
                Username = "testuser",
                Role = "user"
            };

            // Act
            var token = await _tokenService.GenerateToken(user);

            // Assert
            Assert.IsNotNull(token);
        }
    }
}
