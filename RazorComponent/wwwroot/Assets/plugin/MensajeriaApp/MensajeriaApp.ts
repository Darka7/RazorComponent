namespace App.MensajeriaApp {

    export function Mostrar(Mensaje:string,Tipo:number=0,UrlPass:string=null) {
        if (isNullOrEmpty(UrlPass)) {
           return Toast.fire({
                title: Mensaje,
                icon: Tipo == 0 ? "success"
                    : Tipo > 0 ? "warning"
                    : Tipo<0 ?"error" :"info"

            });

        } else {
            if (Tipo == 0) {
              return  axios.get("../Mensajeria", {
                    params: {
                        Mensaje: Mensaje,
                        Codigo: Tipo
                    }
                })
                  .then(() => window.location.href = UrlPass  )
                    .catch(error => Toast.fire({ title: error, icon: "error" })  );

            } else {
               return Toast.fire({
                    title: Mensaje,
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"

                });
            }
        }

    }

    export function MostrarBD(Result: DBEntity, UrlPass: string = null, MensajeSuccess:string=null) {
        if (isNullOrEmpty(UrlPass)) {
            var Tipo = Result?.CodeError ?? -1;
            var Mensaje = Result?.MsgError;
            if (Tipo == 0) Mensaje = isNullOrEmpty(MensajeSuccess) ? Result?.MsgError : MensajeSuccess;

            Toast.fire({
                title: Mensaje ?? "Sin mensaje",
                icon: Tipo == 0 ? "success"
                    : Tipo > 0 ? "warning"
                        : Tipo < 0 ? "error" : "info"

            });

        } else {
            if (Result?.CodeError == 0) {
                var Mensaje = Result?.MsgError;

                Mensaje = isNullOrEmpty(MensajeSuccess) ? Result?.MsgError : MensajeSuccess;

                axios.get("../Mensajeria", {
                    params: {
                        Mensaje: Result?.MsgError ?? "Sin mensaje",
                        Codigo: Result?.CodeError
                    }
                })
                    .then(() => window.location.href = UrlPass)
                    .catch(error => Toast.fire({ title: error, icon: "error" }));

            } else {
                var Tipo = Result?.CodeError ?? -1;

                Toast.fire({
                    title: Result?.MsgError ?? "Sin mensaje",
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"

                });
            }

        }


    }

   
}