"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var App;
(function (App) {
    var lang = "EN";
    var GridTableOptions = /** @class */ (function () {
        function GridTableOptions() {
            this.serverSide = true;
            this.rowId = null;
            this.pageLength = 5;
            this.searching = true;
            this.order = [1, 'asc'];
            this.ordering = true;
            this.BtnDefaults = ["colvis", "excel", "pdf"];
        }
        return GridTableOptions;
    }());
    App.GridTableOptions = GridTableOptions;
    function CreateHeaderColumnsDef(ct, table) {
        var colums = [];
        ct.forEach(function (val, index) {
            if (val.Type == "Index") {
                var ob = {
                    targets: 0,
                    orderable: false,
                    className: "toggle-all" + table + " select-checkbox",
                };
                colums.push(ob);
            }
            else {
                var ob = {
                    targets: index,
                    orderable: val.Orderable,
                };
                if (val.ClassColum != null)
                    ob.className = val.ClassColum;
                if (val.Width != null)
                    ob.width = val.Width;
                colums.push(ob);
            }
        });
        return colums;
    }
    function CreateRowsData(ct, security, Table) {
        var formatDateTime = "ES" == lang ? "dd/mm/yyyy h:MM TT" : "mm/dd/yyyy h:MM TT";
        var formatDate = "ES" == lang ? "dd/mm/yyyy" : "mm/dd/yyyy";
        var Activo = lang == "ES" ? "Activo" : "Active";
        var Inactive = lang == "ES" ? "Inactivo" : "Inactive";
        var colums = [];
        ct.forEach(function (col, index) {
            var addcolum = null;
            switch (col.Type) {
                case "Index":
                    addcolum = {
                        data: col.Columna,
                        orderable: false,
                        width: "5%",
                        className: "select-checkbox",
                        title: "<i ></i>",
                        render: function (val, types, entity, meta) {
                            return "";
                        }
                    };
                    break;
                case "Text":
                    addcolum = { data: col.Columna, title: col.Label };
                    break;
                case "DateTime":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            return val != null ? dateFormat(new Date(val), formatDateTime) : "";
                        }
                    };
                    break;
                case "Date":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            return val != null ? dateFormat(new Date(val), formatDate) : "";
                        }
                    };
                    break;
                case "IsActive":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            return val == true ? Activo : Inactive;
                        }
                    };
                    break;
                case "Bool":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            return val == true ? col.BoolTrue : col.BoolFalse;
                        }
                    };
                    break;
                case "BoolCheck":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            return val == true ? "" : "";
                        }
                    };
                    break;
                case "Accion":
                    addcolum = {
                        data: col.Columna, title: col.Label, width: "5%", render: function (val, types, entity, meta) {
                            var btnedit = (security === null || security === void 0 ? void 0 : security.Actualizar) ? "<button type=\"button\" class=\"btn btn-outline-primary\" onclick=\"Editbtn" + Table + "('" + val + "')\">Editar</button>" : "";
                            var btnDelete = (security === null || security === void 0 ? void 0 : security.Eliminar) ? "<button type=\"button\" class=\"btn btn-outline-danger\" onclick=\"Deletebtn" + Table + "('" + val + "')\">Eliminar</button>" : "";
                            return btnedit + btnDelete;
                        }
                    };
                    break;
                case "Switch":
                    addcolum = {
                        data: col.Columna, title: col.Label, width: "10%", render: function (val, types, entity, meta) {
                            var ischeck = val == true ? 'checked' : '';
                            return "<input class=\"form-check-input " + col.CheckColum + "\" type=\"checkbox\" onchange='switchBtn" + Table + "(" + JSON.stringify(entity) + ",this)'  " + ischeck + "  " + (col.Disabled ? "disabled" : "") + " value=\"\">";
                        }
                    };
                    break;
                case "SwitchMultiple":
                    addcolum = {
                        data: col.Columna, title: col.Label, width: "10%", render: function (val, types, entity, meta) {
                            var ischeck = val == true ? 'checked' : '';
                            return "<input class=\"form-check-input " + col.CheckColum + "\" data-value=\"" + val + "\" data-entity='" + JSON.stringify(entity) + "' type=\"checkbox\"   " + ischeck + "  " + (col.Disabled ? "disabled" : "") + " >";
                        }
                    };
                    break;
                case "SwitchHide":
                    addcolum = {
                        data: col.Columna, title: col.Label, width: "10%", render: function (val, types, entity, meta) {
                            var ischeck = val == true ? 'checked' : '';
                            var IsHidden = false;
                            eval("IsHidden=entity." + col.SwitchHideProperty + ";");
                            if (IsHidden)
                                return "";
                            return "<input class=\"form-check-input " + col.CheckColum + "\" data-value=\"" + val + "\" data-entity='" + JSON.stringify(entity) + "' type=\"checkbox\"   " + ischeck + "  " + (col.Disabled ? "disabled" : "") + " >";
                        }
                    };
                    break;
                case "LinkEdit":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            var id = null;
                            var text = val == null ? "" : val;
                            eval("id=entity." + col.PropertyId1 + ";");
                            if (id == null)
                                return text;
                            return "<a onclick=\"Editbtn" + Table + "('" + id + "')\" href=\"javascript: void(0)\">" + text + "</a>";
                        }
                    };
                    break;
                case "LinkEvent":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            var text = val == null ? "" : val;
                            return "<a onclick='" + col.EventLink + "(" + JSON.stringify(entity) + ",this)' href=\"javascript: void(0)\">" + text + "</a>";
                        }
                    };
                    break;
                case "LinkUrl":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            var text = val == null ? "" : val;
                            return "<a onclick='LinkUrlBtn" + Table + "('" + col.LinkUrl + "'," + JSON.stringify(entity) + ")' href=\"javascript: void(0)\">" + text + "</a>";
                        }
                    };
                    break;
                case "HTML":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            var result = "";
                            eval("result= " + col.Html + " ;");
                            return result;
                        }
                    };
                    break;
                case "JavaScript":
                    addcolum = {
                        data: col.Columna, title: col.Label, render: function (val, types, entity, meta) {
                            var result = "";
                            eval(col.JavaScript);
                            return result;
                        }
                    };
                    break;
            }
            colums.push(addcolum);
        });
        return colums;
    }
    function GridTable(el, colums, urldata, urlEdit, urlDelete, security, Buttons, Defaults) {
        var _a;
        if (urldata === void 0) { urldata = null; }
        if (urlEdit === void 0) { urlEdit = null; }
        if (urlDelete === void 0) { urlDelete = null; }
        if (security === void 0) { security = { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true }; }
        if (Buttons === void 0) { Buttons = null; }
        if (Defaults === void 0) { Defaults = new GridTableOptions(); }
        var TableIds = [];
        $(window).scrollTop(1);
        var options;
        options = {
            ajax: {
                url: urldata,
                type: "POST",
                async: true,
            },
            destroy: true,
            searching: Defaults.searching,
            autoWidth: false,
            dom: "Bfrtip",
            processing: true,
            lengthChange: false,
            serverSide: Defaults.serverSide,
            pageLength: Defaults.pageLength,
            stateSave: true,
            ordering: Defaults.ordering,
            order: [Defaults.order],
            columnDefs: CreateHeaderColumnsDef(colums, el),
            columns: CreateRowsData(colums, security, el)
        };
        if (Defaults.rowId != null)
            options.rowId = function (a) {
                var result = "";
                eval("result= '" + el + "_'+a." + Defaults.rowId);
                return result;
            };
        if (lang == "ES")
            options.language = {
                url: ''
            };
        var Edit = colums.find(function (value, index) { return value.Type == "Index"; });
        // btns Defaults
        options.buttons = {
            buttons: Defaults.BtnDefaults,
            dom: {
                button: {
                    className: "btn"
                }
            }
        };
        //btns por seguridad
        if (Edit != null) {
            options.rowCallback = function (row, data, index) {
                var id = null;
                eval("id=data." + Edit.Columna + ";");
                if ($.inArray(id, TableIds) !== -1) {
                    grid.row(index).select();
                }
            };
            options.select = {
                style: "multi",
                selector: 'td:first-child',
                info: false
            };
            $("#" + el).on("click", ".toggle-all" + el, function () {
                $(this).closest("tr").toggleClass("selected");
                if ($(this).closest("tr").hasClass("selected")) {
                    grid.rows().select();
                }
                else {
                    grid.rows().deselect();
                }
            });
            if (security === null || security === void 0 ? void 0 : security.Insertar) {
                var btnnew = {
                    text: "New",
                    className: "btn   btn-outline-primary",
                    action: function (e, dt, node, config) {
                        if (urlEdit != null) {
                            window.location.href = urlEdit;
                        }
                    }
                };
                options.buttons.buttons.push(btnnew);
            }
            if (security === null || security === void 0 ? void 0 : security.Actualizar) {
                var btnedit = {
                    text: "Edit",
                    className: "btn btn-outline-primary",
                    action: function (e, dt, node, config) {
                        if (TableIds.length == 1) {
                            window.location.href = urlEdit + TableIds[0];
                        }
                        else {
                            alert("Seleccione un registro");
                        }
                    }
                };
                options.buttons.buttons.push(btnedit);
            }
            if (security === null || security === void 0 ? void 0 : security.Eliminar) {
                var btnDelete = {
                    text: "Delete",
                    className: "btn btn-outline-primary",
                    action: function (e, dt, node, config) {
                        if (TableIds.length > 0) {
                            var si = confirm("Esta seguro de que desea Eliminar estos registro(os)!");
                            if (si) {
                                console.log(JSON.stringify(TableIds));
                                //axios.post(urlDelete + JSON.stringify(ids)).then((get) => {
                                //    var result = get.data;
                                //    console.log(result);
                                //    if (false) {
                                //        grid.ajax.reload();
                                //    }
                                //}).catch(ex => {
                                //    alert(ex);
                                //});
                            }
                        }
                        else {
                            alert("Seleccione un registro");
                        }
                    }
                };
                options.buttons.buttons.push(btnDelete);
            }
        }
        else {
            if (security === null || security === void 0 ? void 0 : security.Insertar) {
                var btnnew = {
                    text: "New",
                    className: "btn   btn-outline-primary",
                    action: function (e, dt, node, config) {
                        if (urlEdit != null) {
                            window.location.href = urlEdit;
                        }
                    }
                };
                options.buttons.buttons.push(btnnew);
            }
        }
        /// btns create
        if (Buttons != null) {
            var btnsCreated = [];
            Buttons.forEach(function (item) {
                var newbtn = {
                    text: item.text,
                    className: item.className,
                    action: function (e, dt, node, config) {
                        eval(item.action + "(TableIds,dt,node,config);");
                    }
                };
                btnsCreated.push(newbtn);
            });
            (_a = options.buttons.buttons).push.apply(_a, __spreadArray([], __read(btnsCreated)));
        }
        //colum Accion
        var Accion = colums.find(function (value, index) { return value.Type == "Accion"; });
        if (Accion != null) {
            window["Editbtn" + el] = function (id) {
                window.location.href = urlEdit + TableIds[0];
            };
            window["Deletebtn" + el] = function (id) {
                var si = confirm("Esta seguro de que desea Eliminar estos registro(os)!");
                if (si) {
                    console.log(id);
                    //axios.post(urlDelete + JSON.stringify(ids)).then((get) => {
                    //    var result = get.data;
                    //    console.log(result);
                    //    if (false) {
                    //        grid.ajax.reload();
                    //    }
                    //}).catch(ex => {
                    //    alert(ex);
                    //});
                }
            };
        }
        var grid = $("#" + el).DataTable(options);
        function SelectedIndex(selected, items) {
            items.forEach(function (item) {
                var id = null;
                eval("id=item." + (Edit === null || Edit === void 0 ? void 0 : Edit.Columna) + ";");
                var index = $.inArray(id, selected);
                if (index == -1) {
                    selected.push(id);
                }
            });
            return selected;
        }
        function UnSelectedIndex(selected, items) {
            items.forEach(function (item) {
                var id = null;
                eval("id=item." + (Edit === null || Edit === void 0 ? void 0 : Edit.Columna) + ";");
                var index = $.inArray(id, selected);
                if (index == -1) {
                }
                else {
                    selected.splice(index, 1);
                }
            });
            return selected;
        }
        if (Edit != null) {
            grid
                .on('select', function (e, dt, type, indexes) {
                var rows = grid.rows(indexes).data().toArray();
                TableIds = SelectedIndex(TableIds, rows);
            })
                .on('deselect', function (e, dt, type, indexes) {
                var rows = grid.rows(indexes).data().toArray();
                TableIds = UnSelectedIndex(TableIds, rows);
                $(".toggle-all" + el).closest("tr").removeClass("selected");
            }).on('page.dt', function () {
                $(".toggle-all" + el).closest("tr").removeClass("selected");
            });
        }
        return grid;
    }
    App.GridTable = GridTable;
})(App || (App = {}));
//# sourceMappingURL=DataTableConfig.js.map