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
            var Query = HttpContext.Request.Form;
            try
            {

                #region Request
                var Request = new
                {
                    draw = Convert.ToInt32(Query["draw"]),
                    start = Convert.ToInt32(Query["start"]),
                    length = Convert.ToInt32(Query["length"]),
                    sortByColumnId = Query["order[0][column]"],
                    sortDirection = Query["order[0][dir]"],
                    searchString = Query["search[value]"].ToString()?.ToLower(),
                    lengthValuePage = 5
                };
                #endregion


                #region GETDATA
                var List = new List<dynamic>() {
                new { id= 1, nombre="andrey", Estado=true },
              new  { id= 2, nombre= "ana", Estado= false },
              new  { id= 3, nombre= "andrea", Estado= false },
              new  { id= 4, nombre= "trama", Estado= false },
              new  { id= 5, nombre= "paola", Estado= false },
              new  { id= 6, nombre= "mami", Estado= false },
              new  { id= 7, nombre= "papi", Estado= false },
              new  { id= 8, nombre= "yukki", Estado= false },
              new  { id= 9, nombre= "ambar", Estado= false },
              new  { id= 10, nombre= "mariquita", Estado= false },
              new  { id= 11, nombre= "lilly", Estado= false },
        };

                #endregion



                #region Order

                #endregion

                #region CompletedData
                DataRequest = new
                {
                    recordsTotal = List.Count,
                    data = List.Skip(Request.start).Take(Request.lengthValuePage),
                    recordsFiltered = List.Count,
                    draw = Request.draw
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
