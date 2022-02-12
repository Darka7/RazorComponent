using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.Helpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(Attributes ="v-model")]
    public class VModel : TagHelper
    {

        [HtmlAttributeName("v-model")]
        public string VModelinput { get; set; }

     

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var NameFor = VModelinput.Replace(".", "_");

          
            if (!context.AllAttributes.ContainsName("id") && !context.AllAttributes.ContainsName(":id")) {
                output.Attributes.SetAttribute("id",  NameFor);
            }

            if (!context.AllAttributes.ContainsName("name") & !context.AllAttributes.ContainsName(":name"))
            {
                output.Attributes.SetAttribute("name",NameFor);
            }

            output.Attributes.SetAttribute("v-model", VModelinput);

           
        }
    }
}
