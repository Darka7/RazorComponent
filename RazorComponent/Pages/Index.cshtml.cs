using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.Json;
using System.Threading.Tasks;
using Entity;
namespace RazorComponent.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IConfiguration config;

        public IndexModel(IConfiguration config)
        {
            this.config = config;
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
        public List<Persona> ListaPersonas { get; set; } = new List<Persona>() {
        new Persona(){ id=1,edad=15, TipoPersona=new(){ descripcion="Amable" }, Nombre="andrey" },
        new Persona(){ id=3,edad=15, TipoPersona=new(){ descripcion="cariñosa" }, Nombre="ana" },
        };

        public void OnGet()
        {
          


        }



        public ContentResult OnGetConfig()
        {
          
            try
            {
                var obj = config.GetSection("AppConfig").Get<AppConfig>();
                var json = JsonSerializer.Serialize(obj); ;
                return new JavaScriptResult(@$"var AppConfig={json}");
            }
            catch (Exception ex)
            {

                return new JavaScriptResult("");
            }
        }
    }
}
