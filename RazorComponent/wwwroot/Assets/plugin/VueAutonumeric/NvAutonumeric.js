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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var App;
(function (App) {
    var Component = App.ImportVueDecorator.Component, VModel = App.ImportVueDecorator.VModel, Prop = App.ImportVueDecorator.Prop, Emit = App.ImportVueDecorator.Emit;
    var NvAutonumeric = /** @class */ (function (_super) {
        __extends(NvAutonumeric, _super);
        function NvAutonumeric() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.Timer = null;
            return _this;
        }
        NvAutonumeric.prototype.change = function () {
            var _this = this;
            clearTimeout(this.Timer);
            this.Timer = setTimeout(function () { return _this.$emit("change", _this.val); }, 600);
        };
        Object.defineProperty(NvAutonumeric.prototype, "Options", {
            get: function () {
                if (this.default != null)
                    return this.default;
                var options = {
                    digitGroupSeparator: ',',
                    decimalCharacter: '.',
                    currencySymbol: this.symbol,
                    decimalPlaces: this.decimal
                };
                if (!App.isNullOrEmpty(this.min))
                    options.minimumValue = this.min;
                if (!App.isNullOrEmpty(this.rounding))
                    options.roundingMethod = this.rounding;
                return options;
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            VModel({ default: null, type: Number }),
            __metadata("design:type", Number)
        ], NvAutonumeric.prototype, "val", void 0);
        __decorate([
            Prop({ type: String, default: '' }),
            __metadata("design:type", String)
        ], NvAutonumeric.prototype, "symbol", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvAutonumeric.prototype, "min", void 0);
        __decorate([
            Prop({ type: Number, default: 0 }),
            __metadata("design:type", Number)
        ], NvAutonumeric.prototype, "decimal", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvAutonumeric.prototype, "rounding", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvAutonumeric.prototype, "default", void 0);
        NvAutonumeric = __decorate([
            Component({
                inheritAttrs: true,
                template: "<vue-autonumeric v-model=\"val\" @input=\"change\"  :options=\"Options\" > </vue-autonumeric>"
            })
        ], NvAutonumeric);
        return NvAutonumeric;
    }(Vue));
    Vue.component("NvAutonumeric", NvAutonumeric);
})(App || (App = {}));
//# sourceMappingURL=NvAutonumeric.js.map