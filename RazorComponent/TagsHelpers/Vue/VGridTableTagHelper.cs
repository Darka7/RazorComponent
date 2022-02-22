using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Text.Json;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("v-grid-table")]
    public class VGridTableTagHelper : TagHelper
    {
        [HtmlAttributeName("id")]
        public string Id { get; set; }

        [HtmlAttributeName("class")]
        public string className { get; set; }

        [HtmlAttributeName("dt.sync")]
        public string dt { get; set; }


        [HtmlAttributeName("colums")]
        public string colums { get; set; }


        [HtmlAttributeName("asp-v-colums")]
        public List<JQDataTableColum> ColumsAsp { get; set; }


        [HtmlAttributeName("urldata")]
        public string urldata { get; set; }

        [HtmlAttributeName("urledit")]
        public string urledit { get; set; }

        [HtmlAttributeName("urldelete")]
        public string urldelete { get; set; }


        [HtmlAttributeName("security")]
        public string security { get; set; }

        [HtmlAttributeName("asp-v-security")]
        public SecurityPageEntity securityAsp { get; set; }

        [HtmlAttributeName("buttons")]
        public string buttons { get; set; }

        [HtmlAttributeName("asp-v-buttons")]
        public IEnumerable<JQDataTableButtons> buttonsAps { get; set; }


        [HtmlAttributeName("selected.sync")]
        public string selected { get; set; }

        [HtmlAttributeName("asp-v-selected")]
        public ModelExpression selectedAsp { get; set; }

        [HtmlAttributeName("defaults")]
        public string defaults { get; set; }

        [HtmlAttributeName("asp-v-defaults")]
        public JQDatatableOptions defaultsAsp { get; set; }


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var selectedAspName = selectedAsp?.Name;

            if (!string.IsNullOrEmpty(Id)) output.Attributes.SetAttribute("id",Id);

            if (!string.IsNullOrEmpty(className)) output.Attributes.SetAttribute("class", className);

            if (ColumsAsp!=null) output.Attributes.SetAttribute(":colums", JsonSerializer.Serialize(ColumsAsp));

            if (!string.IsNullOrEmpty(urldata)) output.Attributes.SetAttribute("urldata", urldata);

            if (!string.IsNullOrEmpty(urledit)) output.Attributes.SetAttribute("urledit", urledit);

            if (!string.IsNullOrEmpty(urldelete)) output.Attributes.SetAttribute("urldelete", urldelete);

            if (securityAsp!=null) output.Attributes.SetAttribute(":security", JsonSerializer.Serialize(securityAsp));

            if (buttonsAps != null) output.Attributes.SetAttribute(":buttons", JsonSerializer.Serialize(buttonsAps));

            if (!string.IsNullOrEmpty(selectedAspName)) output.Attributes.SetAttribute(":selected.sync", selectedAspName);

            if (defaultsAsp!=null) output.Attributes.SetAttribute(":defaults", JsonSerializer.Serialize(defaultsAsp));



        }
    }
}
