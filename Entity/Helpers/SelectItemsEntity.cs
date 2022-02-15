using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
  public  class SelectItemsEntity
    {
        public dynamic Value { get; set; }
        public string Text { get; set; }
        public bool Disabled { get; set; }
        public bool Selected { get; set; }
    }


}
