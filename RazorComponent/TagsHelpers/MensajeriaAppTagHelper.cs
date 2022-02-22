using Microsoft.AspNetCore.Mvc.Rendering;
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
    [HtmlTargetElement("mensajeria-app",TagStructure =TagStructure.NormalOrSelfClosing)]
    public class MensajeriaAppTagHelper : TagHelper
    {
        [HtmlAttributeNotBound]
        [ViewContext]
        public ViewContext ViewContext { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "script";

            output.Attributes.SetAttribute("defer","");

            output.Content.SetHtmlContent(ViewContext.TempData.MostrarMensaje());

            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
