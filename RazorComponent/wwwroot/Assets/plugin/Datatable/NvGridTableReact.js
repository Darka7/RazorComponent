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
    var ImportNvComponents;
    (function (ImportNvComponents) {
        var lang = "EN";
        var Component = React.Component;
        var NvGridTable = /** @class */ (function (_super) {
            __extends(NvGridTable, _super);
            function NvGridTable(pr) {
                var _this = _super.call(this, pr) || this;
                _this.RefTableGrid = null;
                _this.el = null;
                _this.grid = null;
                _this.options = null;
                _this.TableIds = [];
                _this.GridTable = _this.GridTable.bind(_this);
                _this.CreateRowsData = _this.CreateRowsData.bind(_this);
                _this.Editbtn = _this.Editbtn.bind(_this);
                _this.Deletebtn = _this.Deletebtn.bind(_this);
                _this.BtnGridOnclick = _this.BtnGridOnclick.bind(_this);
                _this.SwitchEventClick = _this.SwitchEventClick.bind(_this);
                _this.SwitchDataEventClick = _this.SwitchDataEventClick.bind(_this);
                _this.OnChangeInputTable = _this.OnChangeInputTable.bind(_this);
                _this.OnChangeSelectCbo = _this.OnChangeSelectCbo.bind(_this);
                _this.SelectOnDataCbo = _this.SelectOnDataCbo.bind(_this);
                _this.OnClickLinkEvent = _this.OnClickLinkEvent.bind(_this);
                //set variables
                _this.colums = _this.props.colums;
                _this.defaults = _this.props.defaults;
                return _this;
            }
            //OnClickLinkEvent
            NvGridTable.prototype.OnClickLinkEvent = function (rowid, LinkStringEvent) {
                var datarow = this.grid.row(rowid).data();
                if (this.props[LinkStringEvent] != null)
                    this.props[LinkStringEvent](datarow);
            };
            //SelectOnDataEvent
            NvGridTable.prototype.SelectOnDataCbo = function (rowid, colid, evt) {
                var columid = colid;
                var NewValue = evt.currentTarget.value;
                this.grid.cell({ row: rowid, column: columid }).data(NewValue);
                this.props.onChange(this.grid.rows().data().toArray());
            };
            ///SelectEvent
            NvGridTable.prototype.OnChangeSelectCbo = function (rowid, colid, evt) {
                var columid = colid;
                var NewValue = evt.currentTarget.value;
                this.grid.cell({ row: rowid, column: columid }).data(NewValue);
                this.props.onChange(this.grid.rows().data().toArray());
            };
            //InputEvent
            NvGridTable.prototype.OnChangeInputTable = function (InputType, rowid, colid, evt) {
                var columid = colid;
                var typeinput = InputType;
                var rowid = rowid;
                var NewValue = null;
                if (typeinput == "checkbox") {
                    var isChecked = evt.currentTarget.checked;
                    NewValue = isChecked ? true : false;
                }
                else {
                    NewValue = evt.currentTarget.value;
                }
                this.grid.cell({ row: rowid, column: columid }).data(NewValue);
                this.props.onChange(this.grid.rows().data().toArray());
            };
            //SwitchDataEvent
            NvGridTable.prototype.SwitchDataEventClick = function (value, rowid, colid, event) {
                var columid = colid;
                var rowid = rowid;
                var isChecked = event.currentTarget.checked;
                var NewValue = null;
                if (isChecked) {
                    NewValue = value;
                }
                this.grid.cell({ row: rowid, column: columid }).data(NewValue);
                this.props.onChange(this.grid.rows().data().toArray());
            };
            //SwitchEvent
            NvGridTable.prototype.SwitchEventClick = function (rowid, colid, evt) {
                var columid = colid;
                var NewValue = evt.currentTarget.checked;
                this.grid.cell({ row: rowid, column: columid }).data(NewValue);
                this.props.onChange(this.grid.rows().data().toArray());
            };
            //BtnGridOnclick
            NvGridTable.prototype.BtnGridOnclick = function (val, rowid, BtnStringEvent) {
                var valuerow = val;
                var datarow = this.grid.row(rowid).data();
                if (this.props[BtnStringEvent] != null)
                    this.props[BtnStringEvent](valuerow, datarow);
            };
            //Accion
            NvGridTable.prototype.Editbtn = function (id) {
                window.location.href = this.props.urledit + id;
            };
            NvGridTable.prototype.Deletebtn = function (id) {
                var $_this = this;
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
                        },
                    },
                    callback: function (result) {
                        if (result) {
                            App.Loading.fire("Eliminando...");
                            axios.delete($_this.props.urldelete, {
                                params: { id: id }
                            }).then(function (_a) {
                                var data = _a.data;
                                App.Loading.close();
                                $_this.grid.ajax.reload();
                                App.MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");
                            }).catch(function (ex) { return App.MensajeriaApp.Mostrar(ex, -1); });
                        }
                    }
                });
            };
            NvGridTable.prototype.CreateRowsData = function (ct, security, Table, UrlEdit) {
                var $_this = this;
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
                                },
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
                                data: col.Column, title: col.Label, width: "14%", className: "text-center",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        (security === null || security === void 0 ? void 0 : security.Actualizar) &&
                                            React.createElement("button", { type: "button", className: "btn btn-outline-primary " + (col === null || col === void 0 ? void 0 : col.Class), onClick: function () { return $_this.Editbtn(val); } }, "Editar"),
                                        " ",
                                        " ",
                                        (security === null || security === void 0 ? void 0 : security.Eliminar) &&
                                            React.createElement("button", { type: "button", className: "btn btn-outline-danger " + (col === null || col === void 0 ? void 0 : col.Class), onClick: function () { return $_this.Deletebtn(val); } }, "Eliminar"))), td);
                                }
                            };
                            break;
                        case "Button":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "5%", className: "text-center",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        React.createElement("button", { type: "button", className: "btn " + (col === null || col === void 0 ? void 0 : col.Class), disabled: (col === null || col === void 0 ? void 0 : col.Disabled) == true, "data-rowid": rowid, "data-valuerow": val, onClick: function () { return $_this.BtnGridOnclick(val, rowid, col.ButtonEvent); } }, col.ButtonText))), td);
                                }
                            };
                            break;
                        case "Switch":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "8%", className: "text-center",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var ischeck = val == true ? true : false;
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "form-switch" },
                                            React.createElement("input", { className: "form-check-input" + Table + "_Switch_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class), type: "checkbox", "data-columid": colid, "data-rowid": rowid, onChange: function (evt) { return $_this.SwitchEventClick(rowid, colid, evt); }, defaultChecked: ischeck, disabled: (col === null || col === void 0 ? void 0 : col.Disabled) == true })))), td);
                                }
                            };
                            break;
                        case "SwitchData":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "8%", className: "text-center",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var ischeck = !App.isNullOrEmpty(val) ? true : false;
                                    var SetValue = null;
                                    eval("SetValue=entity.".concat(col.SwitchDataValue, ";"));
                                    var IsHidden = false;
                                    if (!App.isNullOrEmpty(col === null || col === void 0 ? void 0 : col.SwitchHideProperty)) {
                                        eval("IsHidden=entity.".concat(col.SwitchHideProperty, ";"));
                                    }
                                    if (IsHidden) {
                                        ReactDOM.render((React.createElement(React.Fragment, null,
                                            React.createElement("div", { className: "form-switch" },
                                                React.createElement("input", { className: "form-check-input " + Table + "_SwitchData_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class), "data-columid": colid, "data-rowid": rowid, type: "checkbox", onChange: function (evt) { return $_this.SwitchDataEventClick(SetValue, rowid, colid, evt); }, defaultChecked: ischeck, disabled: (col === null || col === void 0 ? void 0 : col.Disabled) == true })))), td);
                                    }
                                }
                            };
                            break;
                        case "Input":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "18%",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var disable = (col === null || col === void 0 ? void 0 : col.Disabled) ? "disabled" : "";
                                    if ((col === null || col === void 0 ? void 0 : col.InputType) == "checkbox") {
                                        var checked = false;
                                        checked = val == true ? true : false;
                                        ReactDOM.render((React.createElement(React.Fragment, null,
                                            React.createElement("input", { defaultChecked: checked, disabled: (col === null || col === void 0 ? void 0 : col.Disabled) == true, type: col.InputType, onChange: function (evt) { return $_this.OnChangeInputTable(col.InputType, rowid, colid, evt); }, "data-typeinput": col.InputType, "data-rowid": rowid, "data-columid": colid, className: "form-control " + Table + "_Input_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class) }))), td);
                                    }
                                    else {
                                        ReactDOM.render((React.createElement(React.Fragment, null,
                                            React.createElement("input", { defaultValue: val, disabled: (col === null || col === void 0 ? void 0 : col.Disabled) == true, type: col.InputType, onChange: function (evt) { return $_this.OnChangeInputTable(col.InputType, rowid, colid, evt); }, "data-typeinput": col.InputType, "data-rowid": rowid, "data-columid": colid, className: "form-control " + Table + "_Input_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class) }))), td);
                                    }
                                }
                            };
                            break;
                        case "Select":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "18%",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var disable = col === null || col === void 0 ? void 0 : col.Disabled;
                                    var ItemsSelect = col.SelectItems;
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        React.createElement("select", { defaultValue: val, disabled: disable == true, onChange: function (evt) { return $_this.OnChangeSelectCbo(rowid, colid, evt); }, className: "form-select " + Table + "_Select_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class) }, ItemsSelect.map(function (r) { return (React.createElement("option", { value: r.Value, disabled: r.Disabled == true }, r.Text)); })))), td);
                                }
                            };
                            break;
                        case "SelectOnData":
                            addcolum = {
                                data: col.Column, title: col.Label, width: "18%",
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var disable = col === null || col === void 0 ? void 0 : col.Disabled;
                                    var ItemsSelect = [];
                                    eval("ItemsSelect=entity.".concat(col.SelectOnDataProperty, ";"));
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        React.createElement("select", { defaultValue: val, disabled: disable == true, onChange: function (evt) { return $_this.SelectOnDataCbo(rowid, colid, evt); }, className: "form-select " + Table + "_SelectOnData_" + col.Column + " " + (col === null || col === void 0 ? void 0 : col.Class) }, ItemsSelect.map(function (r) { return (React.createElement("option", { value: r.Value, disabled: r.Disabled == true }, r.Text)); })))), td);
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
                                data: col.Column, title: col.Label,
                                createdCell: function (td, val, entity, rowid, colid) {
                                    var text = App.isNullOrEmpty(val) ? "..." : val;
                                    ReactDOM.render((React.createElement(React.Fragment, null,
                                        React.createElement("a", { className: "stretched-link " + (col === null || col === void 0 ? void 0 : col.Class), onClick: function (evt) { return $_this.OnClickLinkEvent(rowid, col.LinkEvent); } }, text))), td);
                                }
                            };
                            break;
                        case "LinkUrl":
                            addcolum = {
                                data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                    var text = App.isNullOrEmpty(val) ? "..." : val;
                                    var url = col.LinkUrl + $.param(entity);
                                    var disable = (col === null || col === void 0 ? void 0 : col.Disabled) == true ? "disabled" : "";
                                    return "<a class=\"stretched-link ".concat(col === null || col === void 0 ? void 0 : col.Class, "\" href=\"").concat(url, "\" ").concat(disable, " >").concat(text, "</a>");
                                }
                            };
                            break;
                        case "HTML":
                            addcolum = {
                                data: col.Column, title: col.Label, render: function (val, types, entity, meta) {
                                    var result = "";
                                    var rowid = meta.row;
                                    var columid = meta.col;
                                    eval("result= \"".concat(col.Html, "\" ;"));
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
                                    result = $_this.props[col.JavaScript](val, entity, columid, rowid);
                                    return result;
                                }
                            };
                            break;
                        case "Render":
                            addcolum = {
                                data: col.Column, title: col.Label, render: col.render
                            };
                            break;
                        case "createdCell":
                            addcolum = {
                                data: col.Column, title: col.Label, createdCell: col.createdCell
                            };
                            break;
                    }
                    if (!App.isNullOrEmpty(col === null || col === void 0 ? void 0 : col.Width))
                        addcolum.width = col.Width;
                    colums.push(addcolum);
                });
                return colums;
            };
            NvGridTable.prototype.GridTable = function () {
                var _a, _b, _c;
                var _this = this;
                var _d, _e, _f, _g, _h, _j, _k, _l, _m;
                var $_this = this;
                this.el = this.RefTableGrid.id;
                if (((_d = this.colums) === null || _d === void 0 ? void 0 : _d.length) == 1) {
                    this.defaults.order = [[0, 'asc']];
                }
                $(window).scrollTop(1);
                this.options = {
                    ajax: {
                        url: this.props.urldata,
                        type: "POST",
                        async: true,
                        complete: function (result, tx) {
                            if (!App.isNullOrEmpty(result.responseJSON)) {
                                $_this.props.onChange(result.responseJSON.data);
                            }
                        }
                    },
                    destroy: true,
                    searching: this.defaults.searching,
                    autoWidth: false,
                    dom: "Bfrtip",
                    processing: true,
                    lengthChange: false,
                    serverSide: this.defaults.serverSide,
                    pageLength: this.defaults.pageLength,
                    stateSave: this.defaults.stateSave,
                    ordering: this.defaults.ordering,
                    order: this.defaults.order,
                    columnDefs: App.DTRender.CreateHeaderColumnsDef(this.colums, this.el),
                    columns: this.CreateRowsData(this.colums, this.props.security, this.el, this.props.urledit),
                };
                if (!App.isNullOrEmpty((_e = this.defaults) === null || _e === void 0 ? void 0 : _e.CreateRow)) {
                    this.options.createdRow = this.defaults.CreateRow;
                }
                if (((_f = this.defaults) === null || _f === void 0 ? void 0 : _f.rowId) != null) {
                    this.options.rowId = function (a) {
                        var result = "";
                        eval("result= '".concat(_this.el, "_'+a.").concat(_this.defaults.rowId));
                        return result;
                    };
                }
                if (lang == "ES") {
                    this.options.language = {
                        url: '',
                        buttons: {
                            colvis: "Colums"
                        }
                    };
                }
                else {
                    this.options.language = {
                        buttons: {
                            colvis: "Columnas"
                        }
                    };
                }
                // btns Defaults
                this.options.buttons = {
                    buttons: [],
                    dom: {
                        button: {
                            className: "btn btn-outline-primary"
                        },
                    },
                };
                var Edit = this.colums.find(function (value, index) { return value.Type == "Index"; });
                //btns por seguridad
                if (Edit != null) {
                    this.options.rowCallback = function (row, data, index) {
                        var id = null;
                        eval("id=data.".concat(Edit.Column, ";"));
                        if ($.inArray(id, $_this.TableIds) !== -1) {
                            $_this.grid.row(index).select();
                        }
                    };
                    this.options.select = {
                        style: "multi",
                        selector: 'td:first-child',
                        info: false
                    };
                    this.options.deferRender = true;
                    $("#" + this.el).on("click", ".toggle-all" + this.el, function () {
                        $(this).closest("tr").toggleClass("selected");
                        if ($(this).closest("tr").hasClass("selected")) {
                            $_this.grid.rows().select();
                        }
                        else {
                            $_this.grid.rows().deselect();
                        }
                    });
                    if ((_g = this.props.security) === null || _g === void 0 ? void 0 : _g.Insertar) {
                        var btnnew = {
                            text: "New",
                            action: function (e, dt, node, config) {
                                if ($_this.props.urledit != null) {
                                    window.location.href = $_this.props.urledit;
                                }
                            }
                        };
                        this.options.buttons.buttons.push(btnnew);
                    }
                    if ((_h = this.props.security) === null || _h === void 0 ? void 0 : _h.Actualizar) {
                        var btnedit = {
                            text: "Edit",
                            className: "SelectionBtn_" + this.el,
                            action: function (e, dt, node, config) {
                                if ($_this.TableIds.length == 1) {
                                    window.location.href = $_this.props.urledit + $_this.TableIds[0];
                                }
                                else {
                                    App.MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                                }
                            }
                        };
                        this.options.buttons.buttons.push(btnedit);
                    }
                    if ((_j = this.props.security) === null || _j === void 0 ? void 0 : _j.Eliminar) {
                        var btnDelete = {
                            text: "Delete",
                            className: "SelectionBtn_" + this.el,
                            action: function (e, dt, node, config) {
                                if ($_this.TableIds.length > 0) {
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
                                                axios.delete($_this.props.urldelete + JSON.stringify($_this.TableIds))
                                                    .then(function (_a) {
                                                    var data = _a.data;
                                                    App.Loading.close();
                                                    $_this.grid.ajax.reload();
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
                        this.options.buttons.buttons.push(btnDelete);
                    }
                }
                else {
                    if ((_k = this.props.security) === null || _k === void 0 ? void 0 : _k.Insertar) {
                        var btnnew = {
                            text: "New",
                            action: function (e, dt, node, config) {
                                if ($_this.props.urledit != null) {
                                    window.location.href = $_this.props.urledit;
                                }
                            }
                        };
                        this.options.buttons.buttons.push(btnnew);
                    }
                }
                /// btns create
                if (this.props.buttons != null) {
                    var btnsCreated = [];
                    this.props.buttons.forEach(function (item) {
                        var _a, _b, _c, _d;
                        var newbtn = {
                            text: item.text,
                            className: (_a = item === null || item === void 0 ? void 0 : item.className) !== null && _a !== void 0 ? _a : null,
                            titleAttr: (_b = item === null || item === void 0 ? void 0 : item.titleAttr) !== null && _b !== void 0 ? _b : null,
                            name: (_c = item === null || item === void 0 ? void 0 : item.name) !== null && _c !== void 0 ? _c : null,
                            enabled: (_d = item === null || item === void 0 ? void 0 : item.enabled) !== null && _d !== void 0 ? _d : null,
                            action: function (e, dt, node, config) {
                                var data = dt.rows().data().toArray();
                                $_this.props[item.action]($_this.TableIds, data, dt, node);
                            }
                        };
                        btnsCreated.push(newbtn);
                    });
                    (_a = this.options.buttons.buttons).push.apply(_a, btnsCreated);
                }
                /// btns  export
                if (!App.isNullOrEmpty(this.defaults.BtnDefaults)) {
                    var colvis = this.defaults.BtnDefaults.find(function (r) { return r == "colvis"; });
                    if (colvis != null) {
                        var NewBtnsDefaults = this.defaults.BtnDefaults.filter(function (r) { return r != "colvis"; });
                        var Colvis = {
                            extend: "colvis",
                            columns: ":not(.noVis)",
                        };
                        this.options.buttons.buttons.push(Colvis);
                        (_b = this.options.buttons.buttons).push.apply(_b, NewBtnsDefaults);
                    }
                    else {
                        (_c = this.options.buttons.buttons).push.apply(_c, this.defaults.BtnDefaults);
                    }
                }
                this.grid = $(this.RefTableGrid).DataTable(this.options);
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
                    this.grid
                        .on('select', function (e, dt, type, indexes) {
                        var _a;
                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = SelectedIndex($_this.TableIds, rows);
                        $_this.props.selected($_this.TableIds);
                        if (((_a = $_this.TableIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(true);
                        }
                        else {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(false);
                        }
                    })
                        .on('deselect', function (e, dt, type, indexes) {
                        var _a;
                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = UnSelectedIndex($_this.TableIds, rows);
                        $_this.props.selected($_this.TableIds);
                        if (((_a = $_this.TableIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(true);
                        }
                        else {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(false);
                        }
                        $(".toggle-all" + $_this.el).closest("tr").removeClass("selected");
                    }).on('page.dt', function () {
                        $(".toggle-all" + $_this.el).closest("tr").removeClass("selected");
                    });
                    if (((_l = this.TableIds) === null || _l === void 0 ? void 0 : _l.length) > 0) {
                        this.grid.buttons(".SelectionBtn_" + this.el).enable(true);
                    }
                    else {
                        this.grid.buttons(".SelectionBtn_" + this.el).enable(false);
                    }
                }
                if ((_m = this.defaults) === null || _m === void 0 ? void 0 : _m.RowIdEvent) {
                    $("#".concat(this.el, " tbody")).on("click", "tr", function () {
                        var $this = this;
                        var id = $_this.grid.row($this).id();
                        id = id.split("_").shift();
                        window.location.href = $_this.props.urledit + id;
                    });
                }
                return this.grid;
            };
            NvGridTable.prototype.componentDidMount = function () {
                var GridResult = this.GridTable();
                this.props.dt(GridResult);
            };
            NvGridTable.prototype.render = function () {
                var _this = this;
                var _a = this.props, id = _a.id, className = _a.className;
                return (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("table", { ref: function (r) { return _this.RefTableGrid = r; }, id: id, className: className }),
                    " "));
            };
            NvGridTable.defaultProps = {
                colums: [],
                security: { Consultar: false, Actualizar: false, Eliminar: false, Insertar: false },
                buttons: null,
                defaults: new App.GridTableOptions(),
                onChange: function (r) { return r; },
                selected: function (r) { return r; },
                urldata: null,
                urledit: null,
                urldelete: null,
            };
            return NvGridTable;
        }(Component));
        ImportNvComponents.NvGridTable = NvGridTable;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
//# sourceMappingURL=NvGridTableReact.js.map