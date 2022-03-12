namespace App.ImportNvComponents {
    const {
        useState
    } = React;


    export function useNvInputFormModel<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
        (NameInput: string | any) => { value: any, name: string, onChange: (event: React.ChangeEvent<HTMLInputElement>|any) => void },
        T,
        ()=>void
    ] {

        const [Form, setForm] = useState<T>(inititalvalue);
        var ObjectNames = {} as T;
        Object.getOwnPropertyNames(Form).forEach(r => ObjectNames[r] = r);
        const reset = () => setForm(inititalvalue);

        const Model = (NameInput: string) => {
        
            var PropNames = NameInput?.split(".");
            var len = PropNames?.length;
           
            return {
                value: len == 1 ? Form[NameInput]
                        : len == 2 ? Form[PropNames[0]][PropNames[1]]
                        : Form[PropNames[0]][PropNames[1]][PropNames[2]],
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {

                    const { type, name } = event.currentTarget;
                    var currentvalue = null;
                    if (type == "checkbox") {
                        var { checked } = event.currentTarget;
                        currentvalue = checked;
                       
                    } else {
                        const { value } = event.currentTarget;
                        currentvalue=value
                    }

                    switch (len) {
                        case 1:
                            setForm(inputs => ({ ...inputs, [name]: currentvalue }));
                            break;
                        case 2:
                            var obj1 = PropNames[0];
                            var obj2 = PropNames[1];
                            setForm(inputs => ({
                                ...inputs, [obj1]: {
                                    ...inputs[obj1],
                                        [obj2]:currentvalue
                                }
                            }));
                            break;
                        case 3:
                            var obj1 = PropNames[0];
                            var obj2 = PropNames[1];
                            var obj3 = PropNames[2]
                            setForm(inputs => ({
                                ...inputs, [obj1]: {
                                    ...inputs[obj1],
                                    [obj2]: {
                                        ...inputs[obj2],
                                        [obj3]:currentvalue
                                    }
                                }
                            }));
                            break;
                        default:
                            setForm(inputs => ({ ...inputs, [name]: currentvalue }));
                            break;
                    }


                },
                name: NameInput,
                
            }
        }

        
        return [Form, setForm, Model, ObjectNames, reset];

    }


    export function useNvInputForm<T>(inititalvalue: T): [
        T,
        React.Dispatch<React.SetStateAction<T>>,
         {  onChange: (event: React.ChangeEvent<HTMLInputElement>|any) => void },
        () => void
    ] {

        const [Form, setForm] = useState<T>(inititalvalue);
       
        const reset = () => setForm(inititalvalue);

        const Bind = {

            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                const { type, name } = event.currentTarget;
                var PropNames = name?.split(".");
                var len = PropNames?.length;
                var currentvalue = null;
                console.log(len, PropNames);
                if (type == "checkbox") {
                    var { checked } = event.currentTarget;
                    currentvalue = checked;

                } else {
                    const { value } = event.currentTarget;
                    currentvalue = value
                }

                switch (len) {
                    case 1:
                        setForm(inputs => ({ ...inputs, [name]: currentvalue }));
                        break;
                    case 2:
                        var obj1 = PropNames[0];
                        var obj2 = PropNames[1];
                        setForm(inputs => ({
                            ...inputs, [obj1]: {
                                ...inputs[obj1],
                                [obj2]: currentvalue
                            }
                        }));
                        break;
                    case 3:
                        var obj1 = PropNames[0];
                        var obj2 = PropNames[1];
                        var obj3 = PropNames[2];
                        
                        setForm(inputs => ({
                            ...inputs, [obj1]: {
                                ...inputs[obj1],
                                [obj2]: {
                                    ...inputs[obj2],
                                    [obj3]: currentvalue
                                }
                            }
                        }));
                        break;
                    default:
                        setForm(inputs => ({ ...inputs, [name]: currentvalue }));
                        break;
                }


            }
        };


        return [Form, setForm, Bind, reset];

    }

    export function useNvInput<T>(inititalvalue: T): [
        T,
        React.Dispatch <React.SetStateAction<T>>,
        { value: T, onChange: (event: React.ChangeEvent<HTMLInputElement>|any) => void },
        () => void
    ]{

        const [value, setValue] = useState<T>(inititalvalue);

        const reset = () => setValue(inititalvalue);


        const Model = {
            value:value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                const { type } = event.currentTarget;
                if (type == "checkbox") {
                    const {  checked } = event.currentTarget;
                
                    setValue(checked as any);
                } else {
                    const { value } = event.currentTarget;
                 
                    setValue(value as any);
                }
            }
        }
        return [value, setValue, Model, reset];

    }
}