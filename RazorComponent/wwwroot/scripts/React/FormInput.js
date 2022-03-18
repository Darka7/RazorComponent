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
        var useNvInputFormModel = App.ImportNvComponents.useNvInputFormModel, NvValidateData = App.ImportNvComponents.NvValidateData, NvInput = App.ImportNvComponents.NvInput, useModelState = App.ImportNvComponents.useModelState, NvInputModel = App.ImportNvComponents.NvInputModel;
        var useState = React.useState, useEffect = React.useEffect, createRef = React.createRef;
        function FormInputComponent() {
            //const [FormInit,FormValid] = UseFormValidator("#FormInputModule");
            var Formulario = createRef();
            var _a = useModelState(null), Num = _a[0], SetNum = _a[1], BindNum = _a[2];
            var _b = useModelState({
                id: 1,
                edad: null,
                Nombre: null,
                TipoPersona: { descripcion: null }
            }), Model = _b[0], SetModel = _b[1], BindModel = _b[2], ResetModel = _b[3];
            function Guardar() {
                if (Formulario.current.Validate()) {
                    console.log(Model);
                    console.log({ numero: Num });
                }
                else {
                    App.MensajeriaApp.Mostrar("Por favor validar los campos!", 1);
                }
            }
            function HandlerBlurInput(evt, val) {
                console.log(val);
            }
            return (React.createElement(React.Fragment, null,
                React.createElement(NvValidateData, { id: "FormInputModule", ref: Formulario },
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "id ",
                            Model.id),
                        React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.id, name: "id", type: "number", className: "form-control", required: true, onChange: HandlerBlurInput }))),
                    React.createElement("br", null),
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "Nombre ",
                            Model.Nombre),
                        React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.Nombre, name: "Nombre", type: "text", className: "form-control", required: true }))),
                    React.createElement("br", null),
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "Tipo Persona ",
                            Model.TipoPersona.descripcion),
                        React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.TipoPersona.descripcion, name: "TipoPersona.descripcion", type: "text", className: "form-control", required: true }))),
                    React.createElement("div", { className: "nv-validar" },
                        React.createElement("label", { className: "form-label" },
                            "Numero ",
                            Num),
                        React.createElement(NvInput, __assign({}, BindNum, { name: "NumeroPrueba", type: "number", className: "form-control", onChange: HandlerBlurInput, required: true }))),
                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () { ResetModel(); Formulario.current.Reset(); } }, " cambiar numero"),
                    " ",
                    React.createElement("button", { type: "button", name: "submit", className: "btn btn-primary", onClick: function () { return Guardar(); } }, " Guardar"))));
        }
        ViewComponent.FormInputComponent = FormInputComponent;
        App.AppRender.Default = FormInputComponent;
    })(ViewComponent = App.ViewComponent || (App.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map