namespace App.ImportNvComponents {
    const {
        useState
    } = React;

    export function useNvInputFormModel<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
        (NameFor: any, option?: "event" | "value", IsCheck?: boolean ) => {
            name: string,
            value?: any|undefined,
            checked?: any | undefined;
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        },
        T,
        () => void
    ] {

        const [Form, setForm] = useState<T>(inititalvalue);
        
        var ObjectNames = {} as T;
        if (!Array.isArray(Form))
        Object.getOwnPropertyNames(Form).forEach(r => ObjectNames[r] = r);

        const reset = () => setForm(inititalvalue);

        const Bind: (NameFor: any, option?: "event" | "value") => {
            name: string,
            value?: any | undefined,
            checked?: any | undefined;
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        } = (NameFor: any, options = "event", IsCheck:boolean=false) => {

            var Dynamicprop = "prev.";
            Dynamicprop = NameFor.startsWith("[") ? "prev" : Dynamicprop;
            var DynamicpropForm = "Form.";
            DynamicpropForm = NameFor.startsWith("[") ? "Form" : DynamicpropForm;

            var Values = IsCheck ? { checked: eval(`${DynamicpropForm}${NameFor} || false`) } : { value: eval(`${DynamicpropForm}${NameFor} || ""`) };
           
                return {
                    name: NameFor,
                    ...Values,
                    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value: any = null) => {
                        const { type, name } = event.currentTarget;

                        var currentvalue = null;
                        if (options == "event") {
                            if (type == "checkbox") {
                                var { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;
                                currentvalue = checked;

                            } else {

                                currentvalue = event.currentTarget.value;
                                if (type == "number") {
                                    currentvalue = isNullOrEmpty(currentvalue) ? null : parseFloat(currentvalue);

                                } 

                            }
                        } else {
                            currentvalue = value;
                        }

                        setForm(prev => {

                            eval(`${Dynamicprop}${name} = currentvalue;`)

                            return ({ ...prev });
                        });

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
        if (!Array.isArray(Form))
        Object.getOwnPropertyNames(Form).forEach(r => ObjectNames[r] = r);

        const reset = () => setForm(inititalvalue);

        const Bind: (option?: "event" | "value") => {
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        }= (options ="event") => {

            return {
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value: any = null) => {
                    const { type, name } = event.currentTarget;

                    var Dynamicprop = "prev.";
                    Dynamicprop = name.startsWith("[") ? "prev" : Dynamicprop;
                    var currentvalue = null;
                    if (options == "event") {
                        if (type == "checkbox") {
                            var { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;
                            currentvalue = checked;

                        } else {
                            currentvalue = event.currentTarget.value;
                            if (type == "number") {
                                currentvalue = isNullOrEmpty(currentvalue) ? null : parseFloat(currentvalue);

                            } 
                        }
                    } else {
                        currentvalue = value;
                    }

                    setForm(prev => {

                        eval(`${Dynamicprop}${name} = currentvalue;`)

                        return ({ ...prev });
                    });
                  
                }
            };
        }

        return [Form, setForm, Bind, ObjectNames, reset];

    }

    export function useNvInput<T>(inititalvalue: T): [
        T,
        React.Dispatch <React.SetStateAction<T>>,
        (IsCheck?: boolean,option?: "event" | "value") => {
            value?:any,
            checked?: any,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        },
        () => void
    ]{

        const [valueInput, setValue] = useState<T>(inititalvalue);

        const reset = () => setValue(inititalvalue);


        const Model: (IsCheck?: boolean,option?: "event" | "value") => {
            value?: any,
            checked?: any,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, value?: any) => void
        } = (IsCheck=false,option="event")=>{
            var Values = IsCheck ? { checked: valueInput  || false } : { value: valueInput  || "" as any  };
            return  {
                ...Values,
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,val=null) => {
                    const { type } = event.currentTarget;
                    if (option == "event") {
                        if (type == "checkbox") {
                            const { checked } = (event as React.ChangeEvent<HTMLInputElement>).currentTarget;

                            setValue(checked as any);
                        } else {
                            var  getvalue:any  = event.currentTarget.value;
                            if (type == "number") {
                                getvalue = isNullOrEmpty(getvalue) ? null : parseFloat(getvalue);

                            } 
                            setValue(getvalue as any);
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
        Label?: React.ReactNode | string | undefined;
        classContainer?:string
    }

    export function NvInput<T>({ Model, Label="",classContainer="", className =null, onChange=null,onBlur=null,value=null, ...props }: InputModelProps<T>) {
        const [InputVal, SetInputVal] = Model;

        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>) {
            var currentValue = null;
            if (props.type == "checkbox") {
                const { checked } = evt.currentTarget;
                currentValue = checked;
               
            } else {
                 currentValue = evt.currentTarget.value;
                if (props.type == "number") {
                    currentValue = isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                  
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
                    currentValue = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);

                    } 

                }

                onBlur(evt,currentValue);
            }
          
        }

        const { id="" } = props;
        if (props.type == "checkbox") {
            var css = className != null ? className :"form-check-input";
            return (<div className={"nv-validar form-check" + classContainer}>
                <label className="form-check-label" htmlFor={id}>{Label}</label>
                <input {...props} checked={InputVal as any || false}
                    onChange={HandlerEventChange}
                    onBlur={HandlerEventBlur}
                    className={css}
            /> </div>)
        } else {
            var css = className != null ? className : "form-control";
            return (<div className={"nv-validar " + classContainer}>
                <label className="form-label" htmlFor={id} >{Label}</label>
                <input {...props} value={InputVal as any || ""}
                    onChange={HandlerEventChange}
                    onBlur={HandlerEventBlur}
                    className={css}
                />
            </div>
            )
        }
    }

    export function NvInputModel<T>({ Model, Label = "", classContainer = "", className =null,key=null, onChange = null,onBlur=null, value = null,checked=null, ...props }: InputModelProps<T>) {
        const [InputVal, SetInputVal] = Model;
       
        var Dynamicprop = "prev.";
        if (key != null) Dynamicprop = `prev[${key}].`;
        Dynamicprop = props.name.startsWith("[") ? "prev" : Dynamicprop;

            

        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>) {
            var currentValue = null;
            if (props.type == "checkbox") {
                const { checked } = evt.currentTarget;
                currentValue = checked;
               
            } else {
                currentValue= evt.currentTarget.value;
                if (props.type == "number") {
                    currentValue = isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);
                }


            }

            SetInputVal(prev => {
                
                eval(`${Dynamicprop}${props.name} = currentValue;`)
                    
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
                    currentValue = evt.currentTarget.value;
                    if (props.type == "number") {
                        currentValue = isNullOrEmpty(currentValue) ? null : parseFloat(currentValue);

                    } 

                }

                onBlur(evt, currentValue);
            }

        }
        const { id = "" } = props;
        if (props.type == "checkbox") {
            var css = className != null ? className : "form-check-input";
            return (
                <div className={"nv-validar form-check" + classContainer}>
                    <label className="form-check-label" htmlFor={id}>{Label}</label>
                    <input {...props} checked={checked as any || false}
                        onChange={HandlerEventChange}
                        onBlur={HandlerEventBlur}
                        className={css}
                    /> </div>)
        } else {
            var css = className != null ? className : "form-control";
            return (<div className={"nv-validar " + classContainer}>
                <label className="form-label" htmlFor={id} >{Label}</label>
                <input {...props} value={value as any || ""}
                    onChange={HandlerEventChange}
                    onBlur={HandlerEventBlur}
                    className={css}
                />
            </div>)
        }

    }
    
    

}