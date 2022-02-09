using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
   public class TreeEntity
    {
        public int? BusinessId { get; set; }
        public string BusinessDes { get; set; }
        public int? GroupId { get; set; }
        public string GroupDes { get; set; }
        public int? FacilityId { get; set; }
        public string FacilityDes { get; set; }
        public int? Level { get; set; }
        public string LevelDes { get; set; }
        public int Mount { get; set; }

    }

    public class SiteMapEntity
    {
        public int? SiteMapId { get; set; }
        public string SiteMapName { get; set; }

        public string Url { get; set; }
        public int? SiteMapParent { get; set; }
        public bool HasSubMenu { get; set; }
    }


}
