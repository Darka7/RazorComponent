"use strict";
var App;
(function (App) {
    //const { Component } = VuePropertyDecorator;
    //@Component
    // class VueConfiguration extends Vue{
    //    ApiKey = "Esto es la api Key";
    //    get GetNameCompany() {
    //        return "Nombre Persona";
    //    }
    //    created() {
    //        this.$Api =   new HttpService();
    //    }
    //}
    var SessionEntity = /** @class */ (function () {
        function SessionEntity() {
            this.ApiKey = "Esto es la api Key";
        }
        Object.defineProperty(SessionEntity.prototype, "GetNameCompany", {
            get: function () {
                return "Nombre Persona";
            },
            enumerable: false,
            configurable: true
        });
        return SessionEntity;
    }());
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