namespace App.Example1 {

    export var PruebaMethodo: JQDataTableActionBtn<any[]> = function (ids,data,dt,node) {
        console.log(ids);
        console.log(data);
        MensajeriaApp.Mostrar("Hola")
    }

}