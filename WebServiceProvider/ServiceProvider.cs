using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace WebServiceProvider
{
    public partial class Service
    {
        private readonly HttpClient http;
        public string BaseAdress { get; set; }
        public Service(HttpClient http)
        {
            this.http = http;
           this.BaseAdress= http.BaseAddress.AbsoluteUri;
        }


    }
}
