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
        var useNvInputFormModel = App.ImportNvComponents.useNvInputFormModel, NvLayoutValidator = App.ImportNvComponents.NvLayoutValidator, NvInput = App.ImportNvComponents.NvInput, useModelState = App.ImportNvComponents.useModelState, NvInputModel = App.ImportNvComponents.NvInputModel, NvAutoNumeric = App.ImportNvComponents.NvAutoNumeric;
        var useState = React.useState, useEffect = React.useEffect, createRef = React.createRef;
        function FormInputComponent() {
            //const [FormInit,FormValid] = UseFormValidator("#FormInputModule");
            var Formulario = createRef();
            var _a = useModelState(null), Num = _a[0], SetNum = _a[1], BindNum = _a[2];
            var _b = useModelState({
                id: 1,
                edad: null,
                Nombre: null,
                TipoPersona: { descripcion: null },
                estado: null
            }), Model = _b[0], SetModel = _b[1], BindModel = _b[2], ResetModel = _b[3];
            var _c = useNvInputFormModel({
                id: 1,
                edad: null,
                Nombre: null,
                TipoPersona: { descripcion: null },
                estado: true
            }), InputModel = _c[0], setInputModel = _c[1], BindInputModel = _c[2], ResetInputModel = _c[3];
            function Guardar() {
                console.log(InputModel);
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
            var List = [1, 2, 3, 4, 5, 5, 7];
            return (React.createElement(React.Fragment, null,
                React.createElement(NvLayoutValidator, { id: "FormInputModule", ref: Formulario },
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.id, type: "number", name: "id", Label: "id " + Model.id, required: true, onChange: HandlerBlurInput })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.Nombre, name: "Nombre", type: "text", Label: "Nombre " + Model.Nombre, required: true })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.TipoPersona.descripcion, name: "TipoPersona.descripcion", type: "text", Label: "Tipo Persona " + Model.TipoPersona.descripcion, required: true })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { checked: Model.estado, name: "estado", id: "estado", type: "checkbox", Label: "Estado " + Model.estado })),
                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () { SetNum(1000); } }, " cambiar numero"),
                    " ",
                    React.createElement("button", { type: "button", name: "submit", className: "btn btn-primary", onClick: function () { return Guardar(); } }, " Guardar")),
                React.createElement("div", null,
                    Num,
                    React.createElement("br", null),
                    React.createElement(NvAutoNumeric, { name: "estado", value: Num, onChange: function (e, val) { return SetNum(e.currentTarget.value); } })),
                React.createElement("div", { className: "" },
                    React.createElement("br", null),
                    React.createElement("label", { className: "form-label" },
                        "id ",
                        InputModel.id),
                    React.createElement("input", __assign({ type: "number", className: "form-control" }, BindInputModel("id")))),
                React.createElement("div", { className: "form-check" },
                    React.createElement("label", { className: "form-check-label", htmlFor: "frmestado" },
                        "Estado ",
                        JSON.stringify(InputModel.estado)),
                    React.createElement("input", __assign({ type: "checkbox", id: "frmestado", className: "form-check-input" }, BindInputModel("estado", "event", true))))));
        }
        ViewComponent.FormInputComponent = FormInputComponent;
        App.AppRender.Default = FormInputComponent;
    })(ViewComponent = App.ViewComponent || (App.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map