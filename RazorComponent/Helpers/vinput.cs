using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.Helpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("input",Attributes ="asp-vue",TagStructure =TagStructure.WithoutEndTag)]
    public class vinput : TagHelper
    {
        protected IHtmlGenerator Generator { get; }
        public vinput(IHtmlGenerator generator)
        {
            Generator = generator;
        }

        
       
        [HtmlAttributeNotBound]
        [ViewContext]
        public ViewContext ViewContext { get; set; }
       
        [HtmlAttributeName("asp-vue")]
        public ModelExpression For { get; set; }
       
        [HtmlAttributeName("vue-format")]
        public string Format { get; set; }

        [HtmlAttributeName("type")]
        public string InputTypeName { get; set; }



        [HtmlAttributeName("vue-data")]
        public string data { get; set; }



        [HtmlAttributeName("class")]
        public string Classes { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

            string name = this.For.Name;
            
            output.Attributes.Add("name", name);
            output.Attributes.Add("id", name);
            output.Attributes.Add("type", InputTypeName);
            if (string.IsNullOrEmpty(data))
            {
                output.Attributes.Add("v-model", $"{name}");
            }
            else
            {
                output.Attributes.Add("v-model", $"{data}.{name}");
            }
            
            output.Attributes.Add("class", "form-control "+Classes);

       


        }
    }
}
