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
var App;
(function (App) {
    var ImportNvComponents;
    (function (ImportNvComponents) {
        var createRef = React.createRef;
        var NvAutoNumeric = /** @class */ (function (_super) {
            __extends(NvAutoNumeric, _super);
            function NvAutoNumeric(pr) {
                var _this = _super.call(this, pr) || this;
                _this.HandlerCall = _this.HandlerCall.bind(_this);
                return _this;
            }
            NvAutoNumeric.prototype.componentWillUnmount = function () {
                if (this.input)
                    this.input.remove();
            };
            NvAutoNumeric.prototype.componentDidMount = function () {
                this.input = new AutoNumeric(this.$el, this.props.value);
            };
            NvAutoNumeric.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
                if (this.input != null) {
                    if (nextProps.value != this.input.getNumber()) {
                        this.input.set(nextProps.value);
                    }
                }
            };
            NvAutoNumeric.prototype.HandlerCall = function (event, EventName) {
                if (this.input != null && this.props[EventName] != null) {
                    var val = this.input.getNumber();
                    var NewEvent = Object.assign(event, {
                        target: { value: val },
                        currentTarget: { value: val }
                    });
                    this.props[EventName](this.props.GetVal == "input" ? NewEvent : val);
                }
            };
            NvAutoNumeric.prototype.render = function () {
                var _this = this;
                var _a = this.props, id = _a.id, className = _a.className;
                return (React.createElement("input", { type: "text", id: id, name: id, className: className, ref: function (ref) { return (_this.$el = ref); }, onChange: function (e) { return _this.HandlerCall(e, "onChange"); }, onBlur: function (e) { return _this.HandlerCall(e, "onBlur"); } }));
            };
            NvAutoNumeric.defaultProps = {
                className: "form-control",
                GetVal: "input"
            };
            return NvAutoNumeric;
        }(React.Component));
        ImportNvComponents.NvAutoNumeric = NvAutoNumeric;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=NvAutoNumeric.js.map