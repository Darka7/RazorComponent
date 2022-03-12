namespace App.ImportNvComponents {


    type NvModalRProps = {
        
        id?: string;
        OnClose: ()=>void;
        show: boolean;
        title?: string | React.ReactNode;
        size?: "md" | "lg" | "xl" | "xxl";
        Index?: string;
        children?: React.ReactNode;
    }


    export function NvModalR({ show, OnClose, children, id = "ModalNv_R", title = null, size = null, Index = null}: NvModalRProps) {
        if (!show) return null;
        

        const SizeModal = isNullOrEmpty(size) ? "" : 'nvmodalr-' + size;
        const IndexStyle = Index != null ? { zIndex: Index } : {};

        return (<>
            <div className="nvmodalr-backdrop" style={IndexStyle } >
                <div className={"nvmodalr show " + SizeModal} tabIndex={-1} id={id} style={IndexStyle}>
                    <div className="offcanvas-header nvmodalr-header">
                    <h4 > { title }  </h4>
                        <button type="button" className="btn-close" aria-label="Close" onClick={ OnClose}></button>
                    </div>
                        <div className="offcanvas-body">
                                {children }
                         </div>
                </div>
            </div >

        </>)
    }


}