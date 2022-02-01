using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent
{
    public class Persona
    {
        public Persona()
        {
            TipoPersona ??= new TipoPersona();
        }

        public int id { get; set; }

        public int edad { get; set; }
        public string Nombre { get; set; }
        public TipoPersona TipoPersona { get; set; }


    }
}
