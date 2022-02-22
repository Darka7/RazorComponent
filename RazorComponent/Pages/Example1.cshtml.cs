using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorComponent.Pages
{
    public class Example1Model : PageModel
    {

        public List<JQDataTableColum> Colums { get; set; } = new List<JQDataTableColum>() { 
            new (){ Column="id",Type=JQTypeColum.Index},
            new (){ Column="nombre",Label="Nombre",Type=JQTypeColum.Input,InputType=JQInputType.text,Class="form-control"},
            new (){ Column="id",Label="Edit", Type=JQTypeColum.Accion},
            new (){ Column="Estado",Label="Estado",Type=JQTypeColum.IsActive},
            new (){ Column="Estado",Label="Marca Año",Type=JQTypeColum.Switch,Width="15%"},

        };

        public List<JQDataTableButtons> Btns { get; set; } = new List<JQDataTableButtons>() {
        new(){ text="Prueba",action="App.Example1.PruebaMethodo",className="btnprueba"}
        };

        public void OnGet()
        {
            

        }


        public JQGridTableResult OnGetGridTable()
        {
            return new JQGridTableResult("Grid1",Colums, "api/Persona/List",urldelete: "api/Persona/",Buttons:Btns);
        }
    }
}
