namespace App.ViewComponent {


    const {
        NvModal,NvModalR
    }= ImportNvComponents

    const { useState } = React;


    function App() {

        const [Modal, SetModal] = useState(false);

        const [ModalR, SetModalR] = useState(false);

        const title=(<><strong>Hola titulo strong</strong></>)

        

        const footer = (<button type="button" onClick={()=> SetModal(false) }> Custom footer button</button>)
        

        return (<>
            <button type="button" onClick={() => SetModal(true)}> Abrir modal</button>

            <button type="button" onClick={() => SetModalR(true)}> Abrir modal</button>

            <NvModal id="ModalPrueba" title={title} show={Modal} OnClose={() => SetModal(false)}  size="lg" >
                
                <h1> Hola mundo modal normal</h1>
                <br />
                <button type="button" onClick={() => SetModalR(true)}> Abrir modal</button>
            </NvModal>

            <NvModalR id="ModalPruebaR" title={title} show={ModalR} OnClose={() => SetModalR(false)} >
                <h1> Hola mundo modal R</h1>
                <br />
                <button type="button"  onClick={() => SetModal(true)}> Abrir modal</button>
            </NvModalR>
            
        </>)

    }


    ReactDOM.render(<App />,document.getElementById("AppReact"))

}