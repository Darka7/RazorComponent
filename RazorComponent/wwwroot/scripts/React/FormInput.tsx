namespace App.ViewComponent{

    const {
      useNvInputFormModel,
        NvLayoutValidator,NvInput,useModelState,NvInputModel
    }= ImportNvComponents


    const { useState , useEffect, createRef}= React
   export function FormInputComponent() {

       //const [FormInit,FormValid] = UseFormValidator("#FormInputModule");
       const Formulario = createRef<NvFormValidator>();

       const [Num, SetNum, BindNum] = useModelState<number>(null);

       const [Model, SetModel, BindModel, ResetModel] = useModelState<Persona>({
            id: 1 ,
            edad:null,
            Nombre:null,
            TipoPersona: {descripcion:null},
            estado:null 
       });

      
       function Guardar() {
           
           if (Formulario.current.Validate()) {
               console.log(Model);
               console.log({numero:Num});
           } else {
               MensajeriaApp.Mostrar("Por favor validar los campos!", 1);
           }
       }


       function HandlerBlurInput(evt:React.ChangeEvent<HTMLInputElement>,val) {
           console.log(val);
       }
        const List=[1,2,3,4,5,5,7]
        return (<>
            <NvLayoutValidator id="FormInputModule" ref={Formulario} >

                <NvInputModel {...BindModel} value={Model.id} type="number" name="id"
                    Label={"id " + Model.id}  required
                    onChange={HandlerBlurInput}
                    classContainer="col-6" 
                />  
                <br />
                <NvInputModel {...BindModel} value={Model.Nombre} name="Nombre" type="text"
                    Label={"Nombre " + Model.Nombre} required
                    classContainer="col-6" 
                /> 
                
                <br />                        
                <NvInputModel {...BindModel} value={Model.TipoPersona.descripcion} name="TipoPersona.descripcion" type="text"
                    Label={"Tipo Persona " + Model.TipoPersona.descripcion} required
                    classContainer="col-6" 
                />  

                <br />
                <NvInputModel {...BindModel} checked={Model.estado} name="estado" id="estado" type="checkbox"
                    Label={"Estado " + Model.estado} classContainer="col-6" 
                      />


                <br />
                <NvInput.Numeric Label={"Numeric " + Num} symbol="$ " {...BindNum} id="Num" name="Num" minvalue="0"
                    classContainer="col-8" 
                    decimal={2} required />
                <br />
                
                <button type="button" className="btn btn-primary" onClick="hello()" > cambiar numero</button>
                {" "}
                <button type="button" name="submit" className="btn btn-primary" onClick={() => Guardar() } > Guardar</button>
            </NvLayoutValidator>

           

            
        </>)

    }


   
    

    AppRender.Default =()=><FormInputComponent />;

   
}