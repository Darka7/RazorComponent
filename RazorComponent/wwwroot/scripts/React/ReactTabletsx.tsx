namespace App {
    const { NvGridTable } = ImportNvComponents;


    const { useState } = React;


    
    function App() {
        const [RefTable,setRefTable] = useState<DataTables.Api<any>>(null);

        const [data, SetData] = useState<any[]>([]);

        const [SelectedTable, SetSelectedTable] = useState<string[]>(null);

      

        var columnas: JQDataTableColum[] = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Input", InputType: "text", Class: "form-control" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "IsActive" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
        ];

        var btns: JQDataTableButtons[] = [
            {
                text: "Prueba", action: "execPrueba", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit float-end"
            },
            {
                text: "Prueba2", action: "exec", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
            }
        ];

        var metodo1: JQDataTableActionBtn<any[]> = function (ids, data, dt, node) {
            console.log("metodo1");
            console.log(data);
            console.log(ids);

        }

        var metodo2: JQDataTableActionBtn<any[]> = function (ids, data, dt, node) {
            console.log("metodo2");
            console.log(data);
            console.log(ids);

        }

        return (<>
            <div className="row">
                <div className="col">
            <NvGridTable id="gridTable1" className="table"
                colums={columnas} buttons={btns} security={{Actualizar:true, Consultar:true,Insertar:true,Eliminar:true} }
                urldata="api/Persona/List"
                urledit="api/Persona"
                urldelete="api/Persona/"
                dt={table => setRefTable(table)}
                onChange={(r: any) => SetData([...r])}
                        selected={s =>  SetSelectedTable([...s]) }
                        execPrueba={metodo1}
                        exec={metodo2}
                />
                </div>
            </div>
            <input type="text" onClick={ ()=>console.log(12313)}/>
            <br />
            { JSON.stringify(SelectedTable)}
            <br />
            {JSON.stringify(data)}

            </>)
    }


    ReactDOM.render(<div className="container"><App /></div>,document.getElementById("ReactApp"))
}