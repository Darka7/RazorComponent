namespace App.ViewComponent{

    const {
        useNvInput, NvAutoNumeric, useNvInputForm, useNvInputFormModel, NvForm,
        NvValidateData,nv
    }= ImportNvComponents


    const { useState , useEffect, createRef}= React
   export function FormInputComponent() {

       //const [FormInit,FormValid] = UseFormValidator("#FormInputModule");
       const Formulario = createRef<NvFormValidator>();

        const [Num, SetNum,ModelNum,ResetNum] = useNvInput(0);

        const [Model, SetModel, BindModel, ModelNames, ResetModel] = useNvInputFormModel<Persona>({
            id: null ,
            edad:null,
            Nombre:null,
            TipoPersona: {descripcion:null}

        });

       function Guardar() {
           if (Formulario.current.Validate()) {
               console.log(Model);
           } else {
               MensajeriaApp.Mostrar("Por favor validar los campos!", 1);
           }
       }

     
        
        return (<>
            <NvValidateData id="FormInputModule" ref={Formulario} >
                <div className="nv-validar">
                    <label  className="form-label">id {Model.id }</label>
                    <input {...BindModel(ModelNames.id)} type="number" className="form-control" required   />  
                   
                </div>
                <br />
                <div className="nv-validar">
                    <label  className="form-label">Nombre {Model.Nombre}</label>
                    <input  {...BindModel(ModelNames.Nombre)} type="text"  className="form-control" required  /> 
                </div>
                <br />
                <div className="nv-validar">
                    <label className="form-label">Tipo Persona {Model.TipoPersona.descripcion}</label>
                    <input  {...BindModel("TipoPersona.descripcion")} type="text"  className="form-control" required />  
                </div>

                
          
                
                <button type="button" className="btn btn-primary" onClick={() => { ResetModel(); Formulario.current.Reset(); }} > cambiar numero</button>
                {" "}
                <button type="button" name="submit" className="btn btn-primary" onClick={() => Guardar() } > Guardar</button>
            </NvValidateData>
        </>)

    }


   
    

    AppRender.Default = FormInputComponent;

   
}