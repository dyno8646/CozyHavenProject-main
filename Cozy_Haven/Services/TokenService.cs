﻿using Cozy_Haven.Interfaces;
using Cozy_Haven.Models.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics.CodeAnalysis;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Cozy_Haven.Services
{
    [ExcludeFromCodeCoverage]
    public class TokenService:ITokenService
    {
        private readonly string _keyString;
        private readonly SymmetricSecurityKey _key;

        public TokenService(IConfiguration configuration)
        {
            _keyString = configuration["SecretKey"].ToString();
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_keyString));
        }
        public async Task<string> GenerateToken(LoginUserDTO user)
        {
            string token = string.Empty;
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId,user.Username),
                new Claim(ClaimTypes.Role,user.Role)
            };
            //Algorithm Signature with secret key
            var cred = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);

            //Giving the token decription
            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = cred
            };

            //Putting the token together
            var tokenHandler = new JwtSecurityTokenHandler();
            var myToken = tokenHandler.CreateToken(tokenDescription);
            token = tokenHandler.WriteToken(myToken);
            return token;
        }
        public async Task<string> ValidateToken(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var validationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = _key,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    RequireExpirationTime = true,
                    ValidateLifetime = true
                };

                SecurityToken validatedToken;
                var principal = tokenHandler.ValidateToken(token, validationParameters, out validatedToken);

                if (validatedToken is JwtSecurityToken jwtSecurityToken && jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                {
                    return principal.FindFirstValue(JwtRegisteredClaimNames.NameId);
                }
                throw new SecurityTokenException("Invalid token.");
            }
            catch (Exception ex)
            {
                throw new SecurityTokenException("Token validation failed.", ex);
            }
        }
    }
}
