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
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=useInput.js.map