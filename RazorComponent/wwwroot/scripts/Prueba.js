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
    var BootstrapDatepicker = /** @class */ (function (_super) {
        __extends(BootstrapDatepicker, _super);
        function BootstrapDatepicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ElementHTML = null;
            return _this;
        }
        BootstrapDatepicker.prototype.OnChangeVmodel = function (val, oldval) {
            var _a, _b, _c;
            var old = ((_a = this.ElementHTML) === null || _a === void 0 ? void 0 : _a.datepicker("getDate")) == null ? null :
                dateFormat((_b = this.ElementHTML) === null || _b === void 0 ? void 0 : _b.datepicker("getDate"), 'dd/MM/yyyy');
            var newval = val == null ? null : dateFormat(val, "dd/MM/yyyy");
            if (newval != old) {
                (_c = this.ElementHTML) === null || _c === void 0 ? void 0 : _c.datepicker("update", val);
            }
        };
        BootstrapDatepicker.prototype.OnChange = function () {
            var newdate = this.ElementHTML.datepicker("getDate");
            this.InpuVal = newdate;
            return this.InpuVal;
        };
        BootstrapDatepicker.prototype.mounted = function () {
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
        ], BootstrapDatepicker.prototype, "InpuVal", void 0);
        __decorate([
            Ref(),
            __metadata("design:type", HTMLInputElement)
        ], BootstrapDatepicker.prototype, "InputDate", void 0);
        __decorate([
            Prop({ type: String, default: "mm/dd/yyyy" }),
            __metadata("design:type", String)
        ], BootstrapDatepicker.prototype, "format", void 0);
        __decorate([
            Watch('InpuVal', { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Number]),
            __metadata("design:returntype", void 0)
        ], BootstrapDatepicker.prototype, "OnChangeVmodel", null);
        __decorate([
            Emit('change'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], BootstrapDatepicker.prototype, "OnChange", null);
        BootstrapDatepicker = __decorate([
            Component({
                template: " <input ref=\"InputDate\"  type=\"text\"    v-bind=\"$attrs\" />  ",
                name: 'Bootstrap-Datepicker',
                inheritAttrs: false
            })
        ], BootstrapDatepicker);
        return BootstrapDatepicker;
    }(Vue));
    var PruebaTest = /** @class */ (function (_super) {
        __extends(PruebaTest, _super);
        function PruebaTest() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.val = null;
            return _this;
        }
        PruebaTest.prototype.handlerchange = function (e) {
            console.log(e);
        };
        PruebaTest.prototype.ChangeValue = function () {
            this.val = new Date();
        };
        PruebaTest = __decorate([
            Component({
                components: {
                    BootstrapDatepicker: BootstrapDatepicker
                }
            })
        ], PruebaTest);
        return PruebaTest;
    }(Vue));
    new PruebaTest().$mount("#Appvue");
    App.PruebaMethodo = function (ids, data, dt, node) {
        console.log(ids);
        console.log(data, 'data');
    };
    $(document).ready(function () {
        var columnas = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Text" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "Text" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
            { Column: "EmpresaMark", Label: "Empresa", Type: "SwitchData", SwitchDataValue: "IdEmpresa" },
        ];
        var btns = [
            {
                text: "Prueba", action: "App.PruebaMethodo"
            }
        ];
        //  var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns );
        //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);
    });
})(App || (App = {}));
//# sourceMappingURL=Prueba.js.map