using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace RazorComponent.Helpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement(tag: "vuegridtable",Attributes ="table")]
    public class VueGridTableTagHelper : TagHelper
    {
        [HtmlAttributeName("asp-v-colums")]
        public List<Persona> colums { get; set; }

        [HtmlAttributeName("table")]
        public string table { get; set; }

        [HtmlAttributeName("colums")]
        public string ColumsVue { get; set; }

      

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

            output.Attributes.Add("table", table);



            output.Attributes.Add("colums", ColumsVue);
            if (colums!=null) {

                output.Attributes.SetAttribute(":colums", JsonSerializer.Serialize(colums));

            }

          //  output.Attributes.Add("@click", OnClick);
            
        }
    }
}
