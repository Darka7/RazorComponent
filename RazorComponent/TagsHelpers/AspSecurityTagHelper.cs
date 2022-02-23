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
        [HtmlAttributeName("sec-insert")]
        public bool btninsert { get; set; } = false;

      

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (btninsert) output.Attributes.SetAttribute("sec-insert", "");
           
        }
    }
    [HtmlTargetElement(Attributes = "sec-update")]
    public class AspSecurityUpdateTagHelper : TagHelper
    {
      
        [HtmlAttributeName("sec-update")]
        public bool btnupdate { get; set; } = false;

     

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            
            if (btnupdate) output.Attributes.SetAttribute("sec-update", "");
            
        }
    }

    [HtmlTargetElement(Attributes = "sec-delete")]
    public class AspSecurityDeleteTagHelper : TagHelper
    {
       

        [HtmlAttributeName("sec-delete")]
        public bool btndelete { get; set; } = false;

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           
            if (btndelete) output.Attributes.SetAttribute("sec-delete", "");
        }
    }


}
