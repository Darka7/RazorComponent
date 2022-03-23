"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var NvAutoNumeric = /** @class */ (function (_super) {
            __extends(NvAutoNumeric, _super);
            function NvAutoNumeric(pr) {
                var _this = _super.call(this, pr) || this;
                _this.HandlerCall = _this.HandlerCall.bind(_this);
                _this.Options = _this.Options.bind(_this);
                return _this;
            }
            NvAutoNumeric.prototype.Options = function (PropsOptions) {
                if (PropsOptions.default != null)
                    return PropsOptions.default;
                var options = {
                    digitGroupSeparator: ',',
                    decimalCharacter: '.',
                    currencySymbol: PropsOptions.symbol,
                    decimalPlaces: PropsOptions.decimal
                };
                if (!App.isNullOrEmpty(PropsOptions.minvalue))
                    options.minimumValue = PropsOptions.minvalue;
                if (!App.isNullOrEmpty(PropsOptions.rounding))
                    options.roundingMethod = PropsOptions.rounding;
                return options;
            };
            NvAutoNumeric.prototype.componentWillUnmount = function () {
                if (this.input)
                    this.input.remove();
            };
            NvAutoNumeric.prototype.componentDidMount = function () {
                this.input = new AutoNumeric(this.$el, this.props.value, this.Options(this.props));
            };
            NvAutoNumeric.prototype.UNSAFE_componentWillReceiveProps = function (nextProps, nextContext) {
                if (this.input != null) {
                    if (nextProps.value != this.input.getNumber()) {
                        this.input.set(nextProps.value);
                    }
                    var isOptionsChanged = JSON.stringify(__assign(__assign({}, this.props), { value: undefined })) !==
                        JSON.stringify(__assign(__assign({}, nextProps), { value: undefined }));
                    if (isOptionsChanged) {
                        var NewOptions = this.Options(nextProps);
                        this.input.update(NewOptions);
                    }
                }
            };
            NvAutoNumeric.prototype.HandlerCall = function (evt, EventName) {
                if (this.input != null) {
                    var val = this.input.getNumber();
                    var name = evt.currentTarget.name;
                    var NewEvent = {
                        target: {
                            name: name,
                            value: val,
                            type: "number",
                            id: evt.currentTarget.id
                        },
                        currentTarget: {
                            name: name,
                            value: val,
                            type: "number",
                            id: evt.currentTarget.id
                        }
                    };
                    if (this.props[EventName] != null)
                        this.props[EventName](NewEvent, val);
                }
            };
            NvAutoNumeric.prototype.render = function () {
                var _this = this;
                var _a = this.props, type = _a.type, value = _a.value, _b = _a.onChange, onChange = _b === void 0 ? null : _b, _c = _a.onBlur, onBlur = _c === void 0 ? null : _c, setprops = __rest(_a, ["type", "value", "onChange", "onBlur"]);
                return (React.createElement("input", __assign({}, setprops, { type: "text", ref: function (ref) { return (_this.$el = ref); }, onChange: function (e) { return _this.HandlerCall(e, "onChange"); }, onBlur: function (e) { return _this.HandlerCall(e, "onBlur"); } })));
            };
            NvAutoNumeric.defaultProps = {
                id: null,
                name: null,
                value: null,
                className: "form-control",
                symbol: "",
                min: null,
                decimal: 0,
                rounding: null,
                default: null
            };
            return NvAutoNumeric;
        }(React.Component));
        ImportNvComponents.NvAutoNumeric = NvAutoNumeric;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=NvAutoNumeric.js.map