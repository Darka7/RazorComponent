"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    var Component = VuePropertyDecorator.Component, Mixins = VuePropertyDecorator.Mixins;
    var VueTest = /** @class */ (function (_super) {
        __extends(VueTest, _super);
        function VueTest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Formulario = "Hola";
            _this.Msg = "HolaMundo";
            return _this;
        }
        VueTest.prototype.Hello = function () {
            this.Msg = "Hola mundo Andrey";
            var day = new Date();
            alert(dateFormat(day, "dd/mm/yyyy"));
        };
        VueTest = __decorate([
            Component
        ], VueTest);
        return VueTest;
    }(Vue));
    new VueTest().$mount("#Appvue");
    //export var PruebaMethodo: JQDataTableActionBtn = function (ids,dt,node,config) {
    //    console.log(ids);
    //    console.log("Hola andrey estas en PruebaMehodo");
    //}
    //$(document).ready(() => {
    //   var grid1=  GridTable("GridView", [
    //        { Columna: "id", Label: "", Type: "Index", Orderable: false, ClassColum: null, Width: null },
    //       { Columna: "nombre", Label: "Nombre", Type: "Text", Orderable: true, ClassColum: null, Width: null },
    //       { Columna: "id", Label: "edit", Type: "Accion", Orderable: true, ClassColum: null, Width: null },
    //       { Columna: "id", Label: "check", Type: "Switch", Orderable: true, ClassColum: null, Width: null, Disabled: true },
    //   ], "api/Persona/List", "", "", true, { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true }, "id", [
    //       {
    //           text: "Prueba", className: " btn-outline-primary", action: "App.PruebaMethodo"
    //       }
    //   ]);
    //    GridTable("GridView2", [
    //        { Columna: "id", Label: "", Type: "Index", Orderable: false, ClassColum: null, Width: null },
    //        { Columna: "nombre", Label: "Nombre", Type: "Text", Orderable: true, ClassColum: null, Width: null },
    //        { Columna: "id", Label: "edit", Type: "Accion", Orderable: true, ClassColum: null, Width: null },
    //        { Columna: "id", Label: "check", Type: "Switch", Orderable: true, ClassColum: null, Width: null, Disabled: true },
    //    ], "api/Persona/List", "", "", true, { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true }, "id")
    //});
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map