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
        var forwardRef = React.forwardRef, useEffect = React.useEffect, useImperativeHandle = React.useImperativeHandle, useState = React.useState;
        var UseFormValidator = ImportNvComponents.UseFormValidator;
        ImportNvComponents.NvForm = forwardRef(function (_a, ref) {
            var children = _a.children, atributes = __rest(_a, ["children"]);
            var _b = UseFormValidator("#" + atributes.id), Init = _b[0], Validate = _b[1], Reset = _b[2];
            useEffect(function () {
                Init();
            }, []);
            useImperativeHandle(ref, function () { return ({
                Validate: Validate,
                Reset: Reset,
                Init: Init
            }); });
            return (React.createElement("form", __assign({}, atributes), children));
        });
        ImportNvComponents.NvValidateData = forwardRef(function (_a, ref) {
            var children = _a.children, atributes = __rest(_a, ["children"]);
            var _b = UseFormValidator("#" + atributes.id), Init = _b[0], Validate = _b[1], Reset = _b[2];
            useEffect(function () {
                Init();
            }, []);
            useImperativeHandle(ref, function () { return ({
                Validate: Validate,
                Reset: Reset,
                Init: Init
            }); });
            return (React.createElement("div", __assign({}, atributes), children));
        });
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=NvForm.js.map