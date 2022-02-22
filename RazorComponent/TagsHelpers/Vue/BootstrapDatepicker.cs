using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    // You may need to install the Microsoft.AspNetCore.Razor.Runtime package into your project
    [HtmlTargetElement("v-bs-datepicker")]
    public class BootstrapDatepicker : TagHelper
    {
        [HtmlAttributeName("id")]
        public string id { get; set; }

        [HtmlAttributeName("class")]
        public string classes { get; set; }

        [HtmlAttributeName("required")]
        public bool required { get; set; }

        [HtmlAttributeName("disabled")]
        public bool disabled { get; set; }

        [HtmlAttributeName("format")]
        public string format { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (!string.IsNullOrEmpty(id))
            {
                output.Attributes.SetAttribute("id", id);
                output.Attributes.SetAttribute("name", id);
            }

            if (!string.IsNullOrEmpty(classes))
            {
                output.Attributes.SetAttribute("class", classes);
            }


            if (required)
            {
                output.Attributes.SetAttribute("required", "true");
            }

            if (disabled)
            {
                output.Attributes.SetAttribute("disabled", "true");
            }

            if (!string.IsNullOrEmpty(format))
            {
                output.Attributes.SetAttribute("format", format);
            }

        }
    }
}
