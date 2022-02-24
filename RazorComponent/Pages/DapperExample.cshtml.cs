using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BD;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Entity;
namespace RazorComponent.Pages
{
    public class DapperExampleModel : PageModel
    {
        private readonly IDataAccess sql;

        public DapperExampleModel(IDataAccess sql)
        {
            this.sql = sql;
        }

        public async Task OnGetAsync()
        {

           
        }

    }
}
