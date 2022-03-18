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

    export var NvValidateData = forwardRef(({ children, ...atributes }: NvFormProps, ref: React.ForwardedRef<NvFormValidator>) => {
        const [Init, Validate, Reset] = UseFormValidator("#" + atributes.id);

        useEffect(() => {
            Init();

        }, []);

        useImperativeHandle(ref, () => ({
            Validate, Reset, Init
        }));


        return (<div {...atributes}>{children}</div>)
    });

    type ModelInputState<T> =  [T, React.Dispatch<React.SetStateAction<T>>]
    type InputModelProps<T> = {
        id?: string;
        name?: string;
        className?: string;

        Model?: ModelInputState<T> ;
        type?: React.HTMLInputTypeAttribute | undefined;
        onChange?: React.ChangeEvent<HTMLInputElement>;
        onBlur?: React.ChangeEvent<HTMLInputElement>;
    }
    export function NvInput<T>({ Model, type, ...props }: InputModelProps<T>) {
        const [InputVal ,SetInputVal] = Model;

        function HandlerEvent(evt: React.ChangeEvent<HTMLInputElement>, NameEvent) {
            if (props[NameEvent] != null) props[NameEvent](evt);
        }

        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>,NameEvent) {
            SetInputVal(evt.currentTarget.value as any);
            if (props[NameEvent] != null) props[NameEvent](evt);
        }

        return (<input {...props} type={type} value={InputVal as any} 
            onChange={(evt) => HandlerEventChange(evt, "onChange")}
            onBlur={(evt) => HandlerEvent(evt, "onBlur")}
        />)
    }

}