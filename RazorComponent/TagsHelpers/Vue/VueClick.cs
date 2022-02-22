using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(Attributes ="v-click")]
    public class VueClick : TagHelper
    {

        [HtmlAttributeName("v-click")]
        public string Click { get; set; } = "";
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.Attributes.Add("@click", Click);
        }
    }
}
