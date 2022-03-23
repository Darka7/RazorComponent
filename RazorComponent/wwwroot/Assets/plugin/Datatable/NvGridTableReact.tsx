namespace App.ImportNvComponents {

    var lang = "EN";
    const { Component } = React;



    type NvGridTableProps = {
        id?: string;
        className?: string;
        dt?: (dt: DataTables.Api<any>)=>void;
        colums?: JQDataTableColum[];
        urldata?: string;
        urledit?: string;
        urldelete?: string; 
        security?: SecurityPageEntity;
        buttons?: JQDataTableButtons[];
        defaults?: GridTableOptions;
        [x: string]: JQDataTableActionBtn<any[]>|any;
        //eventos
        onChange?: <T>(val: T) => void;
        selected?: (val: string[]) => void;
    }
    type NvGridTableState = {
        
    }

    export class NvGridTable extends Component<NvGridTableProps, NvGridTableState> {
        RefTableGrid: HTMLTableElement = null;
        el: string = null;
        grid: DataTables.Api<any> = null;
        options: DataTables.Settings = null;
        TableIds: string[] = [];
        colums?: JQDataTableColum[];
        defaults?: GridTableOptions;
        

        static defaultProps: NvGridTableProps = {
            colums: [],
            security: { Consultar: false, Actualizar: false, Eliminar: false, Insertar: false },
            buttons: null,
            defaults: new GridTableOptions(),
            onChange: (r: any) => r,
            selected: (r) => r,
            className: "table table-hover table-striped",
            id:"TableGridGenericId",
            urldata: null,
            urledit: null,
            urldelete: null, 
        };

        constructor(pr) {
            super(pr);
            this.GridTable = this.GridTable.bind(this);
            this.CreateRowsData = this.CreateRowsData.bind(this);
            this.Editbtn = this.Editbtn.bind(this);
            this.Deletebtn = this.Deletebtn.bind(this);
            this.BtnGridOnclick = this.BtnGridOnclick.bind(this);
            this.SwitchEventClick = this.SwitchEventClick.bind(this);
            this.SwitchDataEventClick = this.SwitchDataEventClick.bind(this);
            this.OnChangeInputTable = this.OnChangeInputTable.bind(this);
            this.OnChangeSelectCbo = this.OnChangeSelectCbo.bind(this);
            this.SelectOnDataCbo = this.SelectOnDataCbo.bind(this);
            this.OnClickLinkEvent = this.OnClickLinkEvent.bind(this);
          
            //set variables
            this.colums = this.props.colums;
            this.defaults = this.props.defaults;
            
        }
     

        //OnClickLinkEvent
        OnClickLinkEvent(rowid, LinkStringEvent) {        
            var datarow = this.grid.row(rowid).data();
            if (this.props[LinkStringEvent]!=null)
            this.props[LinkStringEvent](datarow);
        }

        //SelectOnDataEvent
        SelectOnDataCbo($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");

            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();



            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

            this.props.onChange(this.grid.rows().data().toArray());
        }

        ///SelectEvent
        OnChangeSelectCbo($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");

            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.val();



            this.grid.cell({ row: rowid, column: columid }).data(NewValue);

            this.props.onChange(this.grid.rows().data().toArray());
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

            this.props.onChange(this.grid.rows().data().toArray());
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

            this.props.onChange(this.grid.rows().data().toArray());
        }

        //SwitchEvent
        SwitchEventClick($this: JQuery<HTMLInputElement>) {

            var columid = $this.data("columid");
            var rowid = parseInt($this.data("rowid"));
            var NewValue = $this.is(":checked");
            this.grid.cell({ row: rowid, column: columid }).data(NewValue);
           
            this.props.onChange(this.grid.rows().data().toArray())
        }

        //BtnGridOnclick
        BtnGridOnclick(val,rowid:number, BtnStringEvent) {
            var valuerow = val;
            var datarow = this.grid.row(rowid).data();

            if (this.props[BtnStringEvent]!=null)
            this.props[BtnStringEvent]( valuerow, datarow);
        }
        //Accion
        Editbtn(id) {
            window.location.href = this.props.urledit + id;
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
                        axios.delete<DBEntity>($_this.props.urldelete, {
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


        CreateRowsData(ct: JQDataTableColum[], security: SecurityPageEntity, Table: string, UrlEdit: string): DataTables.ColumnSettings[] {
            var $_this = this;
            var formatDateTime = "ES" == lang ? "dd/mm/yyyy h:MM TT" : "mm/dd/yyyy h:MM TT";
            var formatDate = "ES" == lang ? "dd/mm/yyyy" : "mm/dd/yyyy";
            var Activo = lang == "ES" ? "Activo" : "Active";
            var Inactive = lang == "ES" ? "Inactivo" : "Inactive";
            var colums: DataTables.ColumnSettings[] = [];
            ct.forEach((col, index) => {
                var addcolum: DataTables.ColumnSettings = null;

                switch (col.Type) {
                    case "Index":
                        addcolum = {
                            data: col.Column,
                            orderable: false,
                            width: "3%",
                            className: "select-checkbox",
                            title: `<i ></i>`,
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
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                                return !isNullOrEmpty(val) ? dateFormat(new Date(val), formatDateTime) : "";
                            }
                        };
                        break;
                    case "Date":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                return !isNullOrEmpty(val) ? dateFormat(new Date(val), formatDate) : "";
                            }
                        };
                        break;
                    case "IsActive":


                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                return val == true ?
                                    `<span class="badge bg-success">${Activo}</span>`
                                    : `<span class="badge bg-danger">${Inactive}</span>`;
                            },

                        };
                        break;
                    case "IsActiveText":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                return val == true ?
                                    `<span class="badge bg-success">${col.BoolTrue}</span>`
                                    : `<span class="badge bg-danger">${col.BoolFalse}</span>`;
                            }
                        };
                        break;

                    case "Bool":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                return val == true ? col.BoolTrue : col.BoolFalse;
                            }
                        };
                        break;

                    case "Accion":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "14%", className: "text-center",
                            createdCell: (td, val, entity, rowid, colid ) => {

                                ReactDOM.render((<>
                                    {security?.Actualizar &&
                                        <button type="button" className={"btn btn-outline-primary " + col?.Class}
                                           onClick={() => $_this.Editbtn(val)} >Editar</button>} { " " }
                                    {security?.Eliminar &&
                                        <button type="button" className={"btn btn-outline-danger " + col?.Class}
                                        onClick={()=>$_this.Deletebtn(val)}>Eliminar</button>}
                                </>), td as any );
                            }
                        };
                        break;

                    case "Button":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "5%", className: "text-center",
                            createdCell: (td, val, entity, rowid,  colid ) => {

                               return ReactDOM.render((<>
                                    <button type="button" className={"btn " + col?.Class} disabled={ col?.Disabled==true }
                                        data-rowid={rowid} data-valuerow={val} onClick={() => $_this.BtnGridOnclick(val, rowid, col.ButtonEvent)}>{col.ButtonText}</button>
                                </>),td as any)
                            }
                        };
                        break;

                    case "Switch":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "8%", className: "text-center",
                            render: (val, type, entity, meta)=>{
                                const { row: rowid, col: colid } = meta;
                                var ischeck = val == true ? true : false;

                              
                                
                                return ReactDOMServer.renderToString( (<>
                                    <div className="form-switch">
                                        <input className={"form-check-input " + Table + "_Switch_" + col.Column + " " + col?.Class}
                                            type="checkbox"  
                                            data-columid={colid} data-rowid={ rowid}
                                            defaultchange={Table +"SwitchEvent($(this))"}
                                            defaultChecked={ischeck} disabled={col?.Disabled == true} />
                                    </div>
                                </>) );
                            }
                        };
                        break;

                    case "SwitchData":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "8%", className: "text-center",
                            render: (val, type, entity, { row:rowid, col:colid }) => {

                                var ischeck = !isNullOrEmpty(val) ? true : false;
                             
                                var SetValue = null;
                                eval(`SetValue=entity.${col.SwitchDataValue};`);
                              
                                if (!isNullOrEmpty(col?.SwitchHideProperty)) {
                                    var IsHidden = false;
                                    eval(`IsHidden=entity.${col.SwitchHideProperty};`);
                                    if (IsHidden) return "";
                                }
                                if (IsHidden == false) return "";
                                
                                return ReactDOMServer.renderToString((<>
                                    <div className="form-switch">
                                        <input className={"form-check-input " + Table + "_SwitchData_" + col.Column + " " + col?.Class}
                                            data-columid={colid}
                                            data-rowid={rowid} type="checkbox"
                                            defaultchange={`${Table}SwitchDataEvent($(this))`} defaultChecked={ischeck}
                                            defaultValue={SetValue }
                                            disabled={col?.Disabled == true} />
                                    </div>
                                </>));
                                
                            }
                        };
                        break;


                    case "Input":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%",
                            render: (val, type, entity, { row:rowid, col:colid }) => {
                                
                                
                                if (col?.InputType == "checkbox") {
                                    var checked = false;
                                    checked = val == true ? true : false;
                                    return ReactDOMServer.renderToString((<>
                                        <input defaultChecked={checked} disabled={col?.Disabled == true}
                                            type={col.InputType}
                                            defaultchange={`${Table}OnChangeInputTable($(this))`}
                                            data-typeinput={col.InputType}
                                            data-rowid={rowid}
                                            data-columid={colid}
                                            className={"form-control " + Table + "_Input_" + col.Column + " " + col?.Class}
                                        />
                                    </>));
                                } else {
                                    return ReactDOMServer.renderToString((<>
                                        <input defaultValue={val} disabled={col?.Disabled == true}
                                            type={col.InputType}
                                            defaultchange={`${Table}OnChangeInputTable($(this))`}
                                            data-typeinput={col.InputType}
                                            data-rowid={rowid}
                                            data-columid={colid}
                                            className={"form-control " + Table + "_Input_" + col.Column + " " + col?.Class}
                                        />
                                    </>));
                                }


                            }
                        };
                        break;

                    case "Select":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%", 
                            render: (val, type, entity, { row:rowid, col:colid }) => {
                                var disable = col?.Disabled;
                                const ItemsSelect = col.SelectItems;
                               return ReactDOMServer.renderToString((<>
                                   <select defaultValue={val} disabled={disable == true} defaultchange={`${Table}OnChangeSelectCbo($(this))`}
                                       className={"form-select " + Table + "_Select_" + col.Column + " " + col?.Class}
                                       data-rowid={rowid} data-columid={ colid}>
                                        {ItemsSelect.map(r => (<option value={r.Value} disabled={r.Disabled==true } >{ r.Text }</option>)) }
                                    </select>
                                </>));
                            }
                        };
                        break;

                    case "SelectOnData":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "18%",
                            render: (val, type, entity, { row:rowid, col:colid }) => {
                                var disable = col?.Disabled ;
                                var ItemsSelect: SelectItemsEntity[] = [];
                                eval(`ItemsSelect=entity.${col.SelectOnDataProperty};`);

                              return  ReactDOMServer.renderToString((<>
                                  <select defaultValue={val} disabled={disable == true} defaultchange={`${Table}SelectOnDataCbo($(this))`}
                                      className={"form-select " + Table + "_SelectOnData_" + col.Column + " " + col?.Class}
                                      data-rowid={rowid} data-columid={colid }>
                                        {ItemsSelect.map(r => (<option value={r.Value} disabled={r.Disabled == true} >{r.Text}</option>))}
                                    </select>
                                </>));
                            }
                        };
                        break;

                    case "LinkEdit":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                                var id = null;
                                var text = isNullOrEmpty(val) ? "..." : val;

                                eval(`id=entity.${col.LinkPropertySend};`);

                                if (id == null) return text;

                                var url = UrlEdit + id;

                                return `<a  class="stretched-link ${col?.Class}" href="${url}">${text}</a>`;
                            }
                        };
                        break;

                    case "LinkEvent":
                        addcolum = {
                            data: col.Column, title: col.Label,
                            createdCell: (td, val, entity, rowid, colid ) => {
                                var text = isNullOrEmpty(val) ? "..." : val;

                                 ReactDOM.render((<>
                                    <a className={"stretched-link " + col?.Class} onClick={evt => $_this.OnClickLinkEvent(rowid, col.LinkEvent)} >{text}</a>
                                </>), td as any);

                            }
                        };
                        break;

                    case "LinkUrl":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                var text = isNullOrEmpty(val) ? "..." : val;

                                var url = col.LinkUrl + $.param(entity);
                                var disable = col?.Disabled ==true ? "disabled" : "";

                                return `<a class="stretched-link ${col?.Class}" href="${url}" ${disable} >${text}</a>`;
                            }
                        };
                        break;

                    case "HTML":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                                var result = "";
                                var rowid = meta.row;
                                var columid = meta.col;

                                eval(`result= "${col.Html}" ;`);
                                return result;
                            }
                        };
                        break;
                    case "JavaScript":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
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
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
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


                if (!isNullOrEmpty(col?.Width)) addcolum.width = col.Width;

                colums.push(addcolum);
            });


            return colums;


        }

        GridTable() {
            var $_this = this;

            this.el = this.RefTableGrid.id;


            if (this.colums?.length == 1) {
                this.defaults.order = [[0, 'asc']];
            }
            $(window).scrollTop(1)

            this.options = {
                ajax: {
                    url: this.props.urldata,
                    type: "POST",
                    async: true,
                    complete: function (result, tx) {
                        if (!isNullOrEmpty(result.responseJSON)) {
                            $_this.props.onChange(  result.responseJSON.data);
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
                columnDefs: DTRender.CreateHeaderColumnsDef(this.colums, this.el),
                columns: this.CreateRowsData(this.colums, this.props.security, this.el, this.props.urledit),
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

            var Edit = this.colums.find(function (value, index) { return value.Type == "Index"; });

            //btns por seguridad
            if (Edit != null) {

                this.options.rowCallback = function (row, data, index) {
                    var id = null;
                    eval(`id=data.${Edit.Column};`)
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

                if (this.props.security?.Insertar) {
                    var btnnew: DataTables.ButtonSettings = {
                        text: "New",
                        action: function (e, dt, node, config) {
                            if ($_this.props.urledit != null) {
                                window.location.href = $_this.props.urledit;

                            }

                        }
                    };

                    this.options.buttons.buttons.push(btnnew);

                }

                if (this.props.security?.Actualizar) {
                    var btnedit: DataTables.ButtonSettings = {
                        text: "Edit",
                        className: "SelectionBtn_" + this.el,
                        action: function (e, dt, node, config) {



                            if ($_this.TableIds.length == 1) {

                                window.location.href = $_this.props.urledit + $_this.TableIds[0];


                            } else {
                                MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                            }



                        }
                    };

                    this.options.buttons.buttons.push(btnedit);
                }


                if (this.props.security?.Eliminar) {
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
                                            axios.delete<DBEntity>($_this.props.urldelete + JSON.stringify($_this.TableIds))
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
                if (this.props.security?.Insertar) {
                    var btnnew: DataTables.ButtonSettings = {
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
                var btnsCreated: DataTables.ButtonSettings[] = [];
                this.props.buttons.forEach(function (item) {

                    var newbtn: DataTables.ButtonSettings = {
                        text: item.text,
                        className: item?.className ?? null,
                        titleAttr: item?.titleAttr ?? null,
                        name: item?.name ?? null,
                        enabled: item?.enabled ?? null,
                        action: function (e, dt, node, config) {

                            var data = dt.rows().data().toArray();

                            $_this.props[item.action]($_this.TableIds, data, dt, node);


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

            var SwitchEvent = this.colums.find(function (value, index) { return value.Type == "Switch"; });

            if (SwitchEvent != null) {
                window[this.el + "SwitchEvent"] = this.SwitchEventClick;
            }

           var SwitchDataEvent = this.colums.find(function (value, index) { return value.Type == "SwitchData"; });

            if (SwitchDataEvent != null) {
                window[this.el + "SwitchDataEvent"] = this.SwitchDataEventClick;

            }


            var InputEvent = this.colums.find(function (value, index) { return value.Type == "Input"; });

            if (InputEvent != null) {
                window[this.el + "OnChangeInputTable"] = this.OnChangeInputTable;
            }

            var SelectEvent = this.colums.find(function (value, index) { return value.Type == "Select"; });

            if (SelectEvent != null) {
                window[this.el + "OnChangeSelectCbo"] = this.OnChangeSelectCbo;
            }

            var SelectOnDataEvent = this.colums.find(function (value, index) { return value.Type == "SelectOnData"; });

            if (SelectOnDataEvent != null) {
                window[this.el + "SelectOnDataCbo"] = this.SelectOnDataCbo;

            }

            this.grid = $(this.RefTableGrid).DataTable(this.options);


            function SelectedIndex(selected: string[], items: any[]) {
                items.forEach(item => {
                    var id = null;
                    eval(`id=item.${Edit?.Column};`);

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
                    eval(`id=item.${Edit?.Column};`);

                    var index = $.inArray(id, selected);

                    if (index == -1) {

                    } else {
                        selected.splice(index, 1);
                    }
                });
                return selected;
            }

            if (Edit != null) {


                this.grid
                    .on('select', function (e, dt, type, indexes) {

                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = SelectedIndex($_this.TableIds, rows);

                        $_this.props.selected($_this.TableIds);

                        if ($_this.TableIds?.length > 0) {

                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(true);
                        } else {
                            $_this.grid.buttons(".SelectionBtn_" + $_this.el).enable(false);
                        }

                    })
                    .on('deselect', function (e, dt, type, indexes) {
                        var rows = $_this.grid.rows(indexes).data().toArray();
                        $_this.TableIds = UnSelectedIndex($_this.TableIds, rows);

                        $_this.props.selected($_this.TableIds);

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
                    window.location.href = $_this.props.urledit + id;

                });
            }


            return this.grid;

        }


        componentDidMount() {
            var GridResult = this.GridTable();

            this.props.dt(GridResult);
        }
        
        componentWillUnmount() {
            $(this.RefTableGrid).DataTable().destroy();
            $(this.RefTableGrid).empty();
        }

        render() {
            const { id, className } = this.props;
            return (<><div className="table-responsive">
                <table ref={r => this.RefTableGrid = r} id={id} className={className} ></table>
            </div> </>)
        }

    }

   

    

}