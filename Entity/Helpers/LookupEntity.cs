using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class LookupEntity<T>
    {
        public dynamic Key { get; set; }
        public T Entity { get; set; }

        public IEnumerable<LookupEntity<T>> Details { get; set; }

        public bool HasDetails => Details==null?false : Details.Any();

    }
}
