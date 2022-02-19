using Entity;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent
{
    public static class RequestPageExtension
    {

        public static T BadRequestResult<T>(this PageModel ctb, T Result)
        {

            // ctb.Response.StatusCode = 400;
            return Result;
        }

        public static DBEntity BadRequestResult(this PageModel ctb, Exception ex)
        {

            // ctb.Response.StatusCode = 400;
            return new() { CodeError = ex.HResult, MsgError = ex.Message };
        }

        public static DBEntity BadRequestResult(this PageModel ctb, DBEntity Entity)
        {

            //  ctb.Response.StatusCode = 400;
            return Entity;
        }
        /// <summary>
        /// ///////////////////////////
        /// </summary>
        /// <param name="ctb"></param>
        /// <param name="ex"></param>
        public static void BadRequestMessage(this PageModel ctb, Exception ex)
        {

            ctb.TempData.CrearMensaje(ex);
        }

        public static void BadRequestMessage(this PageModel ctb, string Mensaje)
        {

            ctb.TempData.CrearMensaje(Mensaje,-1);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctb"></param>
        /// <param name="Mensaje"></param>
        /// <param name="Result"></param>

        public static void PageMessage(this PageModel ctb, string Mensaje, DBEntity Result)
        {
            

            ctb.TempData.CrearMensaje(Mensaje, Result);
        }

        public static void PageMessage(this PageModel ctb, string Mensaje,int TipoMensaje=0)
        {

            ctb.TempData.CrearMensaje(Mensaje,TipoMensaje);
        }

    }
}
