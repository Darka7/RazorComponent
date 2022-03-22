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

    
}