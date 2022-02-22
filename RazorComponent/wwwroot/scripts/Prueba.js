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
    var Component = VuePropertyDecorator.Component;
    var PruebaTest = /** @class */ (function (_super) {
        __extends(PruebaTest, _super);
        function PruebaTest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.columnas = [
                { Column: "id", Label: "", Type: "Index" },
                { Column: "nombre", Label: "Nombre", Type: "Input", InputType: "text", Class: "form-control" },
                { Column: "id", Label: "edit", Type: "Accion" },
                { Column: "Estado", Label: "Estado", Type: "IsActive" },
                { Column: "Estado", Label: "Estado", Type: "Switch" },
            ];
            _this.JqGrid = null;
            _this.JqGrid2 = null;
            _this.btns = [
                {
                    text: "Prueba", action: "pruebamethodo", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit float-end"
                },
                {
                    text: "Prueba2", action: "pruebamethodo", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
                }
            ];
            _this.SelectedsTable = [];
            _this.SelectedsTable2 = [];
            _this.dataGrid = [];
            _this.dataGrid2 = [];
            _this.Nombre = "Hola Andrey";
            return _this;
        }
        PruebaTest.prototype.PruebaMethodo = function (ids, data, jq, none) {
            this.JqGrid.buttons().nodes().hide();
        };
        PruebaTest.prototype.otraprueba = function (ids, data, dt, none) {
            alert("Tabla numero dos");
        };
        PruebaTest = __decorate([
            Component
        ], PruebaTest);
        return PruebaTest;
    }(Vue));
    new PruebaTest().$mount("#Appvue");
    App.PruebaMethodo = function (ids, data, dt, node) {
        console.log(ids);
        console.log(data, 'data');
    };
    $(document).ready(function () {
        var columnas = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Input", InputType: "text", Class: "form-control" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "IsActive" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
        ];
        var btns = [
            {
                text: "Prueba", action: "App.PruebaMethodo", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
            }
        ];
        //  var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", {Actualizar:true,Eliminar:true}, btns );
        //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map