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
        var useState = React.useState;
        function useNvInputFormModel(inititalvalue) {
            var _a = useState(inititalvalue), Form = _a[0], setForm = _a[1];
            var ObjectNames = {};
            if (!Array.isArray(Form))
                Object.getOwnPropertyNames(Form).forEach(function (r) { return ObjectNames[r] = r; });
            var reset = function () { return setForm(inititalvalue); };
            var Bind = function (NameFor, options, IsCheck) {
                if (options === void 0) { options = "event"; }
                if (IsCheck === void 0) { IsCheck = false; }
                var Dynamicprop = "prev.";
                Dynamicprop = NameFor.startsWith("[") ? "prev" : Dynamicprop;
                var DynamicpropForm = "Form.";
                DynamicpropForm = NameFor.startsWith("[") ? "Form" : DynamicpropForm;
                var Values = IsCheck ? { checked: eval("".concat(DynamicpropForm).concat(NameFor, " || false")) } : { value: eval("".concat(DynamicpropForm).concat(NameFor, " || \"\"")) };
                return __assign(__assign({ name: NameFor }, Values), { onChange: function (event, value) {
                        if (value === void 0) { value = null; }
                        var _a = event.currentTarget, type = _a.type, name = _a.name;
                        var currentvalue = null;
                        if (options == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                currentvalue = checked;
                            }
                            else {
                                currentvalue = event.currentTarget.value;
                                if (type == "number") {
                                    currentvalue = App.isNullOrEmpty(currentvalue) ? null : parseFloat(currentvalue);
                                }
                            }
                        }
                        else {
                            currentvalue = value;
                        }
                        setForm(function (prev) {
                            eval("".concat(Dynamicprop).concat(name, " = currentvalue;"));
                            return (__assign({}, prev));
                        });
                    } });
            };
            return [Form, setForm, Bind, ObjectNames, reset];
        }
        ImportNvComponents.useNvInputFormModel = useNvInputFormModel;
        function useNvInputForm(inititalvalue) {
            var _a = useState(inititalvalue), Form = _a[0], setForm = _a[1];
            var ObjectNames = {};
            if (!Array.isArray(Form))
                Object.getOwnPropertyNames(Form).forEach(function (r) { return ObjectNames[r] = r; });
            var reset = function () { return setForm(inititalvalue); };
            var Bind = function (options) {
                if (options === void 0) { options = "event"; }
                return {
                    onChange: function (event, value) {
                        if (value === void 0) { value = null; }
                        var _a = event.currentTarget, type = _a.type, name = _a.name;
                        var Dynamicprop = "prev.";
                        Dynamicprop = name.startsWith("[") ? "prev" : Dynamicprop;
                        var currentvalue = null;
                        if (options == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                currentvalue = checked;
                            }
                            else {
                                currentvalue = event.currentTarget.value;
                                if (type == "number") {
                                    currentvalue = App.isNullOrEmpty(currentvalue) ? null : parseFloat(currentvalue);
                                }
                            }
                        }
                        else {
                            currentvalue = value;
                        }
                        setForm(function (prev) {
                            eval("".concat(Dynamicprop).concat(name, " = currentvalue;"));
                            return (__assign({}, prev));
                        });
                    }
                };
            };
            return [Form, setForm, Bind, ObjectNames, reset];
        }
        ImportNvComponents.useNvInputForm = useNvInputForm;
        function useNvInput(inititalvalue) {
            var _a = useState(inititalvalue), valueInput = _a[0], setValue = _a[1];
            var reset = function () { return setValue(inititalvalue); };
            var Model = function (IsCheck, option) {
                if (IsCheck === void 0) { IsCheck = false; }
                if (option === void 0) { option = "event"; }
                var Values = IsCheck ? { checked: valueInput || false } : { value: valueInput || "" };
                return __assign(__assign({}, Values), { onChange: function (event, val) {
                        if (val === void 0) { val = null; }
                        var type = event.currentTarget.type;
                        if (option == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                setValue(checked);
                            }
                            else {
                                var getvalue = event.currentTarget.value;
                                if (type == "number") {
                                    getvalue = App.isNullOrEmpty(getvalue) ? null : parseFloat(getvalue);
                                }
                                setValue(getvalue);
                            }
                        }
                        else {
                            setValue(val);
                        }
                    } });
            };
            return [valueInput, setValue, Model, reset];
        }
        ImportNvComponents.useNvInput = useNvInput;
        function useModelState(inititalvalue) {
            var Model = useState(inititalvalue);
            var valueInput = Model[0], setValue = Model[1];
            var reset = function () { return setValue(inititalvalue); };
            return [valueInput, setValue, { Model: Model }, reset];
        }
        ImportNvComponents.useModelState = useModelState;
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
            var Model = _a.Model, _b = _a.Label, Label = _b === void 0 ? "" : _b, _c = _a.classContainer, classContainer = _c === void 0 ? "" : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.key, key = _e === void 0 ? null : _e, _f = _a.onChange, onChange = _f === void 0 ? null : _f, _g = _a.onBlur, onBlur = _g === void 0 ? null : _g, _h = _a.value, value = _h === void 0 ? null : _h, _j = _a.checked, checked = _j === void 0 ? null : _j, props = __rest(_a, ["Model", "Label", "classContainer", "className", "key", "onChange", "onBlur", "value", "checked"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            var Dynamicprop = "prev.";
            if (key != null)
                Dynamicprop = "prev[".concat(key, "].");
            Dynamicprop = props.name.startsWith("[") ? "prev" : Dynamicprop;
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
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=useInput.js.map