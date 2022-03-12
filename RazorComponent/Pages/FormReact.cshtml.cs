using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorComponent.Pages
{
    public class FormReactModel : PageModel
    {
        public Persona exam { get; set; } = new Persona() { TipoPersona = new TipoPersona() };
        public void OnGet()
        {
        }
    }
}
