"use strict";
var App;
(function (App_1) {
    var useState = React.useState;
    function App() {
        var _a = useState(false), Modal = _a[0], SetModal = _a[1];
        var title = (React.createElement(React.Fragment, null,
            React.createElement("strong", null, "Hola titulo strong")));
        var footer = (React.createElement("button", { type: "button", onClick: function () { return SetModal(false); } }, " Custom footer button"));
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { type: "button", onClick: function () { return SetModal(true); } }, " Abrir modal"),
            React.createElement(App_1.NvModal, { id: "ModalPrueba", title: title, show: Modal, OnClose: function () { return SetModal(false); }, size: "xl" },
                React.createElement("h1", null, " Hola mundo"))));
    }
    ReactDOM.render(React.createElement(App, null), document.getElementById("AppReact"));
})(App || (App = {}));
//# sourceMappingURL=ModalReactPrueba.js.map