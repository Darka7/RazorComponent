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
    var Component = VuePropertyDecorator.Component, Prop = VuePropertyDecorator.Prop, VModel = VuePropertyDecorator.VModel;
    var NvModalR = /** @class */ (function (_super) {
        __extends(NvModalR, _super);
        function NvModalR() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NvModalR.prototype, "indexStyle", {
            get: function () {
                return this.index != null ? { "z-index": this.index } : {};
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            Prop({ default: null, type: String }),
            __metadata("design:type", String)
        ], NvModalR.prototype, "title", void 0);
        __decorate([
            Prop({ default: null, type: String }),
            __metadata("design:type", String)
        ], NvModalR.prototype, "id", void 0);
        __decorate([
            VModel({ type: Boolean, default: false }),
            __metadata("design:type", Boolean)
        ], NvModalR.prototype, "show", void 0);
        __decorate([
            Prop({ default: null, type: String }),
            __metadata("design:type", String)
        ], NvModalR.prototype, "size", void 0);
        __decorate([
            Prop({ default: null, type: String }),
            __metadata("design:type", String)
        ], NvModalR.prototype, "index", void 0);
        NvModalR = __decorate([
            Component({
                inheritAttrs: false,
                template: "\n<div class=\"nvmodalr-backdrop\" v-show=\"show\" :style=\"indexStyle\">\n<div :class=\"{'nvmodalr':true,'show':show,'nvmodalr-md':size=='md', 'nvmodalr-lg':size=='lg', 'nvmodalr-xl':size=='xl','nvmodalr-xxl':size=='xxl'}\"  :style=\"indexStyle\"\ntabindex=\"-1\" :id=\"id\" >\n  <div class=\"offcanvas-header nvmodalr-header\">\n    <h4 id=\"offcanvasTopLabel\"> <slot name=\"h\"> {{title}} </slot> </h4>\n    <button type=\"button\" class=\"btn-close\"  aria-label=\"Close\" @click=\"show=false\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n   <slot></slot>\n  </div>\n</div>\n</div>\n"
            })
        ], NvModalR);
        return NvModalR;
    }(Vue));
    Vue.component("NvModalR", NvModalR);
})(App || (App = {}));
//# sourceMappingURL=NvModalR.js.map