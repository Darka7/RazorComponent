namespace App.DT {

    var lang = "EN";

   export function CreateHeaderColumnsDef(ct: JQDataTableClass[], table: string): DataTables.ColumnDefsSettings[] {
        var colums: DataTables.ColumnDefsSettings[] = [];

        ct.forEach((val, index) => {

            if (val.Type == "Index") {
                var ob: DataTables.ColumnDefsSettings = {
                    targets: 0,
                    orderable: false,
                    className: `toggle-all${table} select-checkbox text-center noVis`,


                };
                colums.push(ob);
            } else {

                var OrderColum = isNullOrEmpty(val?.Orderable) ? true : val.Orderable;
                var Visible = isNullOrEmpty(val?.VisibleColum) ? true : val.VisibleColum;
                var ob: DataTables.ColumnDefsSettings = {
                    targets: index,
                    orderable: OrderColum,
                    visible: Visible,
                };
                if (val?.ClassColum != null) ob.className = val.ClassColum;
                if (val?.WidthColum != null) ob.width = val.WidthColum;
                colums.push(ob);
            }


        });

        return colums
    }

   export  function CreateRowsData(ct: JQDataTableClass[], security: SecurityPageEntity, Table: string,UrlEdit:string): DataTables.ColumnSettings[] {

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
                        }
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
                        data: col.Column, title: col.Label, width: "14%", className: "text-center", render: (val, types, entity, meta) => {

                            var btnedit = security?.Actualizar ? `<button type="button" class="btn btn-outline-primary ${col?.Class}" onclick="Editbtn${Table}('${val}')">Editar</button>` : "";
                            var btnDelete = security?.Eliminar ? `<button type="button" class="btn btn-outline-danger ${col?.Class}" onclick="Deletebtn${Table}('${val}')">Eliminar</button>` : "";

                            return btnedit +" "+ btnDelete;
                        }
                    };
                    break;

                case "Button":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "5%", className: "text-center", render: (val, types, entity, meta) => {

                            var rowid = meta.row;
                            
                         
                            return `<button type="button" class="btn ${col?.Class}" data-rowid="${rowid}" data-valuerow="${val}" onclick="${Table}BtnGridOnclick($(this),'${col.ButtonEvent}')">${col.ButtonText}</button>` ;
                        }
                    };
                    break;

                case "Switch":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "8%",className:"text-center", render: (val, types, entity, meta) => {
                            var ischeck = val == true ? 'checked' : '';
                            var rowid = meta.row;
                            var colid = meta.col;

                            if (!isNullOrEmpty(col?.SwitchHideProperty)) {
                                var IsHidden = false;
                                eval(`IsHidden=entity.${col.SwitchHideProperty};`);
                                if (IsHidden) return "";
                            }

                            return `<div class="form-check form-switch"><input class="form-check-input ${Table}_Switch_${col.Column} ${col?.Class}" type="checkbox" data-columid="${colid}" data-rowid="${rowid}" onchange="${Table}SwitchEvent($(this))" ${ischeck}  ${col.Disabled ? "disabled" : ""} value="${val}"></div>`;
                        }
                    };
                    break;

                case "SwitchData":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "8%", className: "text-center", render: (val, types, entity, meta) => {

                            var ischeck = !isNullOrEmpty(val) ? 'checked' : '';
                            var rowid = meta.row;
                            var colid = meta.col;
                            var SetValue = null;
                            eval(`SetValue=entity.${col.SwitchDataValue};`);

                            if (!isNullOrEmpty(col?.SwitchHideProperty)) {
                                var IsHidden = false;
                                eval(`IsHidden=entity.${col.SwitchHideProperty};`);
                                if (IsHidden) return "";
                            }

                            return `<div class="form-check form-switch"><input class="form-check-input ${Table}_SwitchData_${col.Column} ${col?.Class}" value="${SetValue}" data-columid="${colid}" data-rowid="${rowid}"  type="checkbox"  onchange="${Table}SwitchDataEvent($(this))"  ${ischeck}  ${col.Disabled ? "disabled" : ""} ></div>`;
                        }
                    };
                    break;


                case "Input":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "18%", render: (val, types, entity, meta) => {

                            var rowid = meta.row;
                            var colid = meta.col;
                            var checked = "";
                            if (col?.InputType == "checkbox") {
                                checked = val == true ? "" : "checked";
                            }

                            var disable = col?.Disabled ? "disabled" : "";
                            //var Inputid = "${Table}_${col.Column}_${rowid}_${colid}"
                            return `<input  ${checked} ${disable} type="${col.InputType}" onchange="${Table}OnChangeInputTable($(this))" data-typeinput="${col.InputType}" data-rowid="${rowid}" data-columid="${colid}" class="form-control ${Table}_Input_${col.Column} ${col?.Class}"  value="${val}" />`;
                        }
                    };
                    break;

                case "Select":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "18%", render: (val, types, entity, meta) => {

                            var rowid = meta.row;
                            var colid = meta.col;
                            var disable = col?.Disabled ? "disabled" : "";
                            var options = "";

                            col.SelectItems.forEach(function (data, index) {
                                var selected = val == data.Value ?"selected":"";
                                var dis = data?.Disabled ? "disabled" : "";
                                var item = `<option value="${data.Value}" ${selected} ${dis}>${data.Text}</option>`;
                                options = options + item; 
                            });

                            
                            return `<select data-rowid="${rowid}" data-columid="${colid}" class="form-select ${Table}_Select_${col.Column}  ${col?.Class}" ${disable} onchange="${Table}OnChangeSelectCbo($(this))" >${options}</select>`;
                        }
                    };
                    break;

                case "SelectOnData":
                    addcolum = {
                        data: col.Column, title: col.Label, width: "18%",render: (val, types, entity, meta) => {

                            var rowid = meta.row;
                            var colid = meta.col;
                            var disable = col?.Disabled ? "disabled" : "";
                            var options = "";
                            var ItemsOptions: SelectItemsEntity[] = [];

                            eval(`ItemsOptions=entity.${col.SelectOnDataProperty};`);

                            ItemsOptions.forEach(function (data, index) {
                                var selected = val == data.Value ? "selected" : "";
                                var dis = data?.Disabled ? "disabled" : "";
                                var item = `<option value="${data.Value}" ${selected} ${dis}>${data.Text}</option>`;
                                options = options + item;
                            });


                            return `<select data-rowid="${rowid}" data-columid="${colid}" class="form-select ${Table}_SelectOnData_${col.Column}  ${col?.Class}" ${disable} onchange="${Table}SelectOnDataCbo($(this))" >${options}</select>`;
                        }
                    };
                    break;

                case "LinkEdit":
                    addcolum = {
                        data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                            var id = null;
                            var text =isNullOrEmpty(val) ? "..." : val;

                            eval(`id=entity.${col.LinkPropertySend};`);

                            if (id == null) return text;

                            var url = UrlEdit + id;

                            return `<a  class="stretched-link ${col?.Class}" href="${url}">${text}</a>`;
                        }
                    };
                    break;

                case "LinkEvent":
                    addcolum = {
                        data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                            var text = isNullOrEmpty(val) ? "..." : val;
                            var rowid = meta.row;
                            return `<a class="stretched-link ${col?.Class}" data-rowid="${rowid}" onclick='${Table}OnClickLinkEvent($(this),'${col.LinkEvent}')' href="javascript: void(0)">${text}</a>`;
                        }
                    };
                    break;

                case "LinkUrl":
                    addcolum = {
                        data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                            var text = isNullOrEmpty(val) ? "..." : val;

                            var url = col.LinkUrl + $.param(entity);

                            return `<a class="stretched-link ${col?.Class}" href="${url}" >${text}</a>`;
                        }
                    };
                    break;

                case "HTML":
                    addcolum = {
                        data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                            var result = "";
                            var rowid = meta.row;
                            var columid = meta.col;

                            eval(`result= ${col.Html} ;`);
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
                            eval(`result= ${col.JavaScript}(val,entity,columid,rowid);`);

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

            
            if (!isNullOrEmpty(col?.Width)) addcolum.width = col.Width;

            colums.push(addcolum);
        });


        return colums;


    }


}


