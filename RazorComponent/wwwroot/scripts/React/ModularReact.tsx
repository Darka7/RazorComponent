namespace App.ViewComponent {
    

    
    const { FormInputComponent } = ViewComponent;

    type ModularReactProps = {
        Title?: string;
    }
    type ModularReactState = {}
    export class ModularReact extends React.Component <ModularReactProps,ModularReactState> {


        constructor(props) {
            super(props);
        }


        render() {
            const { Title } = this.props;
            return (<>
                <h1>{Title}</h1>
                <FormInputComponent  />
                
            </>);
        }
    }



 

    AppRender.Default=()=><ModularReact Title="Catalogo Persona" />




}