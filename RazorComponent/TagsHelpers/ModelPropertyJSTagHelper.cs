using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text.Json;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("model-property-js",TagStructure = TagStructure.WithoutEndTag)]
    public class ModelPropertyJSTagHelper : TagHelper
    {
        [HtmlAttributeName("var")]
        public string var { get; set; }

        [HtmlAttributeName("property")]
        public ModelExpression model { get; set; }


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "script";
            output.Attributes.Add("defer", "");
            var createmodel = $@"var {var} ={ JsonSerializer.Serialize(model.Model)} ;";
            output.Content.SetHtmlContent(createmodel);
            output.TagMode = TagMode.StartTagAndEndTag;
        }

    }
}
