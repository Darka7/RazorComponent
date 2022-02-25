using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("nv-modal")]
    public class NvModalTagHelper : TagHelper
    {
        [HtmlAttributeName("id")]
        public string id { get; set; }

        [HtmlAttributeName("title")]
        public string title { get; set; }

        [HtmlAttributeName("size")]
        public string size { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (!string.IsNullOrEmpty(id)) output.Attributes.SetAttribute("id", id);
            if (!string.IsNullOrEmpty(title)) output.Attributes.SetAttribute("title", title);
            if (!string.IsNullOrEmpty(size)) output.Attributes.SetAttribute("size", size);
        }
    }

    [HtmlTargetElement("nv-modal-r")]
    public class NvModalRTagHelper : TagHelper
    {
        [HtmlAttributeName("id")]
        public string id { get; set; }

        [HtmlAttributeName("title")]
        public string title { get; set; }

        [HtmlAttributeName("size")]
        public string size { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (!string.IsNullOrEmpty(id)) output.Attributes.SetAttribute("id", id);
            if (!string.IsNullOrEmpty(title)) output.Attributes.SetAttribute("title", title);
            if (!string.IsNullOrEmpty(size)) output.Attributes.SetAttribute("size", size);
        }
    }
}
