
namespace App {

  //  declare var AppConfig: any;


  //  console.log(AppConfig);
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

    var columnas: JQDataTableClass[]= [
        { Column: "id", Label: "", Type: "Index" },
        { Column: "nombre", Label: "Nombre", Type: "Text"  },
        { Column: "id", Label: "edit", Type: "Accion" },
        { Column: "Estado", Label: "Estado", Type: "Text" },
        { Column: "Estado", Label: "Estado", Type: "Switch" },
        { Column: "EmpresaMark", Label: "Empresa", Type: "SwitchData", SwitchDataValue:"IdEmpresa" },
    ];
    var btns: JQDataTableButtons[] = [
        {
            text: "Prueba", action: "App.PruebaMethodo"
        }
    ];


        var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns );

    //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);


        
        


    });

  
    
}