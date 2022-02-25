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
    var VmModalExam2 = App.CompModalExam2.Default;
    var Component = App.ImportVueDecorator.Component;
    var ModalExam1 = /** @class */ (function (_super) {
        __extends(ModalExam1, _super);
        function ModalExam1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Modal = false;
            _this.Modalr = false;
            return _this;
        }
        ModalExam1.prototype.Modal2Open = function () {
            VmModalExam2.Modal = true;
        };
        ModalExam1 = __decorate([
            Component
        ], ModalExam1);
        return ModalExam1;
    }(Vue));
    var Default = new ModalExam1().$mount("#ComponentModal1");
})(App || (App = {}));
//# sourceMappingURL=ModalExam1.js.map