using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.TagsHelpers.Vue
{
    
   [HtmlTargetElement(Attributes = "v--")]
    public class VueActionTagHelper : TagHelper
    {
        [HtmlAttributeName("v--")]
        public bool VueCopiler { get; set; }
        [HtmlAttributeName("v-action")]
        public IDictionary<string, string> OnEvent { get; set; } = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if(OnEvent.Any())
            OnEvent.ToList().ForEach(r => output.Attributes.SetAttribute($"@{r.Key}", r.Value));

        }
    }
}
