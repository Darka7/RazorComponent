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
        public JQGridTableResult(string Id, List<JQDataTableColum> Colums, 
            string urldata=null, string urledit=null, string urldelete=null,
            SecurityPageEntity Security=null, IEnumerable<JQDataTableButtons> Buttons =null,
            JQDatatableOptions Defaults=null
            )
        {
            var colums = JsonSerializer.Serialize(Colums);
            urldata = string.IsNullOrEmpty(urldata) ? "null" : $"'{urldata}'";
            urledit = string.IsNullOrEmpty(urledit) ? "null" : $"'{urledit}'";
            urldelete = string.IsNullOrEmpty(urldelete) ? "null" : $"'{urldelete}'";

            var securityPage = JsonSerializer.Serialize(Security ?? new SecurityPageEntity());
            var btns = JsonSerializer.Serialize(Buttons);
            var Options = JsonSerializer.Serialize(Defaults ?? new JQDatatableOptions());

            var scripting = @$"$(document).ready(function () {{ App.GridTable('{Id}',{colums},{urldata},{urledit},{urldelete},{securityPage},{btns},{Options}); }});";

            this.Content = scripting;
            this.ContentType = "application/javascript";
        }
    }




}
