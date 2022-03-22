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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var App;
(function (App) {
    var ImportNvComponents;
    (function (ImportNvComponents) {
        function NvInput(_a) {
            var Model = _a.Model, _b = _a.Label, Label = _b === void 0 ? "" : _b, _c = _a.classContainer, classContainer = _c === void 0 ? "" : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.onBlur, onBlur = _f === void 0 ? null : _f, _g = _a.value, value = _g === void 0 ? null : _g, props = __rest(_a, ["Model", "Label", "classContainer", "className", "onChange", "onBlur", "value"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            function HandlerEventChange(evt) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    var checked = evt.currentTarget.checked;
                    currentValue = checked;
                }
                else {
                    currentValue = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = App.isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                    }
                }
                SetInputVal(currentValue);
                if (onChange != null)
                    onChange(evt, currentValue);
            }
            function HandlerEventBlur(evt) {
                if (onBlur != null) {
                    var currentValue = null;
                    if (props.type == "checkbox") {
                        var checked = evt.currentTarget.checked;
                        currentValue = checked;
                    }
                    else {
                        currentValue = evt.currentTarget.value;
                        if (props.type == "number") {
                            currentValue = App.isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                        }
                    }
                    onBlur(evt, currentValue);
                }
            }
            var _h = props.id, id = _h === void 0 ? "" : _h;
            if (props.type == "checkbox") {
                var css = className != null ? className : "form-check-input";
                return (React.createElement("div", { className: "nv-validar form-check" + classContainer },
                    React.createElement("label", { className: "form-check-label", htmlFor: id }, Label),
                    React.createElement("input", __assign({}, props, { checked: InputVal || false, onChange: HandlerEventChange, onBlur: HandlerEventBlur, className: css })),
                    " "));
            }
            else {
                var css = className != null ? className : "form-control";
                return (React.createElement("div", { className: "nv-validar " + classContainer },
                    React.createElement("label", { className: "form-label", htmlFor: id }, Label),
                    React.createElement("input", __assign({}, props, { value: InputVal || "", onChange: HandlerEventChange, onBlur: HandlerEventBlur, className: css }))));
            }
        }
        ImportNvComponents.NvInput = NvInput;
        function NvInputModel(_a) {
            var Model = _a.Model, _b = _a.Label, Label = _b === void 0 ? "" : _b, _c = _a.classContainer, classContainer = _c === void 0 ? "" : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.keyprop, keyprop = _e === void 0 ? null : _e, _f = _a.onChange, onChange = _f === void 0 ? null : _f, _g = _a.onBlur, onBlur = _g === void 0 ? null : _g, _h = _a.value, value = _h === void 0 ? null : _h, _j = _a.checked, checked = _j === void 0 ? null : _j, props = __rest(_a, ["Model", "Label", "classContainer", "className", "keyprop", "onChange", "onBlur", "value", "checked"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            var Dynamicprop = "prev.";
            if (keyprop != null)
                Dynamicprop = "prev[".concat(keyprop, "].");
            Dynamicprop = (props === null || props === void 0 ? void 0 : props.name.startsWith("[")) ? "prev" : Dynamicprop;
            function HandlerEventChange(evt) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    var checked_1 = evt.currentTarget.checked;
                    currentValue = checked_1;
                }
                else {
                    currentValue = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = App.isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                    }
                }
                SetInputVal(function (prev) {
                    eval("".concat(Dynamicprop).concat(props.name, " = currentValue;"));
                    return (__assign({}, prev));
                });
                if (onChange != null)
                    onChange(evt, currentValue);
            }
            function HandlerEventBlur(evt) {
                if (onBlur != null) {
                    var currentValue = null;
                    if (props.type == "checkbox") {
                        var checked_2 = evt.currentTarget.checked;
                        currentValue = checked_2;
                    }
                    else {
                        currentValue = evt.currentTarget.value;
                        if (props.type == "number") {
                            currentValue = App.isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                        }
                    }
                    onBlur(evt, currentValue);
                }
            }
            var _k = props.id, id = _k === void 0 ? "" : _k;
            if (props.type == "checkbox") {
                var css = className != null ? className : "form-check-input";
                return (React.createElement("div", { className: "nv-validar form-check" + classContainer },
                    React.createElement("label", { className: "form-check-label", htmlFor: id }, Label),
                    React.createElement("input", __assign({}, props, { checked: checked || false, onChange: HandlerEventChange, onBlur: HandlerEventBlur, className: css })),
                    " "));
            }
            else {
                var css = className != null ? className : "form-control";
                return (React.createElement("div", { className: "nv-validar " + classContainer },
                    React.createElement("label", { className: "form-label", htmlFor: id }, Label),
                    React.createElement("input", __assign({}, props, { value: value || "", onChange: HandlerEventChange, onBlur: HandlerEventBlur, className: css }))));
            }
        }
        ImportNvComponents.NvInputModel = NvInputModel;
        var NvAutoNumeric = ImportNvComponents.NvAutoNumeric;
        function NvAutoNumericLayout(_a) {
            var Model = _a.Model, _b = _a.Label, Label = _b === void 0 ? "" : _b, _c = _a.classContainer, classContainer = _c === void 0 ? "" : _c, _d = _a.onChange, onChange = _d === void 0 ? null : _d, _e = _a.onBlur, onBlur = _e === void 0 ? null : _e, _f = _a.value, value = _f === void 0 ? null : _f, props = __rest(_a, ["Model", "Label", "classContainer", "onChange", "onBlur", "value"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            function HandlerEventChange(evt, currentValue) {
                SetInputVal(currentValue);
                if (onChange != null)
                    onChange(evt, currentValue);
            }
            function HandlerEventBlur(evt, currentValue) {
                if (onBlur != null) {
                    onBlur(evt, currentValue);
                }
            }
            var _g = props.id, id = _g === void 0 ? "" : _g;
            return (React.createElement("div", { className: "nv-validar " + classContainer },
                React.createElement("label", { className: "form-label", htmlFor: id }, Label),
                React.createElement(NvAutoNumeric, __assign({}, props, { onChange: HandlerEventChange, onBlur: HandlerEventBlur, value: InputVal }))));
        }
        ;
        NvInput.Numeric = NvAutoNumericLayout;
        function NvAutoNumericLayoutModel(_a) {
            var Model = _a.Model, _b = _a.Label, Label = _b === void 0 ? "" : _b, _c = _a.classContainer, classContainer = _c === void 0 ? "" : _c, _d = _a.keyprop, keyprop = _d === void 0 ? null : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.onBlur, onBlur = _f === void 0 ? null : _f, _g = _a.value, value = _g === void 0 ? null : _g, props = __rest(_a, ["Model", "Label", "classContainer", "keyprop", "onChange", "onBlur", "value"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            var Dynamicprop = "prev.";
            if (keyprop != null)
                Dynamicprop = "prev[".concat(keyprop, "].");
            Dynamicprop = (props === null || props === void 0 ? void 0 : props.name.startsWith("[")) ? "prev" : Dynamicprop;
            function HandlerEventChange(evt, currentValue) {
                SetInputVal(function (prev) {
                    eval("".concat(Dynamicprop).concat(props.name, " = currentValue;"));
                    return (__assign({}, prev));
                });
                if (onChange != null)
                    onChange(evt, currentValue);
            }
            function HandlerEventBlur(evt, currentValue) {
                if (onBlur != null) {
                    onBlur(evt, currentValue);
                }
            }
            var _h = props.id, id = _h === void 0 ? "" : _h;
            return (React.createElement("div", { className: "nv-validar " + classContainer },
                React.createElement("label", { className: "form-label", htmlFor: id }, Label),
                React.createElement(NvAutoNumeric, __assign({}, props, { onChange: HandlerEventChange, onBlur: HandlerEventBlur, value: value }))));
        }
        NvInputModel.Numeric = NvAutoNumericLayoutModel;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=InputLayout.js.map