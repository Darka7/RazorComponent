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
            Object.getOwnPropertyNames(Form).forEach(function (r) { return ObjectNames[r] = r; });
            var reset = function () { return setForm(inititalvalue); };
            var Bind = function (NameFor, options) {
                if (options === void 0) { options = "event"; }
                return {
                    name: NameFor,
                    value: eval("Form.".concat(NameFor, " || \"\"")),
                    onChange: function (event, value) {
                        if (value === void 0) { value = null; }
                        var _a = event.currentTarget, type = _a.type, name = _a.name;
                        var currentvalue = null;
                        if (options == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                currentvalue = checked;
                            }
                            else {
                                var value_1 = event.currentTarget.value;
                                currentvalue = value_1;
                            }
                        }
                        else {
                            currentvalue = value;
                        }
                        eval("Form.".concat(name, " = currentvalue;"));
                        setForm(function (prev) { return (__assign({}, Form)); });
                    }
                };
            };
            return [Form, setForm, Bind, ObjectNames, reset];
        }
        ImportNvComponents.useNvInputFormModel = useNvInputFormModel;
        function useNvInputForm(inititalvalue) {
            var _a = useState(inititalvalue), Form = _a[0], setForm = _a[1];
            var ObjectNames = {};
            Object.getOwnPropertyNames(Form).forEach(function (r) { return ObjectNames[r] = r; });
            var reset = function () { return setForm(inititalvalue); };
            var Bind = function (options) {
                if (options === void 0) { options = "event"; }
                return {
                    onChange: function (event, value) {
                        if (value === void 0) { value = null; }
                        var _a = event.currentTarget, type = _a.type, name = _a.name;
                        var currentvalue = null;
                        if (options == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                currentvalue = checked;
                            }
                            else {
                                var value_2 = event.currentTarget.value;
                                currentvalue = value_2;
                            }
                        }
                        else {
                            currentvalue = value;
                        }
                        eval("Form.".concat(name, " = currentvalue;"));
                        setForm(function (prev) { return (__assign({}, Form)); });
                    }
                };
            };
            return [Form, setForm, Bind, ObjectNames, reset];
        }
        ImportNvComponents.useNvInputForm = useNvInputForm;
        function useNvInput(inititalvalue) {
            var _a = useState(inititalvalue), valueInput = _a[0], setValue = _a[1];
            var reset = function () { return setValue(inititalvalue); };
            var Model = function (option) {
                if (option === void 0) { option = "event"; }
                return {
                    value: valueInput || "",
                    onChange: function (event, val) {
                        if (val === void 0) { val = null; }
                        var type = event.currentTarget.type;
                        if (option == "event") {
                            if (type == "checkbox") {
                                var checked = event.currentTarget.checked;
                                setValue(checked);
                            }
                            else {
                                var value = event.currentTarget.value;
                                setValue(value);
                            }
                        }
                        else {
                            setValue(val);
                        }
                    }
                };
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
            var Model = _a.Model, _b = _a.onChange, onChange = _b === void 0 ? null : _b, _c = _a.onBlur, onBlur = _c === void 0 ? null : _c, _d = _a.value, value = _d === void 0 ? null : _d, props = __rest(_a, ["Model", "onChange", "onBlur", "value"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            function HandlerEventChange(evt) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    var checked = evt.currentTarget.checked;
                    currentValue = checked;
                }
                else {
                    var setval = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = App.isNullOrEmpty(setval) ? null : parseFloat(setval);
                    }
                    else {
                        currentValue = setval;
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
                        var setval = evt.currentTarget.value;
                        if (props.type == "number") {
                            currentValue = App.isNullOrEmpty(setval) ? null : parseFloat(setval);
                        }
                        else {
                            currentValue = setval;
                        }
                    }
                    onBlur(evt, currentValue);
                }
            }
            if (props.type == "checkbox") {
                return (React.createElement("input", __assign({}, props, { checked: InputVal || false, onChange: HandlerEventChange, onBlur: HandlerEventBlur })));
            }
            else {
                return (React.createElement("input", __assign({}, props, { value: InputVal || "", onChange: HandlerEventChange, onBlur: HandlerEventBlur })));
            }
        }
        ImportNvComponents.NvInput = NvInput;
        function NvInputModel(_a) {
            var Model = _a.Model, _b = _a.onChange, onChange = _b === void 0 ? null : _b, _c = _a.onBlur, onBlur = _c === void 0 ? null : _c, _d = _a.value, value = _d === void 0 ? null : _d, props = __rest(_a, ["Model", "onChange", "onBlur", "value"]);
            var InputVal = Model[0], SetInputVal = Model[1];
            function HandlerEventChange(evt) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    var checked = evt.currentTarget.checked;
                    currentValue = checked;
                }
                else {
                    var setval = evt.currentTarget.value;
                    if (props.type == "number") {
                        var getvalue = App.isNullOrEmpty(setval) ? null : parseFloat(setval);
                        currentValue = getvalue;
                    }
                    else {
                        currentValue = setval;
                    }
                }
                SetInputVal(function (prev) {
                    eval("prev.".concat(props.name, " = currentValue;"));
                    return (__assign({}, prev));
                });
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
                        var setval = evt.currentTarget.value;
                        if (props.type == "number") {
                            currentValue = App.isNullOrEmpty(setval) ? null : parseFloat(setval);
                        }
                        else {
                            currentValue = setval;
                        }
                    }
                    onBlur(evt, currentValue);
                }
            }
            if (props.type == "checkbox") {
                return (React.createElement("input", __assign({}, props, { checked: value || false, onChange: HandlerEventChange, onBlur: HandlerEventBlur })));
            }
            else {
                return (React.createElement("input", __assign({}, props, { value: value || "", onChange: HandlerEventChange, onBlur: HandlerEventBlur })));
            }
        }
        ImportNvComponents.NvInputModel = NvInputModel;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=useInput.js.map