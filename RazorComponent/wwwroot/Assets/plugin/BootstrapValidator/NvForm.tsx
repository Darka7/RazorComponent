namespace App.ImportNvComponents {

    type NvFormProps = {
       
        children?: React.ReactNode;
        id: string;
        className?: string;
        [x: string]: any;
    }
    const { forwardRef,useEffect,useImperativeHandle ,useState} = React;
    const {UseFormValidator } = ImportNvComponents;

    export var NvForm = forwardRef(({ children, ...atributes }: NvFormProps, ref: React.ForwardedRef<NvFormValidator>) => {
        const [Init,Validate,Reset] = UseFormValidator("#" + atributes.id);

        useEffect(() => {
            Init();

        }, []);

        useImperativeHandle(ref, () => ({
            Validate,Reset,Init
        }));


        return (<form {...atributes}>{children}</form>)
    });

    export var NvLayoutValidator = forwardRef(({ children, ...atributes }: NvFormProps, ref: React.ForwardedRef<NvFormValidator>) => {
        const [Init, Validate, Reset] = UseFormValidator("#" + atributes.id);

        useEffect(() => {
            Init();

        }, []);

        useImperativeHandle(ref, () => ({
            Validate, Reset, Init
        }));


        return (<div {...atributes}>{children}</div>)
    });

  
    

}