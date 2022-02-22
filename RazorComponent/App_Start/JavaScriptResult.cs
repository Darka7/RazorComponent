using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc;
namespace RazorComponent
{
    public class JavaScriptResult : ContentResult
    {
        public JavaScriptResult(string Script)
        {
            this.Content = Script;
            this.ContentType = "application/javascript";
        }
    }

    public class JQGridTableResult : ContentResult
    {
        public JQGridTableResult(string Id, List<JQDataTableColum> ColumsAsp, 
            string urldata=null, string urledit=null, string urldelete=null,
            SecurityPageEntity securityAsp=null, IEnumerable<JQDataTableButtons> buttonsAps =null,
            JQDatatableOptions defaults=null
            )
        {
            var colums = JsonSerializer.Serialize(ColumsAsp);
            urldata = string.IsNullOrEmpty(urldata) ? "null" : $"'{urldata}'";
            urledit = string.IsNullOrEmpty(urledit) ? "null" : $"'{urledit}'";
            urldelete = string.IsNullOrEmpty(urldelete) ? "null" : $"'{urldelete}'";

            var security = JsonSerializer.Serialize(securityAsp ?? new SecurityPageEntity());
            var btns = JsonSerializer.Serialize(buttonsAps);
            var Options = JsonSerializer.Serialize(defaults ?? new JQDatatableOptions());

            var scripting = @$"$(document).ready(function () {{ App.GridTable('{Id}',{colums},{urldata},{urledit},{urldelete},{security},{btns},{Options}); }});";

            this.Content = scripting;
            this.ContentType = "application/javascript";
        }
    }




}
