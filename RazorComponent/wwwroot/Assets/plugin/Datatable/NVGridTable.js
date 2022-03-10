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
    var lang = "EN";
    var Component = VuePropertyDecorator.Component, Ref = VuePropertyDecorator.Ref, Watch = VuePropertyDecorator.Watch, VModel = VuePropertyDecorator.VModel, Prop = VuePropertyDecorator.Prop, PropSync = VuePropertyDecorator.PropSync;
    var NvGridTable = /** @class */ (function (_super) {
        __extends(NvGridTable, _super);
        function NvGridTable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.grid = null;
            //Events
            _this.Edit = null;
            _this.Accion = null;
            _this.SwitchEvent = null;
            _this.SwitchDataEvent = null;
            _this.InputEvent = null;
            _this.SelectEvent = null;
            _this.SelectOnDataEvent = null;
            _this.OnClickLinkEventExists = null;
            _this.BtnGridOnclickExists = null;
            //prop internals
            _this.options = null;
            _this.el = null;
            _this.TableIds = [];
            return _this;
        }
        NvGridTable.prototype.OnChangeGridSelecteds = function (val, oldval) {
            this.TablesSelecteds = val;
        };
        NvGridTable.prototype.GridTable = function () {
            var _a, _b, _c;
            var _this = this;
            var _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var $_this = this;
            this.el = this.RefGridTable.id;
            if (((_d = this.colums) === null || _d === void 0 ? void 0 : _d.length) == 1) {
                this.defaults.order = [[0, 'asc']];
            }
            $(window).scrollTop(1);
            this.options = {
                ajax: {
                    url: this.urldata,
                    type: "POST",
                    async: true,
                    complete: function (result, tx) {
                        if (!App.isNullOrEmpty(result.responseJSON)) {
                            console.log("Esta Entrando aca");
                            $_this.dataGrid = result.responseJSON.data;
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
                columns: App.DTRender.CreateRowsData(this.colums, this.security, this.el, this.urledit),
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
            this.Edit = this.colums.find(function (value, index) { return value.Type == "Index"; });
            //btns por seguridad
            if (this.Edit != null) {
                this.options.rowCallback = function (row, data, index) {
                    var id = null;
                    eval("id=data.".concat($_this.Edit.Column, ";"));
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
                if ((_g = this.security) === null || _g === void 0 ? void 0 : _g.Insertar) {
                    var btnnew = {
                        text: "New",
                        action: function (e, dt, node, config) {
                            if ($_this.urledit != null) {
                                window.location.href = $_this.urledit;
                            }
                        }
                    };
                    this.options.buttons.buttons.push(btnnew);
                }
                if ((_h = this.security) === null || _h === void 0 ? void 0 : _h.Actualizar) {
                    var btnedit = {
                        text: "Edit",
                        className: "SelectionBtn_" + this.el,
                        action: function (e, dt, node, config) {
                            if ($_this.TableIds.length == 1) {
                                window.location.href = $_this.urledit + $_this.TableIds[0];
                            }
                            else {
                                App.MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                            }
                        }
                    };
                    this.options.buttons.buttons.push(btnedit);
                }
                if ((_j = this.security) === null || _j === void 0 ? void 0 : _j.Eliminar) {
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
                                            axios.delete($_this.urldelete + JSON.stringify($_this.TableIds))
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
                if ((_k = this.security) === null || _k === void 0 ? void 0 : _k.Insertar) {
                    var btnnew = {
                        text: "New",
                        action: function (e, dt, node, config) {
                            if ($_this.urledit != null) {
                                window.location.href = $_this.urledit;
                            }
                        }
                    };
                    this.options.buttons.buttons.push(btnnew);
                }
            }
            /// btns create
            if (this.buttons != null) {
                var btnsCreated = [];
                this.buttons.forEach(function (item) {
                    var _a, _b, _c, _d;
                    var newbtn = {
                        text: item.text,
                        className: (_a = item === null || item === void 0 ? void 0 : item.className) !== null && _a !== void 0 ? _a : null,
                        titleAttr: (_b = item === null || item === void 0 ? void 0 : item.titleAttr) !== null && _b !== void 0 ? _b : null,
                        name: (_c = item === null || item === void 0 ? void 0 : item.name) !== null && _c !== void 0 ? _c : null,
                        enabled: (_d = item === null || item === void 0 ? void 0 : item.enabled) !== null && _d !== void 0 ? _d : null,
                        action: function (e, dt, node, config) {
                            var data = dt.rows().data().toArray();
                            $_this.$emit(item.action, $_this.TableIds, data, dt, node);
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
            //colum Accion
            this.Accion = this.colums.find(function (value, index) { return value.Type == "Accion"; });
            if (this.Accion != null) {
                window["Editbtn" + this.el] = this.Editbtn;
                window["Deletebtn" + this.el] = this.Deletebtn;
            }
            this.SwitchEvent = this.colums.find(function (value, index) { return value.Type == "Switch"; });
            if (this.SwitchEvent != null) {
                window[this.el + "SwitchEvent"] = this.SwitchEventClick;
            }
            this.SwitchDataEvent = this.colums.find(function (value, index) { return value.Type == "SwitchData"; });
            if (this.SwitchDataEvent != null) {
                window[this.el + "SwitchDataEvent"] = this.SwitchDataEventClick;
            }
            this.InputEvent = this.colums.find(function (value, index) { return value.Type == "Input"; });
            if (InputEvent != null) {
                window[this.el + "OnChangeInputTable"] = this.OnChangeInputTable;
            }
            this.SelectEvent = this.colums.find(function (value, index) { return value.Type == "Select"; });
            if (this.SelectEvent != null) {
                window[this.el + "OnChangeSelectCbo"] = this.OnChangeSelectCbo;
            }
            this.SelectOnDataEvent = this.colums.find(function (value, index) { return value.Type == "SelectOnData"; });
            if (this.SelectOnDataEvent != null) {
                window[this.el + "SelectOnDataCbo"] = this.SelectOnDataCbo;
            }
            this.OnClickLinkEventExists = this.colums.find(function (value, index) { return value.Type == "LinkEvent"; });
            if (this.OnClickLinkEventExists != null) {
                window[this.el + "OnClickLinkEvent"] = this.OnClickLinkEvent;
            }
            this.BtnGridOnclickExists = this.colums.find(function (value, index) { return value.Type == "Button"; });
            if (this.BtnGridOnclickExists != null) {
                window[this.el + "BtnGridOnclick"] = this.BtnGridOnclick;
            }
            this.grid = $(this.RefGridTable).DataTable(this.options);
            function SelectedIndex(selected, items) {
                items.forEach(function (item) {
                    var _a;
                    var id = null;
                    eval("id=item.".concat((_a = $_this.Edit) === null || _a === void 0 ? void 0 : _a.Column, ";"));
                    var index = $.inArray(id, selected);
                    if (index == -1) {
                        selected.push(id);
                    }
                });
                return selected;
            }
            function UnSelectedIndex(selected, items) {
                items.forEach(function (item) {
                    var _a;
                    var id = null;
                    eval("id=item.".concat((_a = $_this.Edit) === null || _a === void 0 ? void 0 : _a.Column, ";"));
                    var index = $.inArray(id, selected);
                    if (index == -1) {
                    }
                    else {
                        selected.splice(index, 1);
                    }
                });
                return selected;
            }
            if (this.Edit != null) {
                this.grid
                    .on('select', function (e, dt, type, indexes) {
                    var _a;
                    var rows = $_this.grid.rows(indexes).data().toArray();
                    $_this.TableIds = SelectedIndex($_this.TableIds, rows);
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
                    window.location.href = $_this.urledit + id;
                });
            }
            return this.grid;
        };
        //BtnGridOnclick
        NvGridTable.prototype.BtnGridOnclick = function ($this, BtnStringEvent) {
            var rowid = parseInt($this.data("rowid"));
            var valuerow = parseInt($this.data("valuerow"));
            var datarow = this.grid.row(rowid).data();
            this.$emit(BtnStringEvent, valuerow, datarow);
        };
        //OnClickLinkEvent
        NvGridTable.prototype.OnClickLinkEvent = function ($this, LinkStringEvent) {
            var rowid = parseInt($this.data("rowid"));
            var datarow = this.grid.row(rowid).data();
            this.$emit(LinkStringEvent, datarow);
        };
        //SelectOnDataEvent
        NvGridTable.prototype.SelectOnDataCbo = function ($this) {
            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
        };
        ///SelectEvent
        NvGridTable.prototype.OnChangeSelectCbo = function ($this) {
            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
        };
        //InputEvent
        NvGridTable.prototype.OnChangeInputTable = function ($this) {
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
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
        };
        //SwitchDataEvent
        NvGridTable.prototype.SwitchDataEventClick = function ($this) {
            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var isChecked = $this.is(":checked");
            var NewValue = null;
            if (isChecked) {
                NewValue = $this.val();
            }
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
        };
        //SwitchEvent
        NvGridTable.prototype.SwitchEventClick = function ($this) {
            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.is(":checked");
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
        };
        //Accion
        NvGridTable.prototype.Editbtn = function (id) {
            window.location.href = this.urledit + id;
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
                        axios.delete($_this.urldelete, {
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
        NvGridTable.prototype.mounted = function () {
            this.security = App.isNullOrEmpty(this.security) ? { Consultar: false, Actualizar: false, Eliminar: false, Insertar: false } : this.security;
            this.defaults = App.isNullOrEmpty(this.defaults) ? new App.GridTableOptions() : this.defaults;
            this.GridResult = this.GridTable();
        };
        __decorate([
            Ref(),
            __metadata("design:type", HTMLTableElement)
        ], NvGridTable.prototype, "RefGridTable", void 0);
        __decorate([
            PropSync("dt", { default: null }),
            __metadata("design:type", Function)
        ], NvGridTable.prototype, "GridResult", void 0);
        __decorate([
            Prop({ type: Array, default: [] }),
            __metadata("design:type", Array)
        ], NvGridTable.prototype, "colums", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvGridTable.prototype, "urldata", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvGridTable.prototype, "urledit", void 0);
        __decorate([
            Prop({ type: String, default: null }),
            __metadata("design:type", String)
        ], NvGridTable.prototype, "urldelete", void 0);
        __decorate([
            Prop({ type: Object, default: { Consultar: false, Actualizar: false, Eliminar: false, Insertar: false } }),
            __metadata("design:type", Object)
        ], NvGridTable.prototype, "security", void 0);
        __decorate([
            Prop({ type: Array, default: null }),
            __metadata("design:type", Array)
        ], NvGridTable.prototype, "buttons", void 0);
        __decorate([
            Prop({ type: App.GridTableOptions, default: new App.GridTableOptions() }),
            __metadata("design:type", App.GridTableOptions)
        ], NvGridTable.prototype, "defaults", void 0);
        __decorate([
            VModel({ type: Array, default: [] }),
            __metadata("design:type", Array)
        ], NvGridTable.prototype, "dataGrid", void 0);
        __decorate([
            PropSync("selected", { type: Array, default: [] }),
            __metadata("design:type", Array)
        ], NvGridTable.prototype, "TablesSelecteds", void 0);
        __decorate([
            Watch('TableIds', { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Array, Array]),
            __metadata("design:returntype", void 0)
        ], NvGridTable.prototype, "OnChangeGridSelecteds", null);
        NvGridTable = __decorate([
            Component({
                template: "<table  ref=\"RefGridTable\"  v-bind=\"$attrs\"></table>",
                inheritAttrs: false,
            })
        ], NvGridTable);
        return NvGridTable;
    }(Vue));
    Vue.component("NvGridTable", NvGridTable);
})(App || (App = {}));
//# sourceMappingURL=NvGridTable.js.map