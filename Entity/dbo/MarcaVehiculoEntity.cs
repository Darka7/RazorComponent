using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
   public class MarcaVehiculoEntity
    {
        public int? MarcaVehiculoId { get; set; }
        public string Descripcion { get; set; }
        public bool? Estado { get; set; }



        public dynamic GetByIdParam()
        {
            return new
            {
                MarcaVehiculoId
            };
        }

    }
}
