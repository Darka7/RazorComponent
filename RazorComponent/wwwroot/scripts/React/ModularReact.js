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
    var ViewComponent;
    (function (ViewComponent) {
        var FormInputComponent = ViewComponent.FormInputComponent;
        var ModularReact = /** @class */ (function (_super) {
            __extends(ModularReact, _super);
            function ModularReact(props) {
                return _super.call(this, props) || this;
            }
            ModularReact.prototype.render = function () {
                var Title = this.props.Title;
                return (React.createElement(React.Fragment, null,
                    React.createElement("h1", { id: "" }, Title),
                    React.createElement(FormInputComponent, null)));
            };
            return ModularReact;
        }(React.Component));
        ViewComponent.ModularReact = ModularReact;
        App.AppRender.Default = function () { return React.createElement(ModularReact, { Title: "Catalogo Persona" }); };
    })(ViewComponent = App.ViewComponent || (App.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=ModularReact.js.map