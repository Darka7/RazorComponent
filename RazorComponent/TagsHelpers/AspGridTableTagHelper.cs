using Entity;
using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("asp-grid-table",TagStructure =TagStructure.NormalOrSelfClosing)]
    public class AspGridTableTagHelper : TagHelper
    {

        [HtmlAttributeName("id")]
        public string Id { get; set; }

        [HtmlAttributeName("colums")]
        public List<JQDataTableColum> ColumsAsp { get; set; }

        [HtmlAttributeName("urldata")]
        public string urldata { get; set; }

        [HtmlAttributeName("urledit")]
        public string urledit { get; set; }

        [HtmlAttributeName("urldelete")]
        public string urldelete { get; set; }

        [HtmlAttributeName("security")]
        public SecurityPageEntity securityAsp { get; set; }

        [HtmlAttributeName("buttons")]
        public List<JQDataTableButtons> buttonsAps { get; set; }

        [HtmlAttributeName("defaults")]
        public JQDatatableOptions defaults { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "script";
            output.Attributes.Add("defer", "");

            var colums = JsonSerializer.Serialize(ColumsAsp);
            urldata = string.IsNullOrEmpty(urldata) ? "null" : $"'{urldata}'";
            urledit = string.IsNullOrEmpty(urledit) ? "null" : $"'{urledit}'";
            urldelete = string.IsNullOrEmpty(urldelete) ? "null" : $"'{urldelete}'";

            var security = JsonSerializer.Serialize(securityAsp ?? new SecurityPageEntity());
            var btns = JsonSerializer.Serialize(buttonsAps );
            var Options = JsonSerializer.Serialize(defaults ?? new JQDatatableOptions());


            var scripting = @$"var {Id}; $(document).ready(function () {{ {Id}= App.GridTable('{Id}',{colums},{urldata},{urledit},{urldelete},{security},{btns},{Options}); }});";

            output.Content.SetHtmlContent(scripting);

            output.TagMode = TagMode.StartTagAndEndTag;
        }
    }
}
