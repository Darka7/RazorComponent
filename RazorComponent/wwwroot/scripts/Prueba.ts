
namespace App {
    
    
    const { Component }=VuePropertyDecorator

   
    @Component
    class PruebaTest extends Vue  {
        
        
        columnas: JQDataTableColum[] = [
            { Column: "id", Label: "", Type: "Index" },
            { Column: "nombre", Label: "Nombre", Type: "Input",InputType:"text",Class:"form-control" },
            { Column: "id", Label: "edit", Type: "Accion" },
            { Column: "Estado", Label: "Estado", Type: "IsActive" },
            { Column: "Estado", Label: "Estado", Type: "Switch" },
        ];

        public JqGrid: DataTables.Api<any> = null;
        public JqGrid2: DataTables.Api<any> = null;
        btns: JQDataTableButtons[] = [
            {
                text: "Prueba", action: "pruebamethodo", name: "holaaaaaa", titleAttr: "Holaa", className: "btnedit"
            }
        ];

      

        SelectedsTable: string[] = [];
        SelectedsTable2: string[] = [];
        dataGrid: any[] = [];
        dataGrid2: any[] = [];

        Nombre: string = "Hola Andrey";
        PruebaMethodo(ids: string[],data:any,jq:DataTables.Api<any>,none) {
           
            this.JqGrid.buttons().nodes().hide();
        }


        otraprueba(ids,data,dt,none) {
            alert("Tabla numero dos")
        }

    }

    

    new PruebaTest().$mount("#Appvue")



    interface PruebaEntity {
        id?: number;
        nombre?: string;
        Estado?: boolean;
        EmpresaMark?: boolean;
        IdEmpresa?: number;
    }


    
   
    export var PruebaMethodo: JQDataTableActionBtn<any[]> = function (ids,data,dt,node) {
        console.log(ids);
        console.log(data,'data');
       
    }

    $(document).ready(() => {

     

        var columnas: JQDataTableColum[]=[
        { Column: "id", Label: "", Type: "Index" },
        { Column: "nombre", Label: "Nombre", Type: "Text" },
        { Column: "id", Label: "edit", Type: "Accion" },
        { Column: "Estado", Label: "Estado", Type: "Text" },
        { Column: "Estado", Label: "Estado", Type: "Switch" },
        ];
    var btns: JQDataTableButtons[] = [
        {
            text: "Prueba", action: "App.PruebaMethodo",name:"holaaaaaa", titleAttr:"Holaa",className:"btnedit"
        }
    ];


      //  var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", {Actualizar:true,Eliminar:true}, btns );

    //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);


        
       


    });

  
    
}



