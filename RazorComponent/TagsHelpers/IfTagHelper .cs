using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(Attributes = "asp-if")]
    public class IfTagHelper : TagHelper
    {
        [HtmlAttributeName("asp-if")]
        public bool Include { get; set; } = true;

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            // Always strip the outer tag name as we never want <if> to render
            output.TagName = null;

            if (Include)
            {
                return;
            }

            output.SuppressOutput();
        }
    }
}
