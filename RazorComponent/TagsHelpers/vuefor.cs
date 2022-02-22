using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("vue-for")]
    public class vuefor : TagHelper
    {
        public string tag { get; set; }


        public string key { get; set; }

        public ModelExpression items { get; set; }

        [HtmlAttributeName("vue-items")]
        public string vitems { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

            output.TagName = tag;
            if (string.IsNullOrEmpty(vitems))
            {
                output.Attributes.Add("v-for", $"({key},{key}index) in {items.Name}");
            }
            else
            {
                output.Attributes.Add("v-for", $"({key},{key}index) in {vitems}");
            }
            output.TagMode = TagMode.StartTagAndEndTag;



        }
    }
}
