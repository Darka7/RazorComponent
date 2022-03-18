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
(function (App) {
    var ViewComponent;
    (function (ViewComponent) {
        var useNvInput = App.ImportNvComponents.useNvInput, NvAutoNumeric = App.ImportNvComponents.NvAutoNumeric, useNvInputForm = App.ImportNvComponents.useNvInputForm, useNvInputFormModel = App.ImportNvComponents.useNvInputFormModel, NvForm = App.ImportNvComponents.NvForm, NvValidateData = App.ImportNvComponents.NvValidateData;
        var useState = React.useState, useEffect = React.useEffect, createRef = React.createRef;
        function FormInputComponent() {
            //const [FormInit,FormValid] = UseFormValidator("#FormInputModule");
            var Formulario = createRef();
            var _a = useNvInput(0), Num = _a[0], SetNum = _a[1], ModelNum = _a[2], ResetNum = _a[3];
            var _b = useNvInputFormModel({
                id: null,
                edad: null,
                Nombre: null,
                TipoPersona: { descripcion: null }
            }), Model = _b[0], SetModel = _b[1], BindModel = _b[2], ModelNames = _b[3], ResetModel = _b[4];
            function Guardar() {
                if (Formulario.current.Validate()) {
                    console.log(Model);
                }
                else {
                    App.MensajeriaApp.Mostrar("Por favor validar los campos!", 1);
                }
            }
            return (React.createElement(React.Fragment, null,
                React.createElement(NvValidateData, { id: "FormInputModule", ref: Formulario },
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "id ",
                            Model.id),
                        React.createElement("input", __assign({}, BindModel(ModelNames.id), { type: "number", className: "form-control", required: true }))),
                    React.createElement("br", null),
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "Nombre ",
                            Model.Nombre),
                        React.createElement("input", __assign({}, BindModel(ModelNames.Nombre), { type: "text", className: "form-control", required: true }))),
                    React.createElement("br", null),
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "Tipo Persona ",
                            Model.TipoPersona.descripcion),
                        React.createElement("input", __assign({}, BindModel("TipoPersona.descripcion"), { type: "text", className: "form-control", required: true }))),
                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () { ResetModel(); Formulario.current.Reset(); } }, " cambiar numero"),
                    " ",
                    React.createElement("button", { type: "button", name: "submit", className: "btn btn-primary", onClick: function () { return Guardar(); } }, " Guardar"))));
        }
        ViewComponent.FormInputComponent = FormInputComponent;
        App.AppRender.Default = FormInputComponent;
    })(ViewComponent = App.ViewComponent || (App.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map