namespace App{
    var lang = "EN";

    export  type JQDataTableActionBtn<T> = (TableIds: string[],data:T, dt: DataTables.Api<any>, node: JQuery) => void;

    export interface JQDataTableButtons {
        
        action?: string;

        className?: string;

        text?: string;
       
        enabled?: boolean;

        extend?: string;

        name?: string;


        titleAttr?: string;
    }

    export class GridTableOptions {
        serverSide?: boolean=false ;
        rowId?: string = null;
        RowIdEvent: boolean=false;
        pageLength?: number =5;
        searching?: boolean=true ;
        order?: (string | number)[][] = [[1, 'asc']] ;
        ordering?: boolean = true;
        stateSave?: boolean = false;
        BtnDefaults?: ("colvis" | "excel" | "pdf")[] = [];
        CreateRow?: DataTables.FunctionCreateRow = null;
    }


    export interface JQDataTableClass {
        Type?: "Index" | "Text" | "DateTime" | "Date" | "IsActive" | "IsActiveText" | "Bool" | "Accion" | "Switch" | "SwitchData"
        | "LinkEdit" | "LinkEvent" | "LinkUrl" | "HTML" | "JavaScript" | "ExecuteFunctionJS" | "Input" | "Select" | "SelectOnData"
        |"Render" |"Button";
        Orderable?: boolean;
        ClassColum?: string;
        VisibleColum?: boolean;
        WidthColum?: string;
        Width?: string;
        Class?: string;
        Column?: string;
        Label?: string;



