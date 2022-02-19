using Entity;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorComponent
{
    public static class MensajeriaApp
    {
        public static string MostrarMensaje(this ITempDataDictionary temp)
        {

            var print = "";
            if (temp.ContainsKey("PageMessageTemp__"))
            {
                var codigo = temp.ContainsKey("PageMessageCodeTemp__") ? temp["PageMessageCodeTemp__"] as int? :0;
                var mensaje = temp["PageMessageTemp__"] as string;

                print = @$"App.Mensaje.Mostrar(""{mensaje}"",{codigo ?? 0});";

            }

            temp.Clear();
            temp.Save();
            return print;
        }



        public static void CrearMensaje(this ITempDataDictionary Temp,  string Mensaje, DBEntity Result)
        {
            Temp.Clear();
            if (Result.CodeError == 0)
            {
                Temp["PageMessageTemp__"] = Mensaje;
                Temp["PageMessageCodeTemp__"] = 0;
                Temp.Save();
            }
        }

        public static void CrearMensaje(this ITempDataDictionary Temp, string Mensaje,int TipoMensaje=0)
        {
            Temp.Clear();

            Temp["PageMessageTemp__"] = Mensaje;
            Temp["PageMessageCodeTemp__"] = TipoMensaje;
            Temp.Save();

        }


        public static void CrearMensaje(this ITempDataDictionary Temp,Exception ex , int TipoMensaje=-1 )
        {
            Temp.Clear();

            Temp["PageMessageTemp__"] = ex.Message;
            Temp["PageMessageCodeTemp__"] = TipoMensaje;
            Temp.Save();

        }


    }
}
