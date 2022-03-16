namespace App {

    const {
         useNvInput, NvAutoNumeric,useNvInputForm,useNvInputFormModel
    }= ImportNvComponents


    const { useState }= React
    function App() {
      
        const [Num, SetNum,ModelNum,ResetNum] = useNvInput(0);

        const [Model, SetModel, BindModel, ModelNames, ResetModel] = useNvInputFormModel<Persona>({
            id: null ,
            edad:null,
            Nombre:null,
            TipoPersona: {descripcion:null}

        });

        function Guardar() {
            console.log(Model);
        }
        
        return (<>
            { Model.id} <br/>
            <input type="number"  {...BindModel(ModelNames.id)} />  <br />
            {Model.Nombre} <br />
            <input type="text"  {...BindModel(ModelNames.Nombre)} />  <br />

            {Model.TipoPersona.descripcion} <br />
            <input type="text"   {...BindModel("TipoPersona.descripcion")} />  <br />

            {Model.edad} <br />
            <NvAutoNumeric  {...BindModel(ModelNames.edad)} />  <br />

            <button type="button" className="btn btn-primary" onClick={ResetModel} > cambiar numero</button>

            <button type="button" className="btn btn-primary" onClick={() => Guardar() } > Guardar</button>

        </>)

    }


    ReactDOM.render(<App />, document.getElementById("AppReact"));

}