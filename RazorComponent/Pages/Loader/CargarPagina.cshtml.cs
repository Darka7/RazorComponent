using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorComponent.Pages.Loader
{
    public class CargarPaginaModel : PageModel
    {

        [BindProperty(SupportsGet =true)]
        public string id { get; set; }
        public void OnGet()
        {

            var TEST = Request;
        }
        public class Param
        {
            public string id { get; set; }
        }


        [FromBody]
        [BindProperty]
        public Param Parametros { get; set; } = new();
        public void OnPost()
        {
            var test = Request;
        }
    }
}
