using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace HR.WebApi
{
    public class BasicAuthFilterAttribute : ActionFilterAttribute
    {
        private StringValues xyz;

        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            
            var authHeader = actionContext.HttpContext.Request.Headers.TryGetValue("Authorization", out xyz);
           // actionContext.Result
        }
    }

    public class ClaimRequirementAttribute : TypeFilterAttribute
    {
        public ClaimRequirementAttribute(string claimType, string claimValue)
            : base(typeof(ClaimRequirementFilter))
        {
            Arguments = new object[] { new Claim(claimType, claimValue) };
        }
    }


}
