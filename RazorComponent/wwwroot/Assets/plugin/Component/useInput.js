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
            var Model = function (NameInput) {
                var PropNames = NameInput === null || NameInput === void 0 ? void 0 : NameInput.split(".");
                var len = PropNames === null || PropNames === void 0 ? void 0 : PropNames.length;
                return {
                    value: len == 1 ? Form[NameInput]
                        : len == 2 ? Form[PropNames[0]][PropNames[1]]
                            : Form[PropNames[0]][PropNames[1]][PropNames[2]],
                    onChange: function (event) {
                        var _a = event.currentTarget, type = _a.type, name = _a.name;
                        var currentvalue = null;
                        if (type == "checkbox") {
                            var checked = event.currentTarget.checked;
                            currentvalue = checked;
                        }
                        else {
                            var value = event.currentTarget.value;
                            currentvalue = value;
                        }
                        switch (len) {
                            case 1:
                                setForm(function (inputs) {
                                    var _a;
                                    return (__assign(__assign({}, inputs), (_a = {}, _a[name] = currentvalue, _a)));
                                });
                                break;
                            case 2:
                                var obj1 = PropNames[0];
                                var obj2 = PropNames[1];
                                setForm(function (inputs) {
                                    var _a, _b;
                                    return (__assign(__assign({}, inputs), (_a = {}, _a[obj1] = __assign(__assign({}, inputs[obj1]), (_b = {}, _b[obj2] = currentvalue, _b)), _a)));
                                });
                                break;
                            case 3:
                                var obj1 = PropNames[0];
                                var obj2 = PropNames[1];
                                var obj3 = PropNames[2];
                                setForm(function (inputs) {
                                    var _a, _b, _c;
                                    return (__assign(__assign({}, inputs), (_a = {}, _a[obj1] = __assign(__assign({}, inputs[obj1]), (_b = {}, _b[obj2] = __assign(__assign({}, inputs[obj2]), (_c = {}, _c[obj3] = currentvalue, _c)), _b)), _a)));
                                });
                                break;
                            default:
                                setForm(function (inputs) {
                                    var _a;
                                    return (__assign(__assign({}, inputs), (_a = {}, _a[name] = currentvalue, _a)));
                                });
                                break;
                        }
                    },
                    name: NameInput,
                };
            };
            return [Form, setForm, Model, ObjectNames, reset];
        }
        ImportNvComponents.useNvInputFormModel = useNvInputFormModel;
        function useNvInputForm(inititalvalue) {
            var _a = useState(inititalvalue), Form = _a[0], setForm = _a[1];
            var reset = function () { return setForm(inititalvalue); };
            var Bind = {
                onChange: function (event) {
                    var _a = event.currentTarget, type = _a.type, name = _a.name;
                    var PropNames = name === null || name === void 0 ? void 0 : name.split(".");
                    var len = PropNames === null || PropNames === void 0 ? void 0 : PropNames.length;
                    var currentvalue = null;
                    console.log(len, PropNames);
                    if (type == "checkbox") {
                        var checked = event.currentTarget.checked;
                        currentvalue = checked;
                    }
                    else {
                        var value = event.currentTarget.value;
                        currentvalue = value;
                    }
                    switch (len) {
                        case 1:
                            setForm(function (inputs) {
                                var _a;
                                return (__assign(__assign({}, inputs), (_a = {}, _a[name] = currentvalue, _a)));
                            });
                            break;
                        case 2:
                            var obj1 = PropNames[0];
                            var obj2 = PropNames[1];
                            setForm(function (inputs) {
                                var _a, _b;
                                return (__assign(__assign({}, inputs), (_a = {}, _a[obj1] = __assign(__assign({}, inputs[obj1]), (_b = {}, _b[obj2] = currentvalue, _b)), _a)));
                            });
                            break;
                        case 3:
                            var obj1 = PropNames[0];
                            var obj2 = PropNames[1];
                            var obj3 = PropNames[2];
                            setForm(function (inputs) {
                                var _a, _b, _c;
                                return (__assign(__assign({}, inputs), (_a = {}, _a[obj1] = __assign(__assign({}, inputs[obj1]), (_b = {}, _b[obj2] = __assign(__assign({}, inputs[obj2]), (_c = {}, _c[obj3] = currentvalue, _c)), _b)), _a)));
                            });
                            break;
                        default:
                            setForm(function (inputs) {
                                var _a;
                                return (__assign(__assign({}, inputs), (_a = {}, _a[name] = currentvalue, _a)));
                            });
                            break;
                    }
                }
            };
            return [Form, setForm, Bind, reset];
        }
        ImportNvComponents.useNvInputForm = useNvInputForm;
        function useNvInput(inititalvalue) {
            var _a = useState(inititalvalue), value = _a[0], setValue = _a[1];
            var reset = function () { return setValue(inititalvalue); };
            var Model = {
                value: value,
                onChange: function (event) {
                    var type = event.currentTarget.type;
                    if (type == "checkbox") {
                        var checked = event.currentTarget.checked;
                        setValue(checked);
                    }
                    else {
                        var value_1 = event.currentTarget.value;
                        setValue(value_1);
                    }
                }
            };
            return [value, setValue, Model, reset];
        }
        ImportNvComponents.useNvInput = useNvInput;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=useInput.js.map