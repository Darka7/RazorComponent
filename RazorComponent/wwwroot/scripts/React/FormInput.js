"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var App;
(function (App_1) {
    var useNvInputFormModel = App_1.ImportNvComponents.useNvInputFormModel, useNvInput = App_1.ImportNvComponents.useNvInput;
    function App() {
        var _a = useNvInputFormModel({
            id: 1, edad: 0, Nombre: "ANDREY",
            TipoPersona: {
                descripcion: "Responsable", PielEntity: { color: "Blanco" }
            }
        }), values = _a[0], SetValues = _a[1], Bind = _a[2], FormNames = _a[3];
        var _b = useNvInput("Andrey@gmail.com"), Email = _b[0], SetImail = _b[1], EmailModel = _b[2];
        function HandleForm() {
            console.log(values);
        }
        function HandlerNombre(evt) {
            console.log(evt);
        }
        return (React.createElement(React.Fragment, null,
            values.id,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "number", className: "form-control" }, Bind(FormNames.id))),
            " ",
            React.createElement("br", null),
            values.Nombre,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text", className: "form-control", onBlur: HandlerNombre }, Bind(FormNames.Nombre))),
            " ",
            React.createElement("br", null),
            values.edad,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "number", className: "form-control" }, Bind(FormNames.edad))),
            " ",
            React.createElement("br", null),
            values.TipoPersona.descripcion,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text", className: "form-control" }, Bind("TipoPersona.descripcion"))),
            " ",
            React.createElement("br", null),
            values.TipoPersona.PielEntity.color,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text", className: "form-control" }, Bind("TipoPersona.PielEntity.color"))),
            " ",
            React.createElement("br", null),
            Email,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text", className: "form-control" }, EmailModel)),
            " ",
            React.createElement("br", null),
            React.createElement("button", { type: "button", className: "btn btn-primary", onClick: HandleForm }, " Guardar")));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById("AppReact"));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map