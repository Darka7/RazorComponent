using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace RazorComponent.Helpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("model-js")]
    public class modeljs : TagHelper
    {
        public string var { get; set; }

        [HtmlAttributeName("js-model")]
        public ModelExpression model { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "script";
            output.Attributes.Add("defer", "");
            var createmodel = $@"var {var} ={JsonSerializer.Serialize(model.Model)} ;";
            output.Content.SetHtmlContent(createmodel);
          
            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
