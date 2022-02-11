using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.Helpers.Vue
{
    
   [HtmlTargetElement(Attributes = "vue-events")]
    public class VueAction : TagHelper
    {

        [HtmlAttributeName("v-action")]
        public IDictionary<string, string> OnEvent { get; set; } = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {

            OnEvent.ToList().ForEach(r => output.Attributes.SetAttribute($"@{r.Key}", r.Value));

        }
    }
}
