namespace App.ViewComponent{

    const {
      useNvInputFormModel,
        NvValidateData,NvInput,useModelState,NvInputModel
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
            TipoPersona: {descripcion:null}

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
        
        return (<>
            <NvValidateData id="FormInputModule" ref={Formulario} >
                <div className="nv-validar">
                    <label  className="form-label">id {Model.id }</label>
                    <NvInputModel {...BindModel} value={Model.id} name="id" type="number" className="form-control" required
                        onChange={ HandlerBlurInput }
                    />  
                   
                </div>
                <br />
                <div className="nv-validar">
                    <label  className="form-label">Nombre {Model.Nombre}</label>
                    <NvInputModel {...BindModel} value={Model.Nombre} name="Nombre" type="text"  className="form-control" required  /> 
                </div>
                <br />
                <div className="nv-validar">
                    <label className="form-label">Tipo Persona {Model.TipoPersona.descripcion}</label>
                    <NvInputModel {...BindModel} value={Model.TipoPersona.descripcion} name="TipoPersona.descripcion"  type="text"  className="form-control" required />  
                </div>

                <div className="nv-validar">
                    <label className="form-label">Numero {Num}</label>
                    <NvInput {...BindNum} name="NumeroPrueba" type="number" className="form-control"  onChange={HandlerBlurInput }  required/>
                </div>
          
                
                <button type="button" className="btn btn-primary" onClick={() => { ResetModel(); Formulario.current.Reset(); }} > cambiar numero</button>
                {" "}
                <button type="button" name="submit" className="btn btn-primary" onClick={() => Guardar() } > Guardar</button>
            </NvValidateData>
        </>)

    }


   
    

    AppRender.Default = FormInputComponent;

   
}