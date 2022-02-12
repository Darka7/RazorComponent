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
            _this.val = null;
            _this.obj = {
                val: null
            };
            return _this;
        }
        PruebaTest.prototype.handlerchange = function (e) {
            console.log(e);
        };
        PruebaTest.prototype.ChangeValue = function () {
            this.val = new Date();
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
            { Column: "nombre", Label: "Nombre", Type: "Text" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "Text" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
            { Column: "EmpresaMark", Label: "Empresa", Type: "SwitchData", SwitchDataValue: "IdEmpresa" },
        ];
        var btns = [
            {
                text: "Prueba", action: "App.PruebaMethodo"
            }
        ];
        //  var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns );
        //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map