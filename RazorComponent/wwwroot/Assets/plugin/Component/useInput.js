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
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=useInput.js.map