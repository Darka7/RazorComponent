using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(Attributes ="asp-v-for")]
    public class AspVForTagHelper : TagHelper
    {
        [HtmlAttributeName("asp-v-for")]
        public ModelExpression Items { get; set; }

        [HtmlAttributeName("key")]
        public string key { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.Attributes.Add("v-for", $"({key},{key}index) in {Items.Name}");
        }
    }
}
