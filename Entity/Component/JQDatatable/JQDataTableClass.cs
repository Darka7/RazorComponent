using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Entity
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum JQBtnDefaults
    {
        
        [EnumMember(Value = "colvis")]
        colvis,
        [EnumMember(Value = "excel")]
        excel,
        [EnumMember(Value = "pdf")]
        pdf,

    }
    public class JQDatatableOptions
    {
       
        public  IEnumerable<JQBtnDefaults> BtnDefaults { get; set; }

        public bool? serverSide { get; set; }
        public string rowId { get; set; }




    }
}
