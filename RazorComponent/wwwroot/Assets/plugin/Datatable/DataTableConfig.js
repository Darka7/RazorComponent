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
(function (App) {
    var DT;
    (function (DT) {
        var lang = "EN";
        function CreateHeaderColumnsDef(ct, table) {
            var colums = [];
            ct.forEach(function (val, index) {
                if (val.Type == "Index") {
                    var ob = {
                        targets: 0,
                        orderable: false,
                        className: "toggle-all".concat(table, " select-checkbox text-center noVis"),
                    };
                    colums.push(ob);
                }
                else {
                    var OrderColum = App.isNullOrEmpty(val === null || val === void 0 ? void 0 : val.Orderable) ? true : val.Orderable;
                    var Visible = App.isNullOrEmpty(val === null || val === void 0 ? void 0 : val.VisibleColum) ? true : val.VisibleColum;
                    var ob = {
                        targets: index,
                        orderable: OrderColum,
                        visible: Visible,
                    };
                    if ((val === null || val === void 0 ? void 0 : val.ClassColum) != null)
                        ob.className = val.ClassColum;
                    if ((val === null || val === void 0 ? void 0 : val.WidthColum) != null)
                        ob.width = val.WidthColum;
                    colums.push(ob);
                }
            });
            return colums;
        }
        DT.CreateHeaderColumnsDef = CreateHeaderColumnsDef;
        function CreateRowsData(ct, security, Table, UrlEdit) {
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
                            data: col.Column,
                            orderable: false,
                            width: "3%",
                            className: "select-checkbox",
                            title: "<i ></i>",
                            render: function (val, types, entity, meta) {
                                return "";
                            }
                        };
                        break;
                    case "Text":
                        addcolum = { data: col.Column, title: col.Label };
                        break;
                    case "DateTime":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                return !App.isNullOrEmpty(val) ? dateFormat(new Date(val), formatDateTime) : "";
                            }
                        };
                        break;
                    case "Date":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                return !App.isNullOrEmpty(val) ? dateFormat(new Date(val), formatDate) : "";
                            }
                        };
                        break;
                    case "IsActive":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                return val == true ?
                                    "<span class=\"badge bg-success\">".concat(Activo, "</span>")
                                    : "<span class=\"badge bg-danger\">".concat(Inactive, "</span>");
                            }
                        };
                        break;
                    case "IsActiveText":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                return val == true ?
                                    "<span class=\"badge bg-success\">".concat(col.BoolTrue, "</span>")
                                    : "<span class=\"badge bg-danger\">".concat(col.BoolFalse, "</span>");
                            }
                        };
                        break;
                    case "Bool":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                return val == true ? col.BoolTrue : col.BoolFalse;
                            }
                        };
                        break;
                    case "Accion":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "14%", className: "text-center", render: function (val, types, entity, meta) {
                                var btnedit = (security === null || security === void 0 ? void 0 : security.Actualizar) ? "<button type=\"button\" class=\"btn btn-outline-primary ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" onclick=\"Editbtn").concat(Table, "('").concat(val, "')\">Editar</button>") : "";
                                var btnDelete = (security === null || security === void 0 ? void 0 : security.Eliminar) ? "<button type=\"button\" class=\"btn btn-outline-danger ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" onclick=\"Deletebtn").concat(Table, "('").concat(val, "')\">Eliminar</button>") : "";
                                return btnedit + " " + btnDelete;
                            }
                        };
                        break;
                    case "Button":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "5%", className: "text-center", render: function (val, types, entity, meta) {
                                var rowid = meta.row;
                                return "<button type=\"button\" class=\"btn ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" data-rowid=\"").concat(rowid, "\" data-valuerow=\"").concat(val, "\" onclick=\"").concat(Table, "BtnGridOnclick($(this),'").concat(col.ButtonEvent, "')\">").concat(col.ButtonText, "</button>");
                            }
                        };
                        break;
                    case "Switch":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "8%", className: "text-center", render: function (val, types, entity, meta) {
                                var ischeck = val == true ? 'checked' : '';
                                var rowid = meta.row;
                                var colid = meta.col;
                                if (!App.isNullOrEmpty(col === null || col === void 0 ? void 0 : col.SwitchHideProperty)) {
                                    var IsHidden = false;
                                    eval("IsHidden=entity.".concat(col.SwitchHideProperty, ";"));
                                    if (IsHidden)
                                        return "";
                                }
                                return "<div class=\"form-check form-switch\"><input class=\"form-check-input ".concat(Table, "_Switch_").concat(col.Column, " ").concat(col === null || col === void 0 ? void 0 : col.Class, "\" type=\"checkbox\" data-columid=\"").concat(colid, "\" data-rowid=\"").concat(rowid, "\" onchange=\"").concat(Table, "SwitchEvent($(this))\" ").concat(ischeck, "  ").concat(col.Disabled ? "disabled" : "", " value=\"").concat(val, "\"></div>");
                            }
                        };
                        break;
                    case "SwitchData":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "8%", className: "text-center", render: function (val, types, entity, meta) {
                                var ischeck = !App.isNullOrEmpty(val) ? 'checked' : '';
                                var rowid = meta.row;
                                var colid = meta.col;
                                var SetValue = null;
                                eval("SetValue=entity.".concat(col.SwitchDataValue, ";"));
                                if (!App.isNullOrEmpty(col === null || col === void 0 ? void 0 : col.SwitchHideProperty)) {
                                    var IsHidden = false;
                                    eval("IsHidden=entity.".concat(col.SwitchHideProperty, ";"));
                                    if (IsHidden)
                                        return "";
                                }
                                return "<div class=\"form-check form-switch\"><input class=\"form-check-input ".concat(Table, "_SwitchData_").concat(col.Column, " ").concat(col === null || col === void 0 ? void 0 : col.Class, "\" value=\"").concat(SetValue, "\" data-columid=\"").concat(colid, "\" data-rowid=\"").concat(rowid, "\"  type=\"checkbox\"  onchange=\"").concat(Table, "SwitchDataEvent($(this))\"  ").concat(ischeck, "  ").concat(col.Disabled ? "disabled" : "", " ></div>");
                            }
                        };
                        break;
                    case "Input":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%", render: function (val, types, entity, meta) {
                                var rowid = meta.row;
                                var colid = meta.col;
                                var checked = "";
                                if ((col === null || col === void 0 ? void 0 : col.InputType) == "checkbox") {
                                    checked = val == true ? "" : "checked";
                                }
                                var disable = (col === null || col === void 0 ? void 0 : col.Disabled) ? "disabled" : "";
                                //var Inputid = "${Table}_${col.Column}_${rowid}_${colid}"
                                return "<input  ".concat(checked, " ").concat(disable, " type=\"").concat(col.InputType, "\" onchange=\"").concat(Table, "OnChangeInputTable($(this))\" data-typeinput=\"").concat(col.InputType, "\" data-rowid=\"").concat(rowid, "\" data-columid=\"").concat(colid, "\" class=\"form-control ").concat(Table, "_Input_").concat(col.Column, " ").concat(col === null || col === void 0 ? void 0 : col.Class, "\"  value=\"").concat(val, "\" />");
                            }
                        };
                        break;
                    case "Select":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%", render: function (val, types, entity, meta) {
                                var rowid = meta.row;
                                var colid = meta.col;
                                var disable = (col === null || col === void 0 ? void 0 : col.Disabled) ? "disabled" : "";
                                var options = "";
                                col.SelectItems.forEach(function (data, index) {
                                    var selected = val == data.Value ? "selected" : "";
                                    var dis = (data === null || data === void 0 ? void 0 : data.Disabled) ? "disabled" : "";
                                    var item = "<option value=\"".concat(data.Value, "\" ").concat(selected, " ").concat(dis, ">").concat(data.Text, "</option>");
                                    options = options + item;
                                });
                                return "<select data-rowid=\"".concat(rowid, "\" data-columid=\"").concat(colid, "\" class=\"form-select ").concat(Table, "_Select_").concat(col.Column, "  ").concat(col === null || col === void 0 ? void 0 : col.Class, "\" ").concat(disable, " onchange=\"").concat(Table, "OnChangeSelectCbo($(this))\" >").concat(options, "</select>");
                            }
                        };
                        break;
                    case "SelectOnData":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%", render: function (val, types, entity, meta) {
                                var rowid = meta.row;
                                var colid = meta.col;
                                var disable = (col === null || col === void 0 ? void 0 : col.Disabled) ? "disabled" : "";
                                var options = "";
                                var ItemsOptions = [];
                                eval("ItemsOptions=entity.".concat(col.SelectOnDataProperty, ";"));
                                ItemsOptions.forEach(function (data, index) {
                                    var selected = val == data.Value ? "selected" : "";
                                    var dis = (data === null || data === void 0 ? void 0 : data.Disabled) ? "disabled" : "";
                                    var item = "<option value=\"".concat(data.Value, "\" ").concat(selected, " ").concat(dis, ">").concat(data.Text, "</option>");
                                    options = options + item;
                                });
                                return "<select data-rowid=\"".concat(rowid, "\" data-columid=\"").concat(colid, "\" class=\"form-select ").concat(Table, "_SelectOnData_").concat(col.Column, "  ").concat(col === null || col === void 0 ? void 0 : col.Class, "\" ").concat(disable, " onchange=\"").concat(Table, "SelectOnDataCbo($(this))\" >").concat(options, "</select>");
                            }
                        };
                        break;
                    case "LinkEdit":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var id = null;
                                var text = App.isNullOrEmpty(val) ? "..." : val;
                                eval("id=entity.".concat(col.LinkPropertySend, ";"));
                                if (id == null)
                                    return text;
                                var url = UrlEdit + id;
                                return "<a  class=\"stretched-link ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" href=\"").concat(url, "\">").concat(text, "</a>");
                            }
                        };
                        break;
                    case "LinkEvent":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var text = App.isNullOrEmpty(val) ? "..." : val;
                                var rowid = meta.row;
                                return "<a class=\"stretched-link ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" data-rowid=\"").concat(rowid, "\" onclick='").concat(Table, "OnClickLinkEvent($(this),'").concat(col.LinkEvent, "')' href=\"javascript: void(0)\">").concat(text, "</a>");
                            }
                        };
                        break;
                    case "LinkUrl":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var text = App.isNullOrEmpty(val) ? "..." : val;
                                var url = col.LinkUrl + $.param(entity);
                                return "<a class=\"stretched-link ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" href=\"").concat(url, "\" >").concat(text, "</a>");
                            }
                        };
                        break;
                    case "HTML":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var result = "";
                                var rowid = meta.row;
                                var columid = meta.col;
                                eval("result= ".concat(col.Html, " ;"));
                                return result;
                            }
                        };
                        break;
                    case "JavaScript":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var result = "";
                                var rowid = meta.row;
                                var columid = meta.col;
                                eval(col.JavaScript);
                                return result;
                            }
                        };
                        break;
                    case "ExecuteFunctionJS":
                        addcolum = {
                            data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                var result = "";
                                var rowid = meta.row;
                                var columid = meta.col;
                                eval("result= ".concat(col.JavaScript, "(val,entity,columid,rowid);"));
                                return result;
                            }
                        };
                        break;
                    case "Render":
                        addcolum = {
                            data: col.Column, title: col.Label, render: col.render
                        };
                        break;
                }
                if (!App.isNullOrEmpty(col === null || col === void 0 ? void 0 : col.Width))
                    addcolum.width = col.Width;
                colums.push(addcolum);
            });
            return colums;
        }
        DT.CreateRowsData = CreateRowsData;
    })(DT = App.DT || (App.DT = {}));
})(App || (App = {}));
(function (App) {
    var lang = "EN";
    var GridTableOptions = /** @class */ (function () {
        function GridTableOptions() {
            this.serverSide = false;
            this.rowId = null;
            this.RowIdEvent = false;
            this.pageLength = 5;
            this.searching = true;
            this.order = [[1, 'asc']];
            this.ordering = true;
            this.stateSave = false;
            this.BtnDefaults = [];
            this.CreateRow = null;
        }
        return GridTableOptions;
    }());
    App.GridTableOptions = GridTableOptions;
    function GridTable(el, Colums, UrlData, UrlEdit, UrlDelete, Security, Buttons, Defaults) {
        var _a, _b, _c;
        if (UrlData === void 0) { UrlData = null; }
        if (UrlEdit === void 0) { UrlEdit = null; }
        if (UrlDelete === void 0) { UrlDelete = null; }
        if (Security === void 0) { Security = { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true }; }
        if (Buttons === void 0) { Buttons = null; }
        if (Defaults === void 0) { Defaults = new GridTableOptions(); }
        if ((Colums === null || Colums === void 0 ? void 0 : Colums.length) == 1) {
            Defaults.order = [[0, 'asc']];
        }
        var TableIds = [];
        $(window).scrollTop(1);
        var options;
        options = {
            ajax: {
                url: UrlData,
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
            stateSave: Defaults.stateSave,
            ordering: Defaults.ordering,
            order: Defaults.order,
            columnDefs: App.DT.CreateHeaderColumnsDef(Colums, el),
            columns: App.DT.CreateRowsData(Colums, Security, el, UrlEdit)
        };
        if (!App.isNullOrEmpty(Defaults === null || Defaults === void 0 ? void 0 : Defaults.CreateRow)) {
            options.createdRow = Defaults.CreateRow;
        }
        if ((Defaults === null || Defaults === void 0 ? void 0 : Defaults.rowId) != null) {
            options.rowId = function (a) {
                var result = "";
                eval("result= '".concat(el, "_'+a.").concat(Defaults.rowId));
                return result;
            };
        }
        if (lang == "ES") {
            options.language = {
                url: '',
                buttons: {
                    colvis: "Colums"
                }
            };
        }
        else {
            options.language = {
                buttons: {
                    colvis: "Columnas"
                }
            };
        }
        // btns Defaults
        options.buttons = {
            buttons: [],
            dom: {
                button: {
                    className: "btn btn-outline-primary"
                },
            },
        };
        var Edit = Colums.find(function (value, index) { return value.Type == "Index"; });
        //btns por seguridad
        if (Edit != null) {
            options.rowCallback = function (row, data, index) {
                var id = null;
                eval("id=data.".concat(Edit.Column, ";"));
                if ($.inArray(id, TableIds) !== -1) {
                    grid.row(index).select();
                }
            };
            options.select = {
                style: "multi",
                selector: 'td:first-child',
                info: false
            };
            options.deferRender = true;
            $("#" + el).on("click", ".toggle-all" + el, function () {
                $(this).closest("tr").toggleClass("selected");
                if ($(this).closest("tr").hasClass("selected")) {
                    grid.rows().select();
                }
                else {
                    grid.rows().deselect();
                }
            });
            if (Security === null || Security === void 0 ? void 0 : Security.Insertar) {
                var btnnew = {
                    text: "New",
                    action: function (e, dt, node, config) {
                        if (UrlEdit != null) {
                            window.location.href = UrlEdit;
                        }
                    }
                };
                options.buttons.buttons.push(btnnew);
            }
            if (Security === null || Security === void 0 ? void 0 : Security.Actualizar) {
                var btnedit = {
                    text: "Edit",
                    className: "SelectionBtn_" + el,
                    action: function (e, dt, node, config) {
                        if (TableIds.length == 1) {
                            window.location.href = UrlEdit + TableIds[0];
                        }
                        else {
                            App.MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                        }
                    }
                };
                options.buttons.buttons.push(btnedit);
            }
            if (Security === null || Security === void 0 ? void 0 : Security.Eliminar) {
                var btnDelete = {
                    text: "Delete",
                    className: "SelectionBtn_" + el,
                    action: function (e, dt, node, config) {
                        if (TableIds.length > 0) {
                            bootbox.confirm({
                                title: "Eliminar",
                                message: "Esta seguro de que desea Eliminar estos registro(os)!",
                                centerVertical: true,
                                buttons: {
                                    cancel: {
                                        className: "btn btn-outline-secondary",
                                        label: "Cancelar"
                                    },
                                    confirm: {
                                        className: "btn btn-outline-danger",
                                        label: "Eliminar"
                                    }
                                },
                                callback: function (result) {
                                    if (result) {
                                        App.Loading.fire("Eliminando...");
                                        axios.delete(UrlDelete + JSON.stringify(TableIds))
                                            .then(function (_a) {
                                            var data = _a.data;
                                            App.Loading.close();
                                            grid.ajax.reload();
                                            App.MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");
                                        }).catch(function (ex) { return App.MensajeriaApp.Mostrar(ex, -1); });
                                    }
                                }
                            });
                        }
                        else {
                            App.MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                        }
                    }
                };
                options.buttons.buttons.push(btnDelete);
            }
        }
        else {
            if (Security === null || Security === void 0 ? void 0 : Security.Insertar) {
                var btnnew = {
                    text: "New",
                    action: function (e, dt, node, config) {
                        if (UrlEdit != null) {
                            window.location.href = UrlEdit;
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
                var _a, _b, _c, _d;
                var newbtn = {
                    text: item.text,
                    className: (_a = item === null || item === void 0 ? void 0 : item.className) !== null && _a !== void 0 ? _a : null,
                    titleAttr: (_b = item === null || item === void 0 ? void 0 : item.titleAttr) !== null && _b !== void 0 ? _b : null,
                    name: (_c = item === null || item === void 0 ? void 0 : item.name) !== null && _c !== void 0 ? _c : null,
                    enabled: (_d = item === null || item === void 0 ? void 0 : item.enabled) !== null && _d !== void 0 ? _d : null,
                    action: function (e, dt, node, config) {
                        var data = dt.rows().data().toArray();
                        eval("".concat(item.action, "(TableIds,data,dt,node);"));
                    }
                };
                btnsCreated.push(newbtn);
            });
            (_a = options.buttons.buttons).push.apply(_a, __spreadArray([], __read(btnsCreated), false));
        }
        /// btns  export
        if (!App.isNullOrEmpty(Defaults.BtnDefaults)) {
            var colvis = Defaults.BtnDefaults.find(function (r) { return r == "colvis"; });
            if (colvis != null) {
                var NewBtnsDefaults = Defaults.BtnDefaults.filter(function (r) { return r != "colvis"; });
                var Colvis = {
                    extend: "colvis",
                    columns: ":not(.noVis)",
                };
                options.buttons.buttons.push(Colvis);
                (_b = options.buttons.buttons).push.apply(_b, __spreadArray([], __read(NewBtnsDefaults), false));
            }
            else {
                (_c = options.buttons.buttons).push.apply(_c, __spreadArray([], __read(Defaults.BtnDefaults), false));
            }
        }
        //colum Accion
        var Accion = Colums.find(function (value, index) { return value.Type == "Accion"; });
        if (Accion != null) {
            window["Editbtn" + el] = function (id) {
                window.location.href = UrlEdit + id;
            };
            window["Deletebtn" + el] = function (id) {
                bootbox.confirm({
                    title: "Eliminar",
                    centerVertical: true,
                    message: "Esta seguro de que desea Eliminar estos registro(os)!",
                    buttons: {
                        cancel: {
                            className: "btn btn-outline-secondary",
                            label: "Cancelar"
                        },
                        confirm: {
                            className: "btn btn-outline-danger",
                            label: "Eliminar"
                        }
                    },
                    callback: function (result) {
                        if (result) {
                            App.Loading.fire("Eliminando...");
                            axios.delete(UrlDelete, {
                                params: { id: id }
                            }).then(function (_a) {
                                var data = _a.data;
                                App.Loading.close();
                                grid.ajax.reload();
                                App.MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");
                            }).catch(function (ex) { return App.MensajeriaApp.Mostrar(ex, -1); });
                        }
                    }
                });
            };
        }
        var SwitchEvent = Colums.find(function (value, index) { return value.Type == "Switch"; });
        if (SwitchEvent != null) {
            window[el + "SwitchEvent"] = function ($this) {
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var NewValue = $this.is(":checked");
                grid.cell({ row: rowid, column: columid }).data(NewValue);
            };
        }
        var SwitchDataEvent = Colums.find(function (value, index) { return value.Type == "SwitchData"; });
        if (SwitchDataEvent != null) {
            window[el + "SwitchDataEvent"] = function ($this) {
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var isChecked = $this.is(":checked");
                var NewValue = null;
                if (isChecked) {
                    NewValue = $this.val();
                }
                grid.cell({ row: rowid, column: columid }).data(NewValue);
            };
        }
        var InputEvent = Colums.find(function (value, index) { return value.Type == "Input"; });
        if (InputEvent != null) {
            window[el + "OnChangeInputTable"] = function ($this) {
                var columid = $this.data("columid");
                var typeinput = $this.data("typeinput");
                var rowid = parseInt($this.data("rowid"));
                var NewValue = null;
                if (typeinput == "checkbox") {
                    var isChecked = $this.is(":checked");
                    NewValue = isChecked ? true : false;
                }
                else {
                    NewValue = $this.val();
                }
                grid.cell({ row: rowid, column: columid }).data(NewValue);
            };
        }
        var SelectEvent = Colums.find(function (value, index) { return value.Type == "Select"; });
        if (SelectEvent != null) {
            window[el + "OnChangeSelectCbo"] = function ($this) {
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var NewValue = $this.val();
                grid.cell({ row: rowid, column: columid }).data(NewValue);
            };
        }
        var SelectOnDataEvent = Colums.find(function (value, index) { return value.Type == "SelectOnData"; });
        if (SelectOnDataEvent != null) {
            window[el + "SelectOnDataCbo"] = function ($this) {
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var NewValue = $this.val();
                grid.cell({ row: rowid, column: columid }).data(NewValue);
            };
        }
        var OnClickLinkEvent = Colums.find(function (value, index) { return value.Type == "LinkEvent"; });
        if (OnClickLinkEvent != null) {
            window[el + "OnClickLinkEvent"] = function ($this, LinkStringEvent) {
                var rowid = parseInt($this.data("rowid"));
                var datarow = grid.row(rowid).data();
                eval("".concat(LinkStringEvent, "(datarow);"));
            };
        }
        var BtnGridOnclick = Colums.find(function (value, index) { return value.Type == "Button"; });
        if (BtnGridOnclick != null) {
            window[el + "BtnGridOnclick"] = function ($this, BtnStringEvent) {
                var rowid = parseInt($this.data("rowid"));
                var valuerow = parseInt($this.data("valuerow"));
                var datarow = grid.row(rowid).data();
                eval("".concat(BtnStringEvent, "(valuerow,datarow);"));
            };
        }
        var grid = $("#".concat(el)).DataTable(options);
        function SelectedIndex(selected, items) {
            items.forEach(function (item) {
                var id = null;
                eval("id=item.".concat(Edit === null || Edit === void 0 ? void 0 : Edit.Column, ";"));
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
                eval("id=item.".concat(Edit === null || Edit === void 0 ? void 0 : Edit.Column, ";"));
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
                if ((TableIds === null || TableIds === void 0 ? void 0 : TableIds.length) > 0) {
                    grid.buttons(".SelectionBtn_" + el).enable(true);
                }
                else {
                    grid.buttons(".SelectionBtn_" + el).enable(false);
                }
            })
                .on('deselect', function (e, dt, type, indexes) {
                var rows = grid.rows(indexes).data().toArray();
                TableIds = UnSelectedIndex(TableIds, rows);
                if ((TableIds === null || TableIds === void 0 ? void 0 : TableIds.length) > 0) {
                    grid.buttons(".SelectionBtn_" + el).enable(true);
                }
                else {
                    grid.buttons(".SelectionBtn_" + el).enable(false);
                }
                $(".toggle-all" + el).closest("tr").removeClass("selected");
            }).on('page.dt', function () {
                $(".toggle-all" + el).closest("tr").removeClass("selected");
            });
            if ((TableIds === null || TableIds === void 0 ? void 0 : TableIds.length) > 0) {
                grid.buttons(".SelectionBtn_" + el).enable(true);
            }
            else {
                grid.buttons(".SelectionBtn_" + el).enable(false);
            }
        }
        if (Defaults === null || Defaults === void 0 ? void 0 : Defaults.RowIdEvent) {
            $("#".concat(el, " tbody")).on("click", "tr", function () {
                var $this = this;
                var id = grid.row($this).id();
                id = id.split("_").shift();
                window.location.href = UrlEdit + id;
            });
        }
        return grid;
    }
    App.GridTable = GridTable;
})(App || (App = {}));
//# sourceMappingURL=DataTableConfig.js.map