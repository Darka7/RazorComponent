"use strict";
var App;
(function (App) {
    var HttpService = /** @class */ (function () {
        function HttpService() {
            this.SaveEmpleados = function () {
                return axios.post("").then(function (_a) {
                    var data = _a.data;
                    return data;
                });
            };
        }
        return HttpService;
    }());
    App.HttpService = HttpService;
    App.Service = new HttpService();
})(App || (App = {}));
//# sourceMappingURL=ServiceProvider.js.map