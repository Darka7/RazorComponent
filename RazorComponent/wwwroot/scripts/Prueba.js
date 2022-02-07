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
    App.PruebaMethodo = function (ids, data, dt, node) {
        console.log(ids);
        console.log(data, 'data');
    };
    $(document).ready(function () {
        var columnas = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Text" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
            { Column: "EmpresaMark", Label: "Empresa", Type: "SwitchData", SwitchDataValue: "IdEmpresa" },
        ];
        var btns = [
            {
                text: "Prueba", action: "App.PruebaMethodo"
            }
        ];
        var grid1 = App.GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns);
        var grid2 = App.GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map