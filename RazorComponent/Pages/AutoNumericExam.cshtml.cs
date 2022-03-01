using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorComponent.Pages
{
    public class AutoNumericExamModel : PageModel
    {
        public int nombre { get; set; }

        public int Decimal { get; set; } = 0;
        public void OnGet()
        {
        }
    }
}
