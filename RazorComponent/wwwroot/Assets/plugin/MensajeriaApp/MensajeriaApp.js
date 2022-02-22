"use strict";
var App;
(function (App) {
    var MensajeriaApp;
    (function (MensajeriaApp) {
        function Mostrar(Mensaje, Tipo, UrlPass) {
            if (Tipo === void 0) { Tipo = 0; }
            if (UrlPass === void 0) { UrlPass = null; }
            if (App.isNullOrEmpty(UrlPass)) {
                return App.Toast.fire({
                    title: Mensaje,
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"
                });
            }
            else {
                if (Tipo == 0) {
                    return axios.get("../Mensajeria", {
                        params: {
                            Mensaje: Mensaje,
                            Codigo: Tipo
                        }
                    })
                        .then(function () { return window.location.href = UrlPass; })
                        .catch(function (error) { return App.Toast.fire({ title: error, icon: "error" }); });
                }
                else {
                    return App.Toast.fire({
                        title: Mensaje,
                        icon: Tipo == 0 ? "success"
                            : Tipo > 0 ? "warning"
                                : Tipo < 0 ? "error" : "info"
                    });
                }
            }
        }
        MensajeriaApp.Mostrar = Mostrar;
        function MostrarBD(Result, UrlPass, MensajeSuccess) {
            var _a, _b, _c, _d;
            if (UrlPass === void 0) { UrlPass = null; }
            if (MensajeSuccess === void 0) { MensajeSuccess = null; }
            if (App.isNullOrEmpty(UrlPass)) {
                var Tipo = (_a = Result === null || Result === void 0 ? void 0 : Result.CodeError) !== null && _a !== void 0 ? _a : -1;
                var Mensaje = Result === null || Result === void 0 ? void 0 : Result.MsgError;
                if (Tipo == 0)
                    Mensaje = App.isNullOrEmpty(MensajeSuccess) ? Result === null || Result === void 0 ? void 0 : Result.MsgError : MensajeSuccess;
                App.Toast.fire({
                    title: Mensaje !== null && Mensaje !== void 0 ? Mensaje : "Sin mensaje",
                    icon: Tipo == 0 ? "success"
                        : Tipo > 0 ? "warning"
                            : Tipo < 0 ? "error" : "info"
                });
            }
            else {
                if ((Result === null || Result === void 0 ? void 0 : Result.CodeError) == 0) {
                    var Mensaje = Result === null || Result === void 0 ? void 0 : Result.MsgError;
                    Mensaje = App.isNullOrEmpty(MensajeSuccess) ? Result === null || Result === void 0 ? void 0 : Result.MsgError : MensajeSuccess;
                    axios.get("../Mensajeria", {
                        params: {
                            Mensaje: (_b = Result === null || Result === void 0 ? void 0 : Result.MsgError) !== null && _b !== void 0 ? _b : "Sin mensaje",
                            Codigo: Result === null || Result === void 0 ? void 0 : Result.CodeError
                        }
                    })
                        .then(function () { return window.location.href = UrlPass; })
                        .catch(function (error) { return App.Toast.fire({ title: error, icon: "error" }); });
                }
                else {
                    var Tipo = (_c = Result === null || Result === void 0 ? void 0 : Result.CodeError) !== null && _c !== void 0 ? _c : -1;
                    App.Toast.fire({
                        title: (_d = Result === null || Result === void 0 ? void 0 : Result.MsgError) !== null && _d !== void 0 ? _d : "Sin mensaje",
                        icon: Tipo == 0 ? "success"
                            : Tipo > 0 ? "warning"
                                : Tipo < 0 ? "error" : "info"
                    });
                }
            }
        }
        MensajeriaApp.MostrarBD = MostrarBD;
    })(MensajeriaApp = App.MensajeriaApp || (App.MensajeriaApp = {}));
})(App || (App = {}));
//# sourceMappingURL=MensajeriaApp.js.map