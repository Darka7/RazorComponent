using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class SecurityPageEntity
    {
        public bool? Consultar { get; set; }
        public bool? Insertar { get; set; }
        public bool? Eliminar { get; set; }
        public bool? Actualizar { get; set; }
        public bool FormUpdate { get; set; }
    }
}
