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
    var useNvInput = App_1.ImportNvComponents.useNvInput, NvAutoNumeric = App_1.ImportNvComponents.NvAutoNumeric, useNvInputForm = App_1.ImportNvComponents.useNvInputForm, useNvInputFormModel = App_1.ImportNvComponents.useNvInputFormModel;
    var useState = React.useState;
    function App() {
        var _a = useNvInput(0), Num = _a[0], SetNum = _a[1], ModelNum = _a[2], ResetNum = _a[3];
        var _b = useNvInputFormModel({
            id: null,
            edad: null,
            Nombre: null,
            TipoPersona: { descripcion: null }
        }), Model = _b[0], SetModel = _b[1], BindModel = _b[2], ModelNames = _b[3], ResetModel = _b[4];
        function Guardar() {
            console.log(Model);
        }
        return (React.createElement(React.Fragment, null,
            Model.id,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "number" }, BindModel(ModelNames.id))),
            "  ",
            React.createElement("br", null),
            Model.Nombre,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text" }, BindModel(ModelNames.Nombre))),
            "  ",
            React.createElement("br", null),
            Model.TipoPersona.descripcion,
            " ",
            React.createElement("br", null),
            React.createElement("input", __assign({ type: "text" }, BindModel("TipoPersona.descripcion"))),
            "  ",
            React.createElement("br", null),
            Model.edad,
            " ",
            React.createElement("br", null),
            React.createElement(NvAutoNumeric, __assign({}, BindModel(ModelNames.edad))),
            "  ",
            React.createElement("br", null),
            React.createElement("button", { type: "button", className: "btn btn-primary", onClick: ResetModel }, " cambiar numero"),
            React.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () { return Guardar(); } }, " Guardar")));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById("AppReact"));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map