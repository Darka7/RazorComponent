
namespace App {
    

    //const { Component }=VuePropertyDecorator

    //@Component
    //class PruebaTest extends Vue {

    //    val: Date =null;
    //    obj = {
    //       val:null as Date
    //    }
       
    //    handlerchange(e) {
            
    //        console.log(e);
    //    }

    //    ChangeValue() {
    //        this.val = new Date();
    //    }

    //}

    

    //new PruebaTest().$mount("#Appvue")




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
        //{ Column: "id", Label: "edit", Type: "Accion" },
        //{ Column: "Estado", Label: "Estado", Type: "Text" },
        //{ Column: "Estado", Label: "Estado", Type: "Switch" },
      //  { Column: "id", Label: "Input", Type: "InputNumberMask" },
    ];
    var btns: JQDataTableButtons[] = [
        {
            text: "Prueba", action: "App.PruebaMethodo",name:"holaaaaaa", titleAttr:"Holaa",className:"btnedit"
        }
    ];


        var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", {Actualizar:true,Eliminar:true}, btns );

    //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);


        
       


    });

  
    
}