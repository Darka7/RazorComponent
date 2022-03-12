namespace App {

    const {
        useNvInputFormModel, useNvInput
    }= ImportNvComponents



    function App() {
      
        const [values, SetValues, Bind, FormNames] = useNvInputFormModel<Persona>({
            id: 1, edad: 0, Nombre: "ANDREY",
            TipoPersona: {
                descripcion: "Responsable", PielEntity: { color:"Blanco"} }

        });

        const [Email, SetImail, EmailModel] = useNvInput("Andrey@gmail.com")
        
        function HandleForm() {
            console.log(values);
        }

        function HandlerNombre(evt) {
            console.log(evt);
        }
        
        return (<>
            { values.id } <br/>
            <input type="number" className="form-control"   {...Bind(FormNames.id)} /> <br />
            {values.Nombre} <br />
            <input type="text" className="form-control" onBlur={HandlerNombre } {...Bind(FormNames.Nombre)}  /> <br />
            {values.edad} <br />
            <input type="number" className="form-control"  {...Bind(FormNames.edad)} /> <br />

            {values.TipoPersona.descripcion} <br />
            <input type="text" className="form-control" {...Bind("TipoPersona.descripcion")} /> <br />

            {values.TipoPersona.PielEntity.color} <br />
            <input type="text" className="form-control"  {...Bind("TipoPersona.PielEntity.color")} /> <br />

            {Email} <br />
            <input type="text" className="form-control"  {...EmailModel} /> <br />
            
            <button type="button" className="btn btn-primary" onClick={ HandleForm } > Guardar</button>

        </>)

    }


    ReactDOM.render(<App />, document.getElementById("AppReact"));

}