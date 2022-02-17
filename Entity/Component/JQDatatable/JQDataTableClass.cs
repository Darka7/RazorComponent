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
        public bool serverSide { get; set; } = true;
        public string rowId { get; set; }
        public bool RowIdEvent { get; set; } = false;
        public int pageLength { get; set; } = 10;
        public bool searching { get; set; } = true;
        public List<List<dynamic>> order { get; set; }= new List<List<dynamic>>() {
             new List<dynamic>(){ 1,"asc"}
        };
        public bool ordering { get; set; } = true;
        public bool stateSave { get; set; } = true;
        public IEnumerable<JQBtnDefaults> BtnDefaults { get; set; }
        public dynamic CreateRow { get; set; } = null;


    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum JQTypeColum
    {

        [EnumMember(Value = "Index")]
        Index,
        [EnumMember(Value = "DateTime")]
        DateTime,
        [EnumMember(Value = "Date")]
        Date,
        [EnumMember(Value = "IsActive")]
        IsActive,
        [EnumMember(Value = "IsActiveText")]
        IsActiveText,
        [EnumMember(Value = "Bool")]
        Bool,
        [EnumMember(Value = "Accion")]
        Accion,
        [EnumMember(Value = "Switch")]
        Switch,
        [EnumMember(Value = "SwitchData")]
        SwitchData,
        [EnumMember(Value = "LinkEdit")]
        LinkEdit,
        [EnumMember(Value = "LinkEvent")]
        LinkEvent,
        [EnumMember(Value = "LinkUrl")]
        LinkUrl,
        [EnumMember(Value = "HTML")]
        HTML,
        [EnumMember(Value = "JavaScript")]
        JavaScript,
        [EnumMember(Value = "ExecuteFunctionJS")]
        ExecuteFunctionJS,
        [EnumMember(Value = "Input")]
        Input,
        [EnumMember(Value = "Select")]
        Select,
        [EnumMember(Value = "SelectOnData")]
        SelectOnData,
        [EnumMember(Value = "Render")]
        Render

    }


    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum JQInputType
    {

        [EnumMember(Value = "text")]
        text,
        [EnumMember(Value = "number")]
        number,
        [EnumMember(Value = "checkbox")]
        checkbox,
        [EnumMember(Value = "color")]
        color,
        [EnumMember(Value = "email")]
        email,
        [EnumMember(Value = "password")]
        password,
        [EnumMember(Value = "tel")]
        tel
    }

    public class JQDataTableClass
    {
        public JQTypeColum Type { get; set; }

        public bool Orderable { get; set; }
        public string ClassColum { get; set; }
        public bool VisibleColum { get; set; } 
        public string WidthColum { get; set; }
        public string Width { get; set; }
        public string Class { get; set; }
        public string Column { get; set; }
        public string Label { get; set; }
        public string BoolTrue { get; set; }
        public string BoolFalse { get; set; }
        public bool? Disabled { get; set; }
        public string SwitchHideProperty { get; set; }
        public string SwitchDataValue { get; set; }
        public string LinkPropertySend { get; set; }
        public string LinkEvent { get; set; }
        public string LinkUrl { get; set; }
        public string Html { get; set; }
        public string JavaScript { get; set; }
        public JQInputType InputType { get; set; }

    }

    public class JQDataTableButtons
    {
        public string action { get; set; }
        public string className { get; set; }
        public string text { get; set; }
        public bool? enabled { get; set; }
        public string extend { get; set; }
        public string name { get; set; }
        public string titleAttr { get; set; }
    }

}
