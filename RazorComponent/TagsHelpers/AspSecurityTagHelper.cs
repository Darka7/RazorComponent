using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(Attributes = "sec-insert")]
   
    public class AspSecurityInsertTagHelper : TagHelper
    {
      
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           
           
        }
    }
    [HtmlTargetElement(Attributes = "sec-update")]
    public class AspSecurityUpdateTagHelper : TagHelper
    {
      
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
                     
        }
    }

    [HtmlTargetElement(Attributes = "sec-delete")]
    public class AspSecurityDeleteTagHelper : TagHelper
    {
       
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           
        }
    }


}
