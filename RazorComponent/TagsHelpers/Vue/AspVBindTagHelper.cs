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
    [HtmlTargetElement(Attributes ="v--")]
    public class AspVBindTagHelper : TagHelper
    {
        [HtmlAttributeName("v--")]
        public bool VueCopiler { get; set; }

        [HtmlAttributeName("asp-v-bind")]
        public IDictionary<string, ModelExpression> OnBind { get; set; } = new Dictionary<string, ModelExpression>(StringComparer.OrdinalIgnoreCase);


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (OnBind.Any())
                OnBind.ToList().ForEach(r => output.Attributes.SetAttribute($":{r.Key}", r.Value?.Name));
        }
    }
}
