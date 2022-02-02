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
    var VueConfiguration = /** @class */ (function (_super) {
        __extends(VueConfiguration, _super);
        function VueConfiguration() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ApiKey = "Esto es la api Key";
            return _this;
        }
        Object.defineProperty(VueConfiguration.prototype, "GetNameCompany", {
            get: function () {
                return "Nombre Persona";
            },
            enumerable: false,
            configurable: true
        });
        VueConfiguration.prototype.created = function () {
            this.$Api = new App.HttpService();
        };
        VueConfiguration = __decorate([
            Component
        ], VueConfiguration);
        return VueConfiguration;
    }(Vue));
    var SessionEntity = /** @class */ (function (_super) {
        __extends(SessionEntity, _super);
        function SessionEntity() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ApiKey = "Esto es la api Key";
            return _this;
        }
        Object.defineProperty(SessionEntity.prototype, "GetNameCompany", {
            get: function () {
                return "Nombre Persona";
            },
            enumerable: false,
            configurable: true
        });
        SessionEntity.prototype.created = function () {
            this.$Api = new App.HttpService();
        };
        return SessionEntity;
    }(Vue));
    App.SessionEntity = SessionEntity;
    App.Session = new SessionEntity();
    var PluginCore = {
        install: function (Vue, options) {
            Vue.prototype.$Api = new App.HttpService();
            Vue.prototype.$Session = App.Session;
            //Vue.mixin(VueConfiguration);
        },
    };
    Vue.use(PluginCore);
})(App || (App = {}));
//# sourceMappingURL=BaseConfiguration.js.map