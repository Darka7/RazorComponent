"use strict";
var App;
(function (App_1) {
    var ViewComponent;
    (function (ViewComponent) {
        var NvModal = App_1.ImportNvComponents.NvModal, NvModalR = App_1.ImportNvComponents.NvModalR;
        var useState = React.useState;
        function App() {
            var _a = useState(false), Modal = _a[0], SetModal = _a[1];
            var _b = useState(false), ModalR = _b[0], SetModalR = _b[1];
            var title = (React.createElement(React.Fragment, null,
                React.createElement("strong", null, "Hola titulo strong")));
            var footer = (React.createElement("button", { type: "button", onClick: function () { return SetModal(false); } }, " Custom footer button"));
            return (React.createElement(React.Fragment, null,
                React.createElement("button", { type: "button", onClick: function () { return SetModal(true); } }, " Abrir modal"),
                React.createElement("button", { type: "button", onClick: function () { return SetModalR(true); } }, " Abrir modal"),
                React.createElement(NvModal, { id: "ModalPrueba", title: title, show: Modal, OnClose: function () { return SetModal(false); }, size: "lg" },
                    React.createElement("h1", null, " Hola mundo modal normal"),
                    React.createElement("br", null),
                    React.createElement("button", { type: "button", onClick: function () { return SetModalR(true); } }, " Abrir modal")),
                React.createElement(NvModalR, { id: "ModalPruebaR", title: title, show: ModalR, OnClose: function () { return SetModalR(false); } },
                    React.createElement("h1", null, " Hola mundo modal R"),
                    React.createElement("br", null),
                    React.createElement("button", { type: "button", onClick: function () { return SetModal(true); } }, " Abrir modal"))));
        }
        ReactDOM.render(React.createElement(App, null), document.getElementById("AppReact"));
    })(ViewComponent = App_1.ViewComponent || (App_1.ViewComponent = {}));
})(App || (App = {}));
//# sourceMappingURL=ModalReactPrueba.js.map