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
    [HtmlTargetElement(Attributes ="asp-v-model")]
    public class AspVueModelTagHelper : TagHelper
    {

        [HtmlAttributeName("asp-v-model")]
        
        public ModelExpression For { get; set; }

      

        [HtmlAttributeName("class")]
        public string Classes { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            string Names = this.For.Name.Replace(".","_");
            string key = this.For.Name;

            if(!context.AllAttributes.ContainsName("id") && !context.AllAttributes.ContainsName(":id"))
                output.Attributes.Add("id", Names);

            if (!context.AllAttributes.ContainsName("name") & !context.AllAttributes.ContainsName(":name"))
                output.Attributes.Add("name", Names);


            output.Attributes.Add("v-model", key);

            if(string.IsNullOrEmpty(Classes)) output.Attributes.Add("class", "form-control");
        }
    }
}
