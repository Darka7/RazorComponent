using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {


        [HttpPost("List")]
        public async Task<dynamic> ListRolesDataTable()
        {

            dynamic DataRequest;
           
            try
            {
               var Query = HttpContext.Request?.Form;
                #region Request
                var DTOptions = new
                {
                    draw = Convert.ToInt32(Query["draw"]),
                    start = Convert.ToInt32(Query["start"]),
                    length = Convert.ToInt32(Query["length"]),
                    sortByColumnId = Query["order[0][column]"],
                    sortDirection = Query["order[0][dir]"],
                    searchString = Query["search[value]"].ToString()?.ToLower()
                };
                #endregion


                #region GETDATA
                var List = new List<dynamic>() {
                new { id= 1, nombre="andrey", Estado=true, IsReport=true,IdEmpresa="novus" , EmpresaMark=(int?)null},
              new  { id= 2, nombre= "ana", Estado= false,IsReport=false,IdEmpresa=1 , EmpresaMark=(int?)null},
              new  { id= 3, nombre= "andrea", Estado= false,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null },
              new  { id= 4, nombre= "trama", Estado= false ,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null},
              new  { id= 5, nombre= "paola", Estado= false,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null },
              new  { id= 6, nombre= "mami", Estado= false ,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null},
              new  { id= 7, nombre= "papi", Estado= false ,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null},
              new  { id= 8, nombre= "yukki", Estado= false ,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null},
              new  { id= 9, nombre= "ambar", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 10, nombre= "mariquita", Estado= false,IsReport=false,IdEmpresa=1, EmpresaMark=(int?)null },
              new  { id= 11, nombre= "lilly", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 12, nombre= "c2", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 13, nombre= "c3", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 14, nombre= "c4", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 15, nombre= "c5", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 16, nombre= "c6", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 17, nombre= "c7", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 18, nombre= "c8", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 19, nombre= "c9", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},
              new  { id= 20, nombre= "c20", Estado= false ,IsReport=false,IdEmpresa="novus", EmpresaMark=(int?)null},

        };

                #endregion



                #region Order

                #endregion

                #region CompletedData
                DataRequest = new
                {
                    recordsTotal = List.Count,
                    data = List.Skip(DTOptions.start).Take(DTOptions.length),
                    recordsFiltered = List.Count,
                    draw = DTOptions.draw
                };
                //DataRequest.recordsTotal = List.Count;
                //DataRequest.data = List.Skip(Request.start).Take(Request.lengthValuePage);
                //// DataRequest.data = filter ;
                //DataRequest.recordsFiltered = List.Count;
                //DataRequest.draw = Request.draw;
                #endregion

                #region Verifique data error

                #endregion
                return DataRequest;
            }
            catch (Exception ex)
            {
                return null;
            }
            #region Response
           
            #endregion
        }
    }
}
