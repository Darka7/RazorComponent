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
    var Component = VuePropertyDecorator.Component, VModel = VuePropertyDecorator.VModel, Emit = VuePropertyDecorator.Emit, Ref = VuePropertyDecorator.Ref, Watch = VuePropertyDecorator.Watch, Prop = VuePropertyDecorator.Prop;
    var NvBsDatepicker = /** @class */ (function (_super) {
        __extends(NvBsDatepicker, _super);
        function NvBsDatepicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ElementHTML = null;
            return _this;
        }
        NvBsDatepicker.prototype.OnChangeVmodel = function (val, oldval) {
            var _a, _b, _c;
            var old = ((_a = this.ElementHTML) === null || _a === void 0 ? void 0 : _a.datepicker("getDate")) == null ? null :
                dateFormat((_b = this.ElementHTML) === null || _b === void 0 ? void 0 : _b.datepicker("getDate"), 'dd/MM/yyyy');
            var newval = val == null ? null : dateFormat(val, "dd/MM/yyyy");
            if (newval != old) {
                (_c = this.ElementHTML) === null || _c === void 0 ? void 0 : _c.datepicker("update", val);
            }
        };
        NvBsDatepicker.prototype.OnChange = function () {
            var newdate = this.ElementHTML.datepicker("getDate");
            this.InpuVal = newdate;
            return this.InpuVal;
        };
        NvBsDatepicker.prototype.mounted = function () {
            var $this = this;
            this.ElementHTML = $(this.InputDate).datepicker({
                format: this.format,
            });
            //changeDate
            this.ElementHTML.datepicker("update", this.InpuVal);
            this.InputDate.onchange = function (e) {
                $this.InpuVal = $this.ElementHTML.datepicker("getDate");
                //trigger -null
                setTimeout($this.OnChange, 200);
            };
        };
        __decorate([
            VModel({ type: Date, default: new Date() }),
            __metadata("design:type", Date)
        ], NvBsDatepicker.prototype, "InpuVal", void 0);
        __decorate([
            Ref(),
            __metadata("design:type", HTMLInputElement)
        ], NvBsDatepicker.prototype, "InputDate", void 0);
        __decorate([
            Prop({ type: String, default: "mm/dd/yyyy" }),
            __metadata("design:type", String)
        ], NvBsDatepicker.prototype, "format", void 0);
        __decorate([
            Watch('InpuVal', { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], NvBsDatepicker.prototype, "OnChangeVmodel", null);
        __decorate([
            Emit('change'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], NvBsDatepicker.prototype, "OnChange", null);
        NvBsDatepicker = __decorate([
            Component({
                template: " <input ref=\"InputDate\"  type=\"text\" class=\"form-control\"   v-bind=\"$attrs\" />  ",
                inheritAttrs: false
            })
        ], NvBsDatepicker);
        return NvBsDatepicker;
    }(Vue));
    Vue.component("NvBsDatepicker", NvBsDatepicker);
})(App || (App = {}));
//# sourceMappingURL=NvBsDatepicker.js.map