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

        }


    }


}