        BoolTrue?: string;
        BoolFalse?: string;
        Disabled?: boolean;
      
        SwitchHideProperty?: string;
        SwitchDataValue?: string;
        LinkPropertySend?: string;
        LinkEvent?: string;
        LinkUrl?: string;
        Html?: string;
        JavaScript?: string;

        //inputs
        InputType?: "text" | "number" | "checkbox" | "color" | "email" | "password" |"tel",
        //select
        SelectItems?: SelectItemsEntity[]
        SelectOnDataProperty?: string;

        render?: DataTables.FunctionColumnRender;
        //Button
        ButtonText?: string;
        ButtonEvent?:string;
    }

    


    export function GridTable<T>(el: string,
        Colums: JQDataTableClass[],
        UrlData: string=null,
        UrlEdit: string = null,
        UrlDelete: string = null,
        Security: SecurityPageEntity = { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true },
        Buttons: JQDataTableButtons[]=null,
        Defaults: GridTableOptions = new GridTableOptions(),
    ) {

        if (Colums?.length==1) {
            Defaults.order = [[0, 'asc']];
        }
      
        var TableIds: string[] = [];
        $(window).scrollTop(1)
        var options: DataTables.Settings;
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
            stateSave:Defaults.stateSave,
            ordering: Defaults.ordering,
            order: Defaults.order,
            columnDefs: DT.CreateHeaderColumnsDef(Colums,el),
            columns: DT.CreateRowsData(Colums, Security, el, UrlEdit)
        
           
        };

        if (!isNullOrEmpty(Defaults?.CreateRow)) {
            options.createdRow = Defaults.CreateRow;
        }

