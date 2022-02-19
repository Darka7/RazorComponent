"use strict";
var App;
(function (App) {
    App.isNullOrEmpty = function (value) { return (!value || value == undefined || value == "" || value.length == 0 || value == null); };
    App.IsNull = function (value) { return (value == undefined || value === "" || value.length == 0 || value == null); };
})(App || (App = {}));
//# sourceMappingURL=IsNull.js.map