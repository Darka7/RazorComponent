


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

        namespace?: string;

        titleAttr?: string;
    }

    export class GridTableOptions {
        serverSide?: boolean=false ;
        rowId?: string=null;
        pageLength?: number =5;
        searching?: boolean=true ;
        order?: (string | number)[] = [1, 'asc'] ;
        ordering?: boolean = true;
        stateSave?: boolean = false;
        BtnDefaults?: ("colvis" | "excel" | "pdf")[] = ["colvis","excel","pdf"];
    }


    export interface JQDataTableClass {
        Type?: "Index" | "Text" | "DateTime" | "Date" | "IsActive" | "Bool" | "BoolCheck" | "Accion" | "Switch" | "SwitchData"  | "LinkEdit" | "LinkEvent" | "LinkUrl" | "HTML"| "JavaScript";
        Orderable?: boolean;
        ClassColum?: string;
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
        PropertyId1?: string;
        EventLink?: string;
        LinkUrl?: string;
        Html?: string;
        JavaScript?: string;
    }

    function CreateHeaderColumnsDef(ct: JQDataTableClass[], table: string): DataTables.ColumnDefsSettings[] {
        var colums: DataTables.ColumnDefsSettings[] = [];

        ct.forEach((val, index) => {

            if (val.Type == "Index") {
                var ob: DataTables.ColumnDefsSettings = {
                    targets: 0,
                    orderable: false,
                    className: `toggle-all${table} select-checkbox`,
                    

                };
                colums.push(ob);
            } else {
                var OrderColum = isNullOrEmpty(val?.Orderable) ? true : val.Orderable;
                var ob: DataTables.ColumnDefsSettings = {
                    targets: index,
                    orderable: OrderColum,

            };
                if (val?.ClassColum != null) ob.className = val.ClassColum;
                if (val?.Width != null) ob.width = val.WidthColum;
                colums.push(ob);
            }

            
        });
        
        return colums
    }
   
    function CreateRowsData(ct: JQDataTableClass[], security: SecurityPageEntity, Table:string) :DataTables.ColumnSettings[]{
        
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
                            orderable:false,
                            width: "5%",
                            className:"select-checkbox",
                            title: `<i ></i>`,
                            render: function (val, types, entity, meta) {

                                return "";
                            }
                        };
                        break;
                    case "Text":
                        addcolum = { data: col.Column, title: col.Label,className:col?.Class };
                        break;
                    case "DateTime":
                        addcolum = {
                            data: col.Column, title: col.Label,className:col?.Class, render: (val, types, entity, meta) => {
                                return !isNullOrEmpty(val)  ? dateFormat(new Date(val), formatDateTime) : "";
                            }
                        };
                        break;
                    case "Date":
                        addcolum = {
                            data: col.Column, title: col.Label,className:col?.Class, render: (val, types, entity, meta) => {

                                return !isNullOrEmpty(val) ? dateFormat(new Date(val), formatDate) : "";
                            }
                        };
                        break;
                    case "IsActive":


                        addcolum = {
                            data: col.Column, title: col.Label,className:col?.Class, render: (val, types, entity, meta) => {

                                return val == true ? Activo : Inactive;
                            }
                        };
                        break;
                    case "Bool":
                        addcolum = {
                            data: col.Column, title: col.Label,className:col?.Class, render: (val, types, entity, meta) => {

                                return val == true ? col.BoolTrue : col.BoolFalse;
                            }
                        };
                        break;

                    case "BoolCheck":
                        addcolum = {
                            data: col.Column, title: col.Label,className:col?.Class, render: (val, types, entity, meta) => {

                                return val == true ? "" : "";
                            }
                        };
                        break;
                    case "Accion":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "5%",className:col?.Class, render: (val, types, entity, meta) => {

                                var btnedit = security?.Actualizar ? `<button type="button" class="btn btn-outline-primary" onclick="Editbtn${Table}('${val}')">Editar</button>` : "";
                                var btnDelete = security?.Eliminar? `<button type="button" class="btn btn-outline-danger" onclick="Deletebtn${Table}('${val}')">Eliminar</button>`:"";

                                return btnedit + btnDelete;
                            }
                        };
                        break;

                        
                    case "Switch":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "10%", className: col?.Class, render: (val, types, entity, meta) => {
                                var ischeck = val == true ? 'checked' : '';
                                var rowid = meta.row;
                                var colid = meta.col;

                                if (!isNullOrEmpty(col?.SwitchHideProperty)) {
                                    var IsHidden = false;
                                    eval(`IsHidden=entity.${col.SwitchHideProperty};`);
                                    if (IsHidden) return "";
                                }

                                return `<input class="form-check-input ${Table}_Switch_${col.Column}" type="checkbox" data-columid="${colid}" data-rowid="${rowid}" onchange="${Table}SwitchEvent($(this))" ${ischeck}  ${col.Disabled ? "disabled" : ""} value="${val}">`;
                            }
                        };
                        break;

                    case "SwitchData":
                        addcolum = {
                            data: col.Column, title: col.Label, width: "10%", className: col?.Class, render: (val, types, entity, meta) => {
                               
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

                                return `<input class="form-check-input ${Table}_SwitchData_${col.Column}" value="${SetValue}" data-columid="${colid}" data-rowid="${rowid}"  type="checkbox"  onchange="${Table}SwitchDataEvent($(this))"  ${ischeck}  ${col.Disabled ? "disabled" : ""} >`;
                            }
                        };
                        break;

                    case "LinkEdit":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                                var id = null;
                                var text = val == null ? "..." : val;

                                eval(`id=entity.${col.PropertyId1};`);

                                if (id == null) return text;

                                return `<a onclick="Editbtn${Table}('${id}')" href="javascript: void(0)">${text}</a>`;
                            }
                        };
                        break;

                    case "LinkEvent":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                               
                                var text = val == null ? "..." : val;

                                return `<a onclick='${col.EventLink}(${JSON.stringify(entity)},this)' href="javascript: void(0)">${text}</a>`;
                            }
                        };
                        break;

                    case "LinkUrl":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {

                                var text = val == null ? "..." : val;

                                return `<a onclick='LinkUrlBtn${Table}('${col.LinkUrl}',${JSON.stringify(entity)})' href="javascript: void(0)">${text}</a>`;
                            }
                        };
                        break;

                    case "HTML":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
                                var result = "";

                                eval(`result= ${col.Html} ;`);
                                return result;
                            }
                        };
                        break;
                    case "JavaScript":
                        addcolum = {
                            data: col.Column, title: col.Label, render: (val, types, entity, meta) => {
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


    export function GridTable(el: string,
        colums: JQDataTableClass[],
        urldata: string=null,
        urlEdit: string = null,
        urlDelete: string = null,
        security: SecurityPageEntity = { Consultar: true, Actualizar: true, Eliminar: true, Insertar: true },
        Buttons: JQDataTableButtons[]=null,
        Defaults: GridTableOptions = new GridTableOptions(),
    ) {

      
        var TableIds: string[] = [];
        $(window).scrollTop(1)
        var options: DataTables.Settings;
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
            stateSave:Defaults.stateSave,
            ordering: Defaults.ordering,
            order: [Defaults.order],
            columnDefs: CreateHeaderColumnsDef(colums,el),
            columns: CreateRowsData(colums, security, el)
        
           
        };

        if (Defaults?.rowId != null) {

            options.rowId = (a) => {
                var result = "";

                eval(`result= '${el}_'+a.${Defaults.rowId}`)
                return result;
            };


        }

        if (lang=="ES") options.language = {
            url:''
        };

        var Edit = colums.find(function (value, index) { return value.Type == "Index"; });

        // btns Defaults
        options.buttons = {
            buttons: Defaults.BtnDefaults,
            dom: {
                button: {
                    className: "btn btn-outline-primary"
                }
            }
        };

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

            $("#" + el).on("click", ".toggle-all" + el, function () {
                $(this).closest("tr").toggleClass("selected");
                if ($(this).closest("tr").hasClass("selected")) {
                    grid.rows().select();
                }
                else {
                    grid.rows().deselect();
                }

            });

            if (security?.Insertar) {
                var btnnew: DataTables.ButtonSettings = {
                    text: "New",
                    action: function (e, dt, node, config) {
                        if (urlEdit != null) {
                            window.location.href = urlEdit;

                        }

                    }
                };

                options.buttons.buttons.push(btnnew);

            }

            if (security?.Actualizar) {
                var btnedit: DataTables.ButtonSettings = {
                    text: "Edit",
                    action: function (e, dt, node, config) {



                        if (TableIds.length == 1) {
                           
                            window.location.href = urlEdit + TableIds[0];


                        } else {
                            alert("Seleccione un registro")
                        }



                    }
                };

                options.buttons.buttons.push(btnedit);
            }


            if (security?.Eliminar) {
                var btnDelete: DataTables.ButtonSettings = {
                    text: "Delete",
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


                        } else {
                            alert("Seleccione un registro")
                        }



                    }
                };

                options.buttons.buttons.push(btnDelete);
            }


        } else {           
            if (security?.Insertar) {
                var btnnew: DataTables.ButtonSettings = {
                    text: "New",
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
            var btnsCreated: DataTables.ButtonSettings[] = [];
            Buttons.forEach( function( item)  {

                var newbtn :DataTables.ButtonSettings = {
                    text: item.text,
                    className: item.className,
                    action: function (e, dt, node, config) {
                        var data = dt.rows().data().toArray();
                        eval(`${item.action}(TableIds,data,dt,node);`);
                    }
                };
                
                btnsCreated.push(newbtn);
            });

            options.buttons.buttons.push(...btnsCreated);
        }

        //colum Accion
        var Accion = colums.find(function (value, index) { return value.Type == "Accion"; });

        if (Accion != null) {
            window["Editbtn" + el] = function (id) {
                window.location.href = urlEdit + TableIds[0];
            }

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
            }

        }
        var SwitchEvent = colums.find(function (value, index) { return value.Type == "Switch"; });

        if (SwitchEvent!=null) {
            window[el + "SwitchEvent"] = function ($this: JQuery<HTMLInputElement>) {
                
                var columid = $this.data("columid");
                var rowid = parseInt($this.data("rowid"));
                var NewValue=$this.is(":checked");
                grid.cell({ row: rowid, column: columid }).data(NewValue);

            }
        }


        var SwitchDataEvent = colums.find(function (value, index) { return value.Type == "SwitchData"; });

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
       
        

        var grid = $(`#${el}`).DataTable(options);


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


    

    
   



}