"use strict";
var App;
(function (App) {
    function NvModal(_a) {
        var OnClose = _a.OnClose, show = _a.show, children = _a.children, _b = _a.id, id = _b === void 0 ? "ModalNv_" : _b, _c = _a.title, title = _c === void 0 ? null : _c, _d = _a.size, size = _d === void 0 ? null : _d, _e = _a.footer, footer = _e === void 0 ? null : _e;
        if (!show)
            return null;
        var slotfooter = footer == null
            ? (React.createElement("button", { type: "button", className: "btn btn-ouline-secondary", onClick: OnClose }, "Cerrar"))
            : footer;
        var SizeModal = App.isNullOrEmpty(size) ? "" : 'modal-' + size;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "nvmodal", id: id, tabIndex: -1 },
                React.createElement("div", { className: "modal-dialog modal-dialog-centered " + SizeModal },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h5", { className: "modal-title" }, title),
                            React.createElement("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: OnClose })),
                        React.createElement("div", { className: "modal-body" },
                            children,
                            " "),
                        React.createElement("div", { className: "modal-footer" }, slotfooter))))));
    }
    App.NvModal = NvModal;
})(App || (App = {}));
//# sourceMappingURL=NvModalReact.js.map