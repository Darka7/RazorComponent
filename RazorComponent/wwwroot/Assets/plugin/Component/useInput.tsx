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

}