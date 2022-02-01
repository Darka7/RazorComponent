using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RazorComponent.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        [VueData]
        public Persona Persona { get; set; } = new Persona()
        {
            id = 1,
            Nombre = "anita"
        };
        [VueData]
        public string mensaje { get; set; } = "Hola";




        [VueData]
        public List<Persona> ListaPersonas { get; set; } =new List<Persona>() { 
        new Persona(){ id=1,edad=15, TipoPersona=new(){ descripcion="Amable" }, Nombre="andrey" },
        new Persona(){ id=3,edad=15, TipoPersona=new(){ descripcion="cariñosa" }, Nombre="ana" },
        };

        public void OnGet()
        {
          
        }
    }
}
