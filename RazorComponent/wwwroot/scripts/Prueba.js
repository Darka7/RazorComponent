"use strict";
var App;
(function (App) {
    //const { Component }=VuePropertyDecorator
    App.PruebaMethodo = function (ids, data, dt, node) {
        console.log(ids);
        console.log(data, 'data');
    };
    $(document).ready(function () {
        var columnas = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Text" },
            //{ Column: "id", Label: "edit", Type: "Accion" },
            //{ Column: "Estado", Label: "Estado", Type: "Text" },
            //{ Column: "Estado", Label: "Estado", Type: "Switch" },
            //  { Column: "id", Label: "Input", Type: "InputNumberMask" },
        ];
        var btns = [
            {
                text: "Prueba", action: "App.PruebaMethodo", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
            }
        ];
        var grid1 = App.GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", { Actualizar: true, Eliminar: true }, btns);
        //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map