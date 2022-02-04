"use strict";
var App;
(function (App) {
    //  declare var AppConfig: any;
    //  console.log(AppConfig);
    //  const { Component, Mixins } = VuePropertyDecorator;
    //  @Component
    //  class VueTest extends  Vue {
    //      Formulario: string = "Hola";
    //      Msg = "HolaMundo";
    //      Hello() {
    //          this.Msg = "Hola mundo Andrey " + this.$Session.GetNameCompany;
    //          var day = new Date();
    //          alert(dateFormat(day, "dd/mm/yyyy"));
    //          this.$Session.ApiKey = "Cambio por evento";
    //          console.log(this.$Session.ApiKey);
    //          this.$Api.SaveEmpleados().catch(erro => console.log(erro))
    //      }
    //      created() {
    //          console.log(this.$Api);
    //      }
    //  }
    //var vm=  new VueTest().$mount("#Appvue");
    App.PruebaMethodo = function (ids, dt, node, config) {
        console.log(ids);
        alert("asdadadads");
    };
    $(document).ready(function () {
        var columnas = [
            { Columna: "id", Label: "", Type: "Index", Orderable: false, ClassColum: null, Width: null },
            { Columna: "nombre", Label: "Nombre", Type: "Text", Orderable: true, ClassColum: null, Width: null },
            { Columna: "id", Label: "edit", Type: "Accion", Orderable: true, ClassColum: null, Width: null },
            { Columna: "id", Label: "check", Type: "Switch", Orderable: true, ClassColum: null, Width: null, Disabled: true },
        ];
        var btns = [
            {
                text: "Prueba", className: " btn-outline-primary", action: "App.PruebaMethodo"
            }
        ];
        var grid1 = App.GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns);
        //    GridTable("GridView2", [
        //        { Columna: "id", Label: "", Type: "Index", Orderable: false, ClassColum: null, Width: null },
        //        { Columna: "nombre", Label: "Nombre", Type: "Text", Orderable: true, ClassColum: null, Width: null },
        //        { Columna: "id", Label: "edit", Type: "Accion", Orderable: true, ClassColum: null, Width: null },
        //        { Columna: "id", Label: "check", Type: "Switch", Orderable: true, ClassColum: null, Width: null, Disabled: true },
        //    ], "api/Persona/List", "", "", true, { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true }, "id")
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map