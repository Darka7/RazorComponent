"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var App;
(function (App_1) {
    var NvGridTable = App_1.ImportNvComponents.NvGridTable;
    var useState = React.useState;
    function App() {
        var _a = useState(null), RefTable = _a[0], setRefTable = _a[1];
        var _b = useState([]), data = _b[0], SetData = _b[1];
        var _c = useState(null), SelectedTable = _c[0], SetSelectedTable = _c[1];
        var columnas = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Input", InputType: "text", Class: "form-control" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "IsActive" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
        ];
        var btns = [
            {
                text: "Prueba", action: "execPrueba", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit float-end"
            },
            {
                text: "Prueba2", action: "exec", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
            }
        ];
        var metodo1 = function (ids, data, dt, node) {
            console.log("metodo1");
            console.log(data);
            console.log(ids);
        };
        var metodo2 = function (ids, data, dt, node) {
            console.log("metodo2");
            console.log(data);
            console.log(ids);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement(NvGridTable, { id: "gridTable1", className: "table", colums: columnas, buttons: btns, security: { Actualizar: true, Consultar: true, Insertar: true, Eliminar: true }, urldata: "api/Persona/List", urledit: "api/Persona", urldelete: "api/Persona/", dt: function (table) { return setRefTable(table); }, onChange: function (r) { return SetData(__spreadArray([], r, true)); }, selected: function (s) { return SetSelectedTable(__spreadArray([], s, true)); }, execPrueba: metodo1, exec: metodo2 }))),
            React.createElement("input", { type: "text", onClick: function () { return console.log(12313); } }),
            React.createElement("br", null),
            JSON.stringify(SelectedTable),
            React.createElement("br", null),
            JSON.stringify(data)));
    }
    ReactDOM.render(React.createElement("div", { className: "container" },
        React.createElement(App, null)), document.getElementById("ReactApp"));
})(App || (App = {}));
//# sourceMappingURL=ReactTabletsx.js.map