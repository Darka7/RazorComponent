using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Entity;
namespace RazorComponent.Pages
{
    public class Example2Model : PageModel
    {
        [VueData]
        public SecurityPageEntity Security { get; set; } = new() { Insertar = true };
        [VueData]
        public bool Ocultar { get; set; }
        [VueData]
        public Persona Persona { get; set; } = new Persona() { id=1,Nombre="Anita",edad=30 };

        public void OnGet()
        {
        }
    }
}
