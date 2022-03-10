namespace App {

    type NvModalProps = {
        footer?: React.ReactNode;
        id?: string;
        OnClose: any;
        show: boolean;
        title?: string | React.ReactNode;
        size?: "md" | "lg" | "xl" | "sm";
        children?: React.ReactNode;
    }
    export function NvModal({ OnClose, show, children, id = "ModalNv_", title = null, size = null, footer = null }: NvModalProps) {
        
        if (!show) return null;

        var slotfooter = footer==null
            ? (<button type="button" className="btn btn-ouline-secondary" onClick={OnClose}>Cerrar</button>)
            : footer;


        const SizeModal = isNullOrEmpty(size) ? "" : 'modal-' + size;
        
        return (<>
            <div className="nvmodal" id={id} tabIndex={ -1 } >
                <div className={"modal-dialog modal-dialog-centered " + SizeModal}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >
                                {title}
                            </h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={OnClose}></button>
                        </div>
                        <div className="modal-body">{children} </div>
                        <div className="modal-footer">{slotfooter }</div>

                    </div>
                </div>
            </div>
        </>);
    }

    


    
}