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
    [HtmlTargetElement(Attributes ="asp-v-if")]
    public class AspVIfTagHelper : TagHelper
    {

        [HtmlAttributeName("asp-v-if")]
        public ModelExpression prop { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.Attributes.SetAttribute("v-if", prop.Name);
        }
    }

    [HtmlTargetElement(Attributes = "asp-v-show")]
    public class AspVShowTagHelper : TagHelper
    {

        [HtmlAttributeName("asp-v-show")]
        public ModelExpression prop { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.Attributes.SetAttribute("v-show", prop.Name);
        }
    }
}
