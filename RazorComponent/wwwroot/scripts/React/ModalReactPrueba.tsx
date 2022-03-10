namespace App {

    const { useState } = React;


    function App() {

        const [Modal, SetModal] = useState(false);

        const title=(<><strong>Hola titulo strong</strong></>)


        const footer = (<button type="button" onClick={()=> SetModal(false) }> Custom footer button</button>)
        

        return (<>
            <button type="button" onClick={()=>SetModal(true) }> Abrir modal</button>

            <NvModal id="ModalPrueba" title={title} show={Modal} OnClose={() => SetModal(false)}  size="xl" >
                
                    <h1> Hola mundo</h1>
            </NvModal>

        </>)

    }


    ReactDOM.render(<App />,document.getElementById("AppReact"))

}