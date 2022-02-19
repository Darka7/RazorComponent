namespace App.Mensaje {

    export function Mostrar(Mensaje:string,Tipo:number=0,UrlPass:string=null) {
        if (isNullOrEmpty(UrlPass)) {
            Toast.fire({
                title: Mensaje,
                icon: Tipo == 0 ? "success"
                    : Tipo > 0 ? "warning"
                    : Tipo<0 ?"error" :"info"

            });

        } else {
            if (Tipo == 0) {
                axios.get("../Mensajeria", {
                    params: {
                        Mensaje: Mensaje,
                        Codigo: Tipo
                    }
                })
                  .then(() => window.location.href = UrlPass  )
                    .catch(error => Toast.fire({ title: error, icon: "error" })  );

            } else {
                Toast.fire({
                    title: Mensaje,
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"

                });
            }
        }

    }

    export function MostrarBD(Result:DBEntity,UrlPass:string=null) {
        if (isNullOrEmpty(UrlPass)) {
            var Tipo = Result?.CodeError ?? -1;
            Toast.fire({
                title: Result?.MsgError ?? "Sin mensaje",
                icon: Tipo == 0 ? "success"
                    : Tipo > 0 ? "warning"
                        : Tipo < 0 ? "error" : "info"

            });

        } else {
            if (Result?.CodeError == 0) {
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