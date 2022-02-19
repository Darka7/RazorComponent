using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorComponent.Pages
{
    public class MensajeriaModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string Mensaje { get; set; }


        [BindProperty(SupportsGet = true)]
        public int Codigo { get; set; }

        public JsonResult OnGet()
        {
            try
            {
                this.PageMessage(Mensaje, Codigo);

                return new JsonResult(new DBEntity());

            }
            catch (Exception ex)
            {

                return new JsonResult(this.BadRequestResult(ex));
            }

        }
    }
}
