using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = true)]
    public class VueData : Attribute
    {
        public VueData()
        {
            
        }
    }
}
