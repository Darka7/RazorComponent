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
    var WithRender = App.VueLoad.WithRender, TemplateAsync = App.VueLoad.TemplateAsync, Template = App.VueLoad.Template;
    var titulo = "title";
    var TemplateLoadar = /** @class */ (function (_super) {
        __extends(TemplateLoadar, _super);
        function TemplateLoadar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = "Esto es una variable";
            _this.gg = "Hola";
            return _this;
        }
        TemplateLoadar.prototype.OnClickMe = function () {
            bootbox.alert("Hola");
        };
        TemplateLoadar.prototype.created = function () {
        };
        TemplateLoadar = __decorate([
            Component,
            WithRender("<div>\n                       <h1>Hola Mundo With Render {{".concat(titulo, "}}</h1>\n\n                          <input type=\"text\" v-model=\"title\" />\n                    </div>"))
        ], TemplateLoadar);
        return TemplateLoadar;
    }(Vue));
    new Vue({
        render: function (h) { return h(TemplateLoadar); },
    }).$mount("#AddHtml");
})(App || (App = {}));
//# sourceMappingURL=Loader.js.map