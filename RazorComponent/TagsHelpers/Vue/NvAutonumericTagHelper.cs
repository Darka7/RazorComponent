using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("nv-autonumeric",Attributes = 
        "decimal,min,rounding,default,required,disabled,symbol,id,class,name")]
    public class NvAutonumericTagHelper : TagHelper
    {
      


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

           
        }
    }
}
