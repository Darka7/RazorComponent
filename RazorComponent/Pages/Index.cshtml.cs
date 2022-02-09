using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.Json;
using System.Threading.Tasks;
using Entity;
namespace RazorComponent.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IConfiguration config;

        public IndexModel(IConfiguration config)
        {
            this.config = config;
        }

        [VueData]
        public Persona Persona { get; set; } = new Persona()
        {
            id = 1,
            Nombre = "anita"
        };
        [VueData]
        public string mensaje { get; set; } = "Hola";




        [VueData]
        public List<Persona> ListaPersonas { get; set; } = new List<Persona>() {
        new Persona(){ id=1,edad=15, TipoPersona=new(){ descripcion="Amable" }, Nombre="andrey" },
        new Persona(){ id=3,edad=15, TipoPersona=new(){ descripcion="cariñosa" }, Nombre="ana" },
        };

        public IEnumerable<TreeEntity> Matrix { get; set; } = new List<TreeEntity>() {
         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=1,FacilityDes="f1",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=1,FacilityDes="f1",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=1,FacilityDes="f1",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=2,FacilityDes="f2",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=2,FacilityDes="f2",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=1 ,GroupDes="g1",FacilityId=2,FacilityDes="f2",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=3,FacilityDes="f3",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=3,FacilityDes="f3",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=3,FacilityDes="f3",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=4,FacilityDes="f4",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=4,FacilityDes="f4",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=1,BusinessDes="b1",GroupId=2 ,GroupDes="g2",FacilityId=4,FacilityDes="f4",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=5,FacilityDes="f5",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=5,FacilityDes="f5",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=5,FacilityDes="f5",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=6,FacilityDes="f6",Level=1,LevelDes="level 1", Mount=10 },
         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=6,FacilityDes="f6",Level=2,LevelDes="level 2", Mount=10 },
         new (){ BusinessId=2,BusinessDes="b2",GroupId=3 ,GroupDes="g3",FacilityId=6,FacilityDes="f6",Level=3,LevelDes="level 3", Mount=10 },

         new (){ BusinessId=2,BusinessDes="b2" },
      

        };

        public IEnumerable<LookupEntity<TreeEntity>> ResultMatrix { get; set; }



        public IEnumerable<SiteMapEntity> Sitio { get; set; } = new List<SiteMapEntity>() { 
            new SiteMapEntity(){ SiteMapId=1 ,SiteMapName="Administracion",Url=null,SiteMapParent=null, HasSubMenu=true},

            new SiteMapEntity(){ SiteMapId=2 ,SiteMapName="Usuarios",Url="Usuarios",SiteMapParent=1, HasSubMenu=true },
            new SiteMapEntity(){ SiteMapId=3 ,SiteMapName="CofiguracionUsuarios",Url="ConfigurarUsuarios",SiteMapParent=2, HasSubMenu=false },

            new SiteMapEntity(){ SiteMapId=4 ,SiteMapName="Roles",Url="Roles",SiteMapParent=1 , HasSubMenu=true},
            new SiteMapEntity(){ SiteMapId=5 ,SiteMapName="Roles Editar",Url="RolesEditar",SiteMapParent=4 ,HasSubMenu=true},
            new SiteMapEntity(){ SiteMapId=6 ,SiteMapName="Roles Asignar",Url="RolesAsignar",SiteMapParent=5 ,HasSubMenu=true},
            new SiteMapEntity(){ SiteMapId=7 ,SiteMapName="Roles Eliminar",Url="RolesEliminar",SiteMapParent=6 ,HasSubMenu=false},

            new SiteMapEntity(){ SiteMapId=8 ,SiteMapName="Cards",Url=null,SiteMapParent=null ,HasSubMenu=true},
            new SiteMapEntity(){ SiteMapId=9 ,SiteMapName="Facility",Url="Facility",SiteMapParent=8 ,HasSubMenu=false},
            new SiteMapEntity(){ SiteMapId=10 ,SiteMapName="Group",Url="Group",SiteMapParent=8 ,HasSubMenu=false},
            new SiteMapEntity(){ SiteMapId=11 ,SiteMapName="Levels",Url=null,SiteMapParent=8 ,HasSubMenu=true},

            new SiteMapEntity(){ SiteMapId=12 ,SiteMapName="Target",Url=null,SiteMapParent=null ,HasSubMenu=true},

        };

        public IEnumerable<LookupEntity<SiteMapEntity>> ResultSiteMap{ get; set; }
        public void OnGet()
        {

            ResultMatrix = Matrix.ToLookup(b => b.BusinessId)
                .Select(b => new LookupEntity<TreeEntity>()
                {
                    Key=b.Key,
                    Entity=b?.FirstOrDefault(),
                    Details=b?.ToLookup(g=>g.GroupId)
                    ?.Select(g=>new LookupEntity<TreeEntity>() { 
                        Key=g.Key,
                        Entity=g?.FirstOrDefault(),
                        Details=g?.ToLookup(f=>f.FacilityId)
                        ?.Select(f=> new LookupEntity<TreeEntity>() { 
                            Key=f.Key,
                            Entity=f?.FirstOrDefault(),
                            Details=f?.ToLookup(l=>l.Level)
                               ?.Select(l=> new LookupEntity<TreeEntity>() { 
                                Key=l.Key,
                                Entity=l?.FirstOrDefault()
                                })
                        })
                    })
                });


            ResultSiteMap = Sitio.Where(r => r.SiteMapParent == null)
                .Select(r => new LookupEntity<SiteMapEntity> {
                    Key=r.SiteMapId,
                    Entity=r,
                    Details=RecursiveSitemap(Sitio,r?.SiteMapId)
                });
           
        }

        public IEnumerable<LookupEntity<SiteMapEntity>> RecursiveSitemap(IEnumerable<SiteMapEntity> Lista,int? Parent)
        {
            return Lista.Where(r => r.SiteMapParent == Parent)
                .Select(r=> new LookupEntity<SiteMapEntity>() { 
                    Key=r?.SiteMapId,
                    Entity=r,
                    Details=RecursiveSitemap(Lista,r?.SiteMapId)
                });
        }


        public ContentResult OnGetConfig()
        {
          
            try
            {
                var obj = config.GetSection("AppConfig").Get<AppConfig>();
                var json = JsonSerializer.Serialize(obj); ;
                return new JavaScriptResult(@$"var AppConfig={json}");
            }
            catch (Exception ex)
            {

                return new JavaScriptResult("");
            }
        }
    }
}
