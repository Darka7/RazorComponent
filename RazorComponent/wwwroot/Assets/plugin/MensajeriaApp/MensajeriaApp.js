"use strict";
var App;
(function (App) {
    var Mensaje;
    (function (Mensaje_1) {
        function Mostrar(Mensaje, Tipo, UrlPass) {
            if (Tipo === void 0) { Tipo = 0; }
            if (UrlPass === void 0) { UrlPass = null; }
            if (App.isNullOrEmpty(UrlPass)) {
                App.Toast.fire({
                    title: Mensaje,
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"
                });
            }
            else {
                if (Tipo == 0) {
                    axios.get("../Mensajeria", {
                        params: {
                            Mensaje: Mensaje,
                            Codigo: Tipo
                        }
                    })
                        .then(function () { return window.location.href = UrlPass; })
                        .catch(function (error) { return App.Toast.fire({ title: error, icon: "error" }); });
                }
                else {
                    App.Toast.fire({
                        title: Mensaje,
                        icon: Tipo == 0 ? "success"
                            : Tipo > 0 ? "warning"
                                : Tipo < 0 ? "error" : "info"
                    });
                }
            }
        }
        Mensaje_1.Mostrar = Mostrar;
        function MostrarBD(Result, UrlPass) {
            var _a, _b, _c, _d, _e;
            if (UrlPass === void 0) { UrlPass = null; }
            if (App.isNullOrEmpty(UrlPass)) {
                var Tipo = (_a = Result === null || Result === void 0 ? void 0 : Result.CodeError) !== null && _a !== void 0 ? _a : -1;
                App.Toast.fire({
                    title: (_b = Result === null || Result === void 0 ? void 0 : Result.MsgError) !== null && _b !== void 0 ? _b : "Sin mensaje",
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"
                });
            }
            else {
                if ((Result === null || Result === void 0 ? void 0 : Result.CodeError) == 0) {
                    axios.get("../Mensajeria", {
                        params: {
                            Mensaje: (_c = Result === null || Result === void 0 ? void 0 : Result.MsgError) !== null && _c !== void 0 ? _c : "Sin mensaje",
                            Codigo: Result === null || Result === void 0 ? void 0 : Result.CodeError
                        }
                    })
                        .then(function () { return window.location.href = UrlPass; })
                        .catch(function (error) { return App.Toast.fire({ title: error, icon: "error" }); });
                }
                else {
                    var Tipo = (_d = Result === null || Result === void 0 ? void 0 : Result.CodeError) !== null && _d !== void 0 ? _d : -1;
                    App.Toast.fire({
                        title: (_e = Result === null || Result === void 0 ? void 0 : Result.MsgError) !== null && _e !== void 0 ? _e : "Sin mensaje",
                        icon: Tipo == 0 ? "success"
                            : Tipo > 0 ? "warning"
                                : Tipo < 0 ? "error" : "info"
                    });
                }
            }
        }
        Mensaje_1.MostrarBD = MostrarBD;
    })(Mensaje = App.Mensaje || (App.Mensaje = {}));
})(App || (App = {}));
//# sourceMappingURL=MensajeriaApp.js.map