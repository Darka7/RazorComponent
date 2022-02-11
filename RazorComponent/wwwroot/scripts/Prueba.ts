
namespace App {
    

    const {Component,VModel,Emit,Ref,Watch,Prop } = VuePropertyDecorator;

    @Component({
        template: ` <input ref="InputDate"  type="text"    v-bind="$attrs" />  `,
        name: 'Bootstrap-Datepicker',
        inheritAttrs:false
    })

    class BootstrapDatepicker extends Vue {
        @VModel({ type: Date, default: new Date() })
        InpuVal!: Date;

        @Ref()
        readonly InputDate!: HTMLInputElement;

        @Prop({ type: String, default: "mm/dd/yyyy" })
        format!: string;


        ElementHTML: JQuery = null;

     

        @Watch('InpuVal', { immediate: true })
        OnChangeVmodel(val: number, oldval: number) {
            var old = this.ElementHTML?.datepicker("getDate") == null ? null :
                dateFormat(this.ElementHTML?.datepicker("getDate"), 'dd/MM/yyyy');

            var newval =val==null?null: dateFormat(val, "dd/MM/yyyy")
            if (newval != old) {
                this.ElementHTML?.datepicker("update", val)
                
            }
            
            
        }
        @Emit('change')
        OnChange() {
            var newdate = this.ElementHTML.datepicker("getDate");


            this.InpuVal = newdate;

            return this.InpuVal;
        }

        mounted() {
            var $this = this;
            this.ElementHTML = $(this.InputDate).datepicker({
                format: this.format,
                
            });
            //changeDate
            this.ElementHTML.datepicker("update", this.InpuVal);
            

            this.InputDate.onchange = function (e) {
                $this.InpuVal = $this.ElementHTML.datepicker("getDate");
                //trigger -null
                setTimeout($this.OnChange,200);
              
            }

        }




    }



    @Component({
        components: {
             BootstrapDatepicker
        }
    })
    class PruebaTest extends Vue {

        val: Date =null;

       
        handlerchange(e) {
            
            console.log(e);
        }

        ChangeValue() {
            this.val = new Date();
        }

    }

    

    new PruebaTest().$mount("#Appvue")




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


      //  var grid1 = GridTable("GridView", columnas, "api/Persona/List", "edit", "delete", null, btns );

    //    var grid2 = GridTable("GridView2", columnas, "api/Persona/List", "edit", "delete", null, btns);


        
        


    });

  
    
}