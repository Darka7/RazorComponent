"use strict";
var App;
(function (App) {
    var ImportNvComponents;
    (function (ImportNvComponents) {
        function NvModalR(_a) {
            var show = _a.show, OnClose = _a.OnClose, children = _a.children, _b = _a.id, id = _b === void 0 ? "ModalNv_R" : _b, _c = _a.title, title = _c === void 0 ? null : _c, _d = _a.size, size = _d === void 0 ? null : _d, _e = _a.Index, Index = _e === void 0 ? null : _e;
            if (!show)
                return null;
            var SizeModal = App.isNullOrEmpty(size) ? "" : 'nvmodalr-' + size;
            var IndexStyle = Index != null ? { zIndex: Index } : {};
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "nvmodalr-backdrop", style: IndexStyle },
                    React.createElement("div", { className: "nvmodalr show " + SizeModal, tabIndex: -1, id: id, style: IndexStyle },
                        React.createElement("div", { className: "offcanvas-header nvmodalr-header" },
                            React.createElement("h4", null,
                                " ",
                                title,
                                "  "),
                            React.createElement("button", { type: "button", className: "btn-close", "aria-label": "Close", onClick: OnClose })),
                        React.createElement("div", { className: "offcanvas-body" }, children)))));
        }
        ImportNvComponents.NvModalR = NvModalR;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=NvModalR-React.js.map