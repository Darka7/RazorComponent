using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Reflection;

namespace RazorComponent.Helpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("vue-page-model")]
    public class vuemodel : TagHelper
    {

        public object model { get; set; }
        public string var { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            PropertyInfo[] props = model.GetType().GetProperties();

           

            var result= props.Where(item => item.GetCustomAttributes(typeof(VueData), true)?.FirstOrDefault()
                               as VueData != null)
                .Select(r => new { r.Name,value=r.GetValue(model) }).ToDictionary(t=>t.Name,t=>t.value);
            result = result ?? new Dictionary<string, object>();

            output.TagName = "script";
            output.Attributes.Add("defer", "");
            var createmodel = $@"var {var} ={JsonSerializer.Serialize(result)} ; ";
            output.Content.SetHtmlContent(createmodel);

            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
