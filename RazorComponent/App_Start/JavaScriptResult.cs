using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace RazorComponent
{
    public class JavaScriptResult : ContentResult
    {
        public JavaScriptResult(string Script)
        {
            this.Content = Script;
            this.ContentType = "application/javascript";
        }
    }
}
