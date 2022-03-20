namespace App.ViewComponent{

    const {
      useNvInputFormModel,
        NvLayoutValidator,NvInput,useModelState,NvInputModel,NvAutoNumeric
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

       const [InputModel, setInputModel, BindInputModel, ResetInputModel] = useNvInputFormModel<Persona>({
           id: 1,
           edad: null,
           Nombre: null,
           TipoPersona: { descripcion: null },
           estado: true
       });

       function Guardar() {
           console.log(InputModel);
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
                />  
                <br />
                <NvInputModel {...BindModel} value={Model.Nombre} name="Nombre" type="text"
                    Label={"Nombre " + Model.Nombre}  required /> 

                <br />
                <NvInputModel {...BindModel} value={Model.TipoPersona.descripcion} name="TipoPersona.descripcion" type="text"
                    Label={"Tipo Persona " + Model.TipoPersona.descripcion} required />  

                <br />
                <NvInputModel {...BindModel} checked={Model.estado} name="estado" id="estado" type="checkbox"
                    Label={"Estado "+Model.estado }
                      />



              
                
                <button type="button" className="btn btn-primary" onClick={() => { SetNum(1000) }} > cambiar numero</button>
                {" "}
                <button type="button" name="submit" className="btn btn-primary" onClick={() => Guardar() } > Guardar</button>
            </NvLayoutValidator>

            <div>
                {Num}<br />
                <NvAutoNumeric name="estado"   value={Num} onChange={(e,val)=> SetNum(e.currentTarget.value as any)} />
            </div>

            <div className="">

                <br />
                <label className="form-label" >id {InputModel.id}</label>
                <input type="number"  className="form-control" {...BindInputModel("id")} />
            </div>
            <div className="form-check">
                
                <label className="form-check-label" htmlFor="frmestado" >Estado { JSON.stringify( InputModel.estado)}</label>
                <input type="checkbox" id="frmestado" className="form-check-input" {...BindInputModel("estado","event",true)}  />
            </div>
        </>)

    }


   
    

    AppRender.Default = FormInputComponent;

   
}