        if (Defaults?.rowId != null) {

            options.rowId = (a) => {
                var result = "";

                eval(`result= '${el}_'+a.${Defaults.rowId}`)
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
        } else {
            options.language = {
                buttons: {
                    colvis: "Columnas"
                }
            }
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
                eval(`id=data.${Edit.Column};`)
                if ($.inArray(id, TableIds) !== -1) {
                    grid.row(index).select();
                }
            }



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

            if (Security?.Insertar) {
                var btnnew: DataTables.ButtonSettings = {
                    text: "New",
                    action: function (e, dt, node, config) {
                        if (UrlEdit != null) {
                            window.location.href = UrlEdit;

                        }

                    }
                };

                options.buttons.buttons.push(btnnew);

            }

            if (Security?.Actualizar) {
                var btnedit: DataTables.ButtonSettings = {
                    text: "Edit",
                    className:"SelectionBtn_"+el,
                    action: function (e, dt, node, config) {



                        if (TableIds.length == 1) {
                           
                            window.location.href = UrlEdit + TableIds[0];


                        } else {
                            
                            MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                        }



                    }
                };

                options.buttons.buttons.push(btnedit);
            }


            if (Security?.Eliminar) {
                var btnDelete: DataTables.ButtonSettings = {
                    text: "Delete",
                    className: "SelectionBtn_" + el,
                    action: function (e, dt, node, config) {


                        if (TableIds.length > 0) {

                           

                            bootbox.confirm({
                                title:"Eliminar",
                                message: "Esta seguro de que desea Eliminar estos registro(os)!",
                                centerVertical: true,
                                buttons: {
                                    cancel: {
                                        className: "btn btn-outline-secondary",
                                        label:"Cancelar"
                                    },
                                    confirm: {
                                        className: "btn btn-outline-danger",
                                        label: "Eliminar"
                                    }
                                },
                                
                                callback: function (result) {
                                    if (result) {

                                        Loading.fire("Eliminando...");
                                        axios.delete<DBEntity>(UrlDelete+ JSON.stringify(TableIds))
                                            .then(function ({ data }) {
                                            Loading.close();
                                            grid.ajax.reload();
                                            MensajeriaApp.MostrarBD(data,null,"Se elimino con exito!");
                                            
                                        }).catch(ex => MensajeriaApp.Mostrar(ex, -1));

                                    }
                                }
                            });

                            


                        } else {
                            MensajeriaApp.Mostrar("Seleccione un registro!", 1);
                        }



                    }
                };

                options.buttons.buttons.push(btnDelete);
            }


        } else {           
            if (Security?.Insertar) {
                var btnnew: DataTables.ButtonSettings = {
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
            var btnsCreated: DataTables.ButtonSettings[] = [];
            Buttons.forEach( function( item)  {

                var newbtn :DataTables.ButtonSettings = {
                    text: item.text,
                    className: item?.className ??null,
                    titleAttr: item?.titleAttr ??null,
                    name: item?.name ?? null,
                    enabled: item?.enabled ?? null,
                    action: function (e, dt, node, config) {
                        var data = dt.rows().data().toArray();
                        eval(`${item.action}(TableIds,data,dt,node);`);
                    }
                };
                
                btnsCreated.push(newbtn);
            });

            options.buttons.buttons.push(...btnsCreated);
        }

        /// btns  export
        if (!isNullOrEmpty(Defaults.BtnDefaults)) {
            var colvis = Defaults.BtnDefaults.find(r => r == "colvis");

            if (colvis != null) {
                var NewBtnsDefaults = Defaults.BtnDefaults.filter(r => r != "colvis");
                var Colvis: DataTables.ButtonSettings = {
                    extend: "colvis",
                    columns: ":not(.noVis)", 
                };
                options.buttons.buttons.push(Colvis);
                options.buttons.buttons.push(...NewBtnsDefaults);
            } else {
                options.buttons.buttons.push(...Defaults.BtnDefaults);
            }
           
        }
       

        //colum Accion
        var Accion = Colums.find(function (value, index) { return value.Type == "Accion"; });

        if (Accion != null) {
            window["Editbtn" + el] = function (id) {
                window.location.href = UrlEdit + id;
            }

            window["Deletebtn" + el] = function (id:string| number) {

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
                            axios.delete<DBEntity>(UrlDelete, {
                                params: { id: id }
                            }).then(function ({ data }) {
                                Loading.close();
                                grid.ajax.reload();
                                
                                MensajeriaApp.MostrarBD(data, null, "Se elimino con exito!");
                            }).catch(ex => MensajeriaApp.Mostrar(ex, -1));

                        }
                    }
                });

            }

        }
        var SwitchEvent = Colums.find(function (value, index) { return value.Type == "Switch"; });

        if (SwitchEvent!=null) {
            window[el + "SwitchEvent"] = function ($this: JQuery<HTMLInputElement>) {
                
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var NewValue=$this.is(":checked");
                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }


        var SwitchDataEvent = Colums.find(function (value, index) { return value.Type == "SwitchData"; });

        if (SwitchDataEvent != null) {
            window[el + "SwitchDataEvent"] = function ($this: JQuery<HTMLInputElement>) {

                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var isChecked = $this.is(":checked");
                var NewValue = null;
                if (isChecked) {
                   
                    NewValue = $this.val();
                }
                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }
       
        var InputEvent = Colums.find(function (value, index) { return value.Type == "Input"; });

        if (InputEvent != null) {
            window[el + "OnChangeInputTable"] = function ($this: JQuery<HTMLInputElement>) {

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

               
                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }

        var SelectEvent = Colums.find(function (value, index) { return value.Type == "Select"; });

        if (SelectEvent != null) {
            window[el + "OnChangeSelectCbo"] = function ($this: JQuery<HTMLInputElement>) {

                var columid = $this.data("columid");
              
                var rowid = parseInt($this.data("rowid"));
                var NewValue = $this.val();
                


                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }

        var SelectOnDataEvent = Colums.find(function (value, index) { return value.Type == "SelectOnData"; });

        if (SelectOnDataEvent != null) {
            window[el + "SelectOnDataCbo"] = function ($this: JQuery<HTMLInputElement>) {

                var columid = $this.data("columid");

                var rowid = parseInt($this.data("rowid"));
                var NewValue = $this.val();



                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }


        var OnClickLinkEvent = Colums.find(function (value, index) { return value.Type == "LinkEvent"; });

        if (OnClickLinkEvent != null) {
            window[el + "OnClickLinkEvent"] = function ($this: JQuery<HTMLInputElement>,LinkStringEvent) {


                var rowid = parseInt($this.data("rowid"));
                var datarow = grid.row(rowid).data();

                eval(`${LinkStringEvent}(datarow);`)
            }
        }

        var BtnGridOnclick = Colums.find(function (value, index) { return value.Type == "Button"; });

        if (BtnGridOnclick != null) {
            window[el + "BtnGridOnclick"] = function ($this: JQuery<HTMLInputElement>, BtnStringEvent) {


                var rowid = parseInt($this.data("rowid"));
                var valuerow = parseInt($this.data("valuerow"));
                var datarow = grid.row(rowid).data();

                eval(`${BtnStringEvent}(valuerow,datarow);`)
            }
        }
        
        var grid = $(`#${el}`).DataTable<T>(options);


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


            grid
                .on('select', function (e, dt, type, indexes) {
                    
                    var rows = grid.rows(indexes).data().toArray();
                    TableIds = SelectedIndex(TableIds, rows);
                    
                    if (TableIds?.length > 0) {
                        grid.buttons(".SelectionBtn_" + el).enable(true);
                    } else {
                        grid.buttons(".SelectionBtn_" + el).enable(false);
                    }

                })
                .on('deselect', function (e, dt, type, indexes) {
                    var rows = grid.rows(indexes).data().toArray();
                    TableIds = UnSelectedIndex(TableIds, rows);
                    
                    if (TableIds?.length > 0) {
                        grid.buttons(".SelectionBtn_" + el).enable(true);
                    } else {
                        grid.buttons(".SelectionBtn_" + el).enable(false);
                    }

                    $(".toggle-all" + el).closest("tr").removeClass("selected");

                }).on('page.dt', function () {
                    $(".toggle-all" + el).closest("tr").removeClass("selected");
                    
                });

            if (TableIds?.length > 0) {
                grid.buttons(".SelectionBtn_" + el).enable(true);
            } else {
                grid.buttons(".SelectionBtn_" + el).enable(false);
            }

        }


        if (Defaults?.RowIdEvent) {
            $(`#${el} tbody`).on("click", "tr", function () {
                var $this = this as unknown as Node;
                var id = grid.row($this).id();
                id = id.split("_").shift();
                window.location.href = UrlEdit + id;

            });
        }
       
        
        return grid;

    }


    

    
   



}