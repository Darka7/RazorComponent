using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("gridjq")]
    public class gridjq : TagHelper
    {
        public string mensaje { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            
            output.TagName = "script";
            output.Attributes.Add("defer","");
            output.Content.SetHtmlContent($@"
                alert(""{mensaje}"");
                    ");
            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
