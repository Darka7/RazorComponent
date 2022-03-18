namespace App.ImportNvComponents {
    const {
        useState
    } = React;

    export function useNvInputFormModel<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
        (NameFor: any, option?: "event" | "value") => {
            name: string,
            value: any,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        },
        T,
        () => void
    ] {

        const [Form, setForm] = useState<T>(inititalvalue);

        var ObjectNames = {} as T;
        Object.getOwnPropertyNames(Form).forEach(r => ObjectNames[r] = r);

        const reset = () => setForm(inititalvalue);

        const Bind: (NameFor: any, option?: "event" | "value") => {
            name: string,
            value:any,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        } = (NameFor: any,options = "event") => {

            return {
                name: NameFor,  
                value: eval(`Form.${NameFor} || ""`),
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value: any = null) => {
                    const { type, name } = event.currentTarget;
                    
                    var currentvalue = null;
                    if (options == "event") {
                        if (type == "checkbox") {
                            var { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;
                            currentvalue = checked;

                        } else {
                            const { value } = event.currentTarget;
                            currentvalue = value
                        }
                    } else {
                        currentvalue = value;
                    }

                    eval(`Form.${name} = currentvalue;`)

                    setForm(prev => ({ ...Form }));
                   
                }
            };
        }

        return [Form, setForm, Bind, ObjectNames, reset];

    }
   

    export function useNvInputForm<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
        (option?: "event" | "value") => {
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        },
        T,
        () => void
    ] {

        const [Form, setForm] = useState<T>(inititalvalue);

        var ObjectNames = {} as T;
        Object.getOwnPropertyNames(Form).forEach(r => ObjectNames[r] = r);

        const reset = () => setForm(inititalvalue);

        const Bind: (option?: "event" | "value") => {
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        }= (options ="event") => {

            return {
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value: any = null) => {
                    const { type, name } = event.currentTarget;
                    var currentvalue = null;
                    if (options == "event") {
                        if (type == "checkbox") {
                            var { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;
                            currentvalue = checked;

                        } else {
                            const { value } = event.currentTarget;
                            currentvalue = value
                        }
                    } else {
                        currentvalue = value;
                    }

                    eval(`Form.${name} = currentvalue;`)

                    setForm(prev => ({ ...Form }));

                  
                }
            };
        }

        return [Form, setForm, Bind, ObjectNames, reset];

    }

    export function useNvInput<T>(inititalvalue: T): [
        T,
        React.Dispatch <React.SetStateAction<T>>,
        (option?: "event" | "value") => {
            value: T,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        },
        () => void
    ]{

        const [valueInput, setValue] = useState<T>(inititalvalue);

        const reset = () => setValue(inititalvalue);


        const Model: (option?: "event" | "value") => {
            value:T
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        } = (option="event")=>{

            return  {
                value:valueInput || "" as any,
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,val=null) => {
                    const { type } = event.currentTarget;
                    if (option == "event") {
                        if (type == "checkbox") {
                            const { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;

                            setValue(checked as any);
                        } else {
                            const { value } = event.currentTarget;

                            setValue(value as any);
                        }
                    } else {
                        setValue(val);
                    }

                }


            };
        };
        return [valueInput, setValue, Model, reset];

    }

    type ModelInputState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

    export function useModelState<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
        { Model: ModelInputState<T> },
        () => void
    ] {

        const Model = useState<T>(inititalvalue);
        const [valueInput, setValue] = Model;
        const reset = () => setValue(inititalvalue);
        return [valueInput, setValue, { Model }, reset];

    }
    

    interface InputModelProps<T> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange" | "onBlur">{
        Model?: ModelInputState<T>;
        onChange?: (evt: React.ChangeEvent<HTMLInputElement>, value: any) => void;
        onBlur?: (evt: React.ChangeEvent<HTMLInputElement>, value: any) => void;
    }

    export function NvInput<T>({ Model, onChange=null,onBlur=null,value=null, ...props }: InputModelProps<T>) {
        const [InputVal, SetInputVal] = Model;

        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>) {
            var currentValue = null;
            if (props.type == "checkbox") {
                const { checked } = evt.currentTarget;
                currentValue = checked;
               
            } else {
                var setval = evt.currentTarget.value;
                if (props.type == "number") {
                    currentValue = isNullOrEmpty(setval) ? null : parseFloat(setval);
                  
                } else {
                    currentValue = setval;
                }

            }
            SetInputVal(currentValue);
          
            if (onChange != null) onChange(evt, currentValue);
        }
        function HandlerEventBlur(evt: React.ChangeEvent<HTMLInputElement>) {
            if (onBlur!=null) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    const { checked } = evt.currentTarget;
                    currentValue = checked;

                } else {
                    var setval = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = isNullOrEmpty(setval) ? null : parseFloat(setval);

                    } else {
                        currentValue = setval;
                    }

                }

                onBlur(evt,currentValue);
            }
          
        }

        if (props.type=="checkbox") {
            return (<input {...props} checked={InputVal as any || false} 
                onChange={HandlerEventChange}
                onBlur={HandlerEventBlur}
            />)
        } else {
            return (<input {...props} value={InputVal as any || ""}
                onChange={HandlerEventChange}
                onBlur={HandlerEventBlur }
            />)
        }
    }

    export function NvInputModel<T>({ Model, onChange = null,onBlur=null, value = null, ...props }: InputModelProps<T>) {
        const [InputVal, SetInputVal] = Model;
        
        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>) {
            var currentValue = null;
            if (props.type == "checkbox") {
                const { checked } = evt.currentTarget;
                currentValue = checked;
               
            } else {
                var setval = evt.currentTarget.value;
                if (props.type == "number") {
                    var getvalue = isNullOrEmpty(setval) ? null : parseFloat(setval);
                    currentValue = getvalue
                } else {
                    currentValue = setval;
                }

            }

            SetInputVal(prev => {
                
                    eval(`prev.${props.name} = currentValue;`)
                    
                    return ({ ...prev });
                });
           
            if (onChange != null) onChange(evt, currentValue);
        }


        function HandlerEventBlur(evt: React.ChangeEvent<HTMLInputElement>) {
            if (onBlur != null) {
                var currentValue = null;
                if (props.type == "checkbox") {
                    const { checked } = evt.currentTarget;
                    currentValue = checked;

                } else {
                    var setval = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = isNullOrEmpty(setval) ? null : parseFloat(setval);

                    } else {
                        currentValue = setval;
                    }

                }

                onBlur(evt, currentValue);
            }

        }

        if (props.type == "checkbox") {
            return (<input {...props} checked={value as any || false}
                onChange={HandlerEventChange}
                onBlur={HandlerEventBlur}
            />)
        } else {
            return (<input {...props} value={value as any || ""}
                onChange={HandlerEventChange}
                onBlur={HandlerEventBlur}
            />)
        }

    }
    
    
}