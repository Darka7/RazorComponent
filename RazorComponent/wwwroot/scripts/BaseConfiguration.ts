﻿namespace App {

    export var isNullOrEmpty = function (value) { return (!value || value == undefined || value == "" || value.length == 0 || value == null); }
    export var IsNull = function (value) { return (value == undefined || value === "" || value.length == 0 || value == null); }

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
  
    export class SessionEntity  {


        ApiKey = "Esto es la api Key";

        get GetNameCompany() {
            return "Nombre Persona";
        }

        

    }

    export var Session = new SessionEntity();

    const PluginCore:PluginObject<_Vue> = {
        install(Vue: _Vue, options?: any) {
            Vue.prototype.$Api = new HttpService();
            Vue.prototype.$Session = Session;
           //Vue.mixin(VueConfiguration);
        },
    };


    Vue.use(PluginCore);
   
}