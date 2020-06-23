using GroceryStore.DbLayer.Entities;
using GroceryStore.Web.ApiModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.Services
{
    public interface IUserService
    {
        Task<ApiResponse> RegisterAsync(RegisterModel model);

        Task<ApiResponse> LoginAsync(TokenRequestModel model);

        Task<AuthenticationModel> GetUser(ClaimsPrincipal user);

        Task<string> GetUserId(ClaimsPrincipal user);
    }
}
