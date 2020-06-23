using GroceryStore.DbLayer.Entities;
using GroceryStore.Web.Constants;
using GroceryStore.Web.Settings;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GroceryStore.Web.ApiModels;
using Microsoft.IdentityModel.Tokens;
using System.Net;

namespace GroceryStore.Web.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        private readonly RoleManager<IdentityRole> _roleManager;

        private readonly JWT _jwt;

        public UserService(UserManager<ApplicationUser> userManager,
                           RoleManager<IdentityRole> roleManager,
                           IOptions<JWT> jwt)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _jwt = jwt.Value;
        }

        public async Task<AuthenticationModel> GetUser(ClaimsPrincipal user)
        {
            var email = user.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            var u = await _userManager.FindByEmailAsync(email);
            var rolesList = await _userManager.GetRolesAsync(u).ConfigureAwait(false);

            return new AuthenticationModel
            {
                FullName = $"{u.FirstName} {u.LastName}",
                Address = u.Address,
                Email = u.Email,
                PhoneNumber = u.PhoneNumber,
                Roles = rolesList.ToList(),
            };
        }

        public async Task<ApiResponse> LoginAsync(TokenRequestModel model)
        {
            var response = new ApiResponse();
            var authenticationModel = new AuthenticationModel();
            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user == null)
            {
                response.StatusCode = (int)HttpStatusCode.BadRequest;
                response.Data = $"No Accounts Registered with {model.Email}.";

                return response;
            }

            if (await _userManager.CheckPasswordAsync(user, model.Password))
            {
                JwtSecurityToken jwtSecurityToken = await CreateJwtToken(user);
                authenticationModel.Token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
                authenticationModel.Email = user.Email;
                authenticationModel.FullName = $"{user.FirstName} {user.LastName}";

                var rolesList = await _userManager.GetRolesAsync(user).ConfigureAwait(false);
                authenticationModel.Roles = rolesList.ToList();

                response.StatusCode = (int)HttpStatusCode.OK;
                response.Data = authenticationModel;

                return response;
            }

            response.StatusCode = (int)HttpStatusCode.BadRequest;
            response.Data = $"Incorrect Credentials for user {user.Email}.";
            return response;
        }

        public async Task<ApiResponse> RegisterAsync(RegisterModel model)
        {
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                Address = model.Address
            };

            var userWithSameEmail = await _userManager.FindByEmailAsync(model.Email);

            if (userWithSameEmail != null)
            {
                return new ApiResponse
                {
                    Data = "There exists an account with this email.",
                    StatusCode = (int)HttpStatusCode.BadRequest,
                };
            }

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, Constants.Authorization.default_role.ToString());
                model.Role = Constants.Authorization.default_role.ToString();

                JwtSecurityToken jwtSecurityToken = await CreateJwtToken(user);
                var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

                return new ApiResponse
                {
                    Data = new AuthenticationModel
                    {
                        FullName = model.FirstName + " " + model.LastName,
                        Email = model.Email,
                        Address = model.Address,
                        PhoneNumber = model.PhoneNumber,
                        Roles = new List<string> { model.Role },
                        Token = token
                    },

                    StatusCode = (int)HttpStatusCode.OK,
                };
            }

            return new ApiResponse
            {
                Data = "Error while creating the account.",
                StatusCode = (int)HttpStatusCode.InternalServerError,
            };
        }

        public async Task<string> GetUserId(ClaimsPrincipal user)
        {
            var email = user.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            var u = await _userManager.FindByEmailAsync(email);

            return u.Id;
        }

        private async Task<JwtSecurityToken> CreateJwtToken(ApplicationUser user)
        {
            var userClaims = await _userManager.GetClaimsAsync(user);
            var roles = await _userManager.GetRolesAsync(user);

            var roleClaims = new List<Claim>();

            for (int i = 0; i < roles.Count; i++)
            {
                roleClaims.Add(new Claim("roles", roles[i]));
            }

            var claims = new[]
            {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim("uid", user.Id)
                }
            .Union(userClaims)
            .Union(roleClaims);

            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key));
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(
                issuer: _jwt.Issuer,
                audience: _jwt.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddDays(30),
                signingCredentials: signingCredentials);

            return jwtSecurityToken;
        }
    }
}
