namespace App {

    var lang = "EN";



    const { Component,Ref,Watch,VModel,Prop,PropSync} =  VuePropertyDecorator;




    @Component({
        template: `<table  ref="RefGridTable"  v-bind="$attrs"></table>`,
        inheritAttrs: false,
    })
    class VGridTable extends Vue {
        @Ref()
        readonly RefGridTable!: HTMLTableElement;


        @PropSync("dt", { default:null})
        GridResult!: DataTables.Api<any>;

        @Prop({ type: Array, default: <JQDataTableButtons[]>[] })
        colums!: JQDataTableColum[];

        @Prop({ type: String, default: null })
        urldata!: string;

        @Prop({ type: String, default: null })
        urledit!: string;

        @Prop({ type: String, default: null })
        urldelete!: string;  


        @Prop({ type: Object, default: <SecurityPageEntity>{ Consultar: false, Actualizar: false, Eliminar: false, Insertar: false } })
        security!: SecurityPageEntity;  


        @Prop({ type: Array, default: <JQDataTableButtons>null })
        buttons!: JQDataTableButtons[];

        @Prop({ type: GridTableOptions, default: new GridTableOptions() })
        defaults!: GridTableOptions;

        @VModel({ type: Array, default: [] })
        dataGrid!: any[];

        public grid: DataTables.Api<any> = null;

        //Events
        public Edit: JQDataTableColum = null;

        public Accion: JQDataTableColum = null;

        public SwitchEvent: JQDataTableColum = null;

        public SwitchDataEvent: JQDataTableColum = null;

        public InputEvent: JQDataTableColum = null;

        public SelectEvent: JQDataTableColum = null;

        public SelectOnDataEvent: JQDataTableColum = null;

        public OnClickLinkEventExists: JQDataTableColum = null;

        public BtnGridOnclickExists: JQDataTableColum = null;

        //prop internals
        public options: DataTables.Settings = null;

        public el: string = null;

        public TableIds: string[] = []

        @PropSync("selected", { type: Array, default: <string[]>[] })
        TablesSelecteds!: string[];


        @Watch('TableIds', { immediate: true })
        OnChangeGridSelecteds(val:string[],oldval:string[]) {
            this.TablesSelecteds = val;

        }

       

