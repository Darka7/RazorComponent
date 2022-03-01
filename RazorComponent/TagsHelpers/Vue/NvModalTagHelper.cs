using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("nv-modal",Attributes = "id,title,size")]
    public class NvModalTagHelper : TagHelper
    {
       
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
         
        }
    }

    [HtmlTargetElement("nv-modal-r",Attributes = "id,title,size")]
    public class NvModalRTagHelper : TagHelper
    {
       
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           
        }
    }
}
