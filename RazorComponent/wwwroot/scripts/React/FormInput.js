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
        var useNvInputFormModel = App.ImportNvComponents.useNvInputFormModel, NvLayoutValidator = App.ImportNvComponents.NvLayoutValidator, NvInput = App.ImportNvComponents.NvInput, useModelState = App.ImportNvComponents.useModelState, NvInputModel = App.ImportNvComponents.NvInputModel;
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
            var List = [1, 2, 3, 4, 5, 5, 7];
            return (React.createElement(React.Fragment, null,
                React.createElement(NvLayoutValidator, { id: "FormInputModule", ref: Formulario },
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.id, type: "number", name: "id", Label: "id " + Model.id, required: true, onChange: HandlerBlurInput, classContainer: "col-6" })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.Nombre, name: "Nombre", type: "text", Label: "Nombre " + Model.Nombre, required: true, classContainer: "col-6" })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { value: Model.TipoPersona.descripcion, name: "TipoPersona.descripcion", type: "text", Label: "Tipo Persona " + Model.TipoPersona.descripcion, required: true, classContainer: "col-6" })),
                    React.createElement("br", null),
                    React.createElement(NvInputModel, __assign({}, BindModel, { checked: Model.estado, name: "estado", id: "estado", type: "checkbox", Label: "Estado " + Model.estado, classContainer: "col-6" })),
                    React.createElement("br", null),
                    React.createElement(NvInput.Numeric, __assign({ Label: "Numeric " + Num, symbol: "$ " }, BindNum, { id: "Num", name: "Num", minvalue: "0", classContainer: "col-8", decimal: 2, required: true })),
                    React.createElement("br", null),
                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: "hello()" }, " cambiar numero"),
                    " ",
                    React.createElement("button", { type: "button", name: "submit", className: "btn btn-primary", onClick: function () { return Guardar(); } }, " Guardar"))));
        }
        ViewComponent.FormInputComponent = FormInputComponent;
        App.AppRender.Default = function () { return React.createElement(FormInputComponent, null); };
    })(ViewComponent = App.ViewComponent || (App.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=FormInput.js.map