        GridTable() {
            var $_this = this;
            this.el = this.RefGridTable.id;

            if (this.colums?.length == 1) {
                this.defaults.order = [[0, 'asc']];
            }
            $(window).scrollTop(1)
            
            this.options = {
                ajax: {
                    url: this.urldata,
                    type: "POST",
                    async: true,
                    
                    complete: function (result,tx) {
                        if (!isNullOrEmpty( result.responseJSON)) {
                            
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
                columnDefs: DT.CreateHeaderColumnsDef(this.colums, this.el),
                columns: DT.CreateRowsData(this.colums, this.security, this.el, this.urledit),
                


            };

            if (!isNullOrEmpty(this.defaults?.CreateRow)) {
                this.options.createdRow = this.defaults.CreateRow;
            }

            if (this.defaults?.rowId != null) {

                this.options.rowId = (a) => {
                    var result = "";

                    eval(`result= '${this.el}_'+a.${this.defaults.rowId}`)
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
            } else {
                this.options.language = {
                    buttons: {
                        colvis: "Columnas"
                    }
                }
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

                this.options.rowCallback =  function(row, data, index) {
                    var id = null;
                    eval(`id=data.${$_this.Edit.Column};`)
                    if ($.inArray(id, $_this.TableIds) !== -1) {
                        $_this.grid.row(index).select();
                    }
                }



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

                if (this.security?.Insertar) {
                    var btnnew: DataTables.ButtonSettings = {
                        text: "New",
                        action: function (e, dt, node, config) {
                            if ($_this.urledit != null) {
                                window.location.href = $_this.urledit;

                            }

                        }
                    };

                    this.options.buttons.buttons.push(btnnew);

                }

                if (this.security?.Actualizar) {
                    var btnedit: DataTables.ButtonSettings = {
                        text: "Edit",
                        className: "SelectionBtn_" + this.el,
                        action: function (e, dt, node, config) {



                            if ($_this.TableIds.length == 1) {

                                window.location.href = $_this.urledit + $_this.TableIds[0];


                            } else {
                                MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                            }



                        }
                    };

                    this.options.buttons.buttons.push(btnedit);
                }


                if (this.security?.Eliminar) {
                    var btnDelete: DataTables.ButtonSettings = {
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

                                            Loading.fire("Eliminando...");
                                            axios.delete<DBEntity>($_this.urldelete + JSON.stringify($_this.TableIds))
                                                .then(function ({ data }) {
                                                Loading.close();
                                                $_this.grid.ajax.reload();
                                                
                                                MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");
                                            }).catch(ex => MensajeriaApp.Mostrar(ex, -1));

                                        }
                                    }
                                });


                            } else {
                                MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                            }



                        }
                    };

                    this.options.buttons.buttons.push(btnDelete);
                }


            } else {
                if (this.security?.Insertar) {
                    var btnnew: DataTables.ButtonSettings = {
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
                var btnsCreated: DataTables.ButtonSettings[] = [];
                this.buttons.forEach(function (item) {

                    var newbtn: DataTables.ButtonSettings = {
                        text: item.text,
                        className: item?.className ?? null,
                        titleAttr: item?.titleAttr ?? null,
                        name: item?.name ?? null,
                        enabled: item?.enabled ?? null,
                        action: function (e, dt, node, config) {

                            var data = dt.rows().data().toArray();

                            $_this.$emit(item.action, $_this.TableIds, data, dt, node);

                           
                        }
                    };

                    btnsCreated.push(newbtn);
                });

                this.options.buttons.buttons.push(...btnsCreated);
            }

            /// btns  export
            if (!isNullOrEmpty(this.defaults.BtnDefaults)) {
                var colvis = this.defaults.BtnDefaults.find(r => r == "colvis");

                if (colvis != null) {
                    var NewBtnsDefaults = this.defaults.BtnDefaults.filter(r => r != "colvis");
                    var Colvis: DataTables.ButtonSettings = {
                        extend: "colvis",
                        columns: ":not(.noVis)",
                    };
                    this.options.buttons.buttons.push(Colvis);
                    this.options.buttons.buttons.push(...NewBtnsDefaults);
                } else {
                    this.options.buttons.buttons.push(...this.defaults.BtnDefaults);
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


            function SelectedIndex(selected: string[], items: any[]) {
                items.forEach(item => {
                    var id = null;
                    eval(`id=item.${$_this.Edit?.Column};`);

                    var index = $.inArray(id, selected);

                    if (index == -1) {
                        selected.push(id);
                    }
                });
                return selected;
            }

            function UnSelectedIndex(selected: string[], items: string[]) {
                items.forEach(item => {
                    var id = null;
                    eval(`id=item.${$_this.Edit?.Column};`);

                    var index = $.inArray(id, selected);

                    if (index == -1) {

                    } else {
                        selected.splice(index, 1);
                    }
                });
                return selected;
            }

            if (this.Edit != null) {


                this.grid
                    .on('select', function (e, dt, type, indexes) {

                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = SelectedIndex($_this.TableIds, rows);
                        
                        if ($_this.TableIds?.length > 0) {
                           
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(true);
                        } else {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(false);
                        }

                    })
                    .on('deselect', function (e, dt, type, indexes) {
                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = UnSelectedIndex($_this.TableIds, rows);

                        if ($_this.TableIds?.length > 0) {
                            
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(true);
                        } else {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(false);
                        }

                        $(".toggle-all" + $_this.el).closest("tr").removeClass("selected");

                    }).on('page.dt', function () {
                        $(".toggle-all" + $_this.el).closest("tr").removeClass("selected");

                    });


                if (this.TableIds?.length > 0) {
                    this.grid.buttons(".SelectionBtn_" + this.el).enable(true);
                } else {
                    this.grid.buttons(".SelectionBtn_" + this.el).enable(false);
                }

            }


            if (this.defaults?.RowIdEvent) {
                $(`#${this.el} tbody`).on("click", "tr", function () {
                    var $this = this as unknown as Node;
                    var id = $_this.grid.row($this).id();
                    id = id.split("_").shift();
                    window.location.href = $_this.urledit + id;

                });
            }


            return this.grid;

        }

        //BtnGridOnclick
        BtnGridOnclick($this: JQuery<HTMLInputElement>, BtnStringEvent) {


            var rowid = parseInt($this.data("rowid"));
            var valuerow = parseInt($this.data("valuerow"));
            var datarow = this.grid.row(rowid).data();
            this.$emit(BtnStringEvent, valuerow, datarow);
        }

        //OnClickLinkEvent
        OnClickLinkEvent($this: JQuery<HTMLInputElement>, LinkStringEvent) {


            var rowid = parseInt($this.data("rowid"));
            var datarow = this.grid.row(rowid).data();
            this.$emit(LinkStringEvent, datarow);
        }

        //SelectOnDataEvent
        SelectOnDataCbo($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");

            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();



            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

        }


        ///SelectEvent
        OnChangeSelectCbo($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");

            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();



            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

        }

        //InputEvent
        OnChangeInputTable($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");
            var typeinput = $this.data("typeinput");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = null;
            if (typeinput == "checkbox") {
                var isChecked = $this.is(":checked");
                NewValue = isChecked ? true : false;
            } else {
                NewValue = $this.val();
            }


            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

        }

        //SwitchDataEvent
        SwitchDataEventClick($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var isChecked = $this.is(":checked");
            var NewValue = null;
            if (isChecked) {

                NewValue = $this.val();
            }
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

        }

        //SwitchEvent
        SwitchEventClick($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.is(":checked");
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

        }

        //Accion
        Editbtn(id) {
            window.location.href = this.urledit + id;
        }

        Deletebtn(id) {
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

                        Loading.fire("Eliminando...");
                        axios.delete<DBEntity>($_this.urldelete, {
                            params: { id: id }
                        }).then(function ({ data }) {
                            Loading.close();
                            $_this.grid.ajax.reload();
                            MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");

                        }).catch(ex => MensajeriaApp.Mostrar(ex, -1));

                    }
                }
            });
        }


        mounted() {
            this.security = isNullOrEmpty(this.security) ? { Consultar: false, Actualizar: false, Eliminar: false, Insertar: false } : this.security;

            this.defaults = isNullOrEmpty(this.defaults) ? new GridTableOptions() : this.defaults;
            
            this.GridResult = this.GridTable();


        }

    }



    Vue.component("VGridTable", VGridTable);

}