namespace App.ImportNvComponents {

    type ModelInputState<T> = [T, React.Dispatch<React.SetStateAction<T>>];


    interface InputModelProps<T> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange" | "onBlur"> {
        Model?: ModelInputState<T>;
        onChange?: (evt: React.ChangeEvent<HTMLInputElement>, value: any) => void;
        onBlur?: (evt: React.ChangeEvent<HTMLInputElement>, value: any) => void;
        Label?: React.ReactNode | string | undefined;
        classContainer?: string;
        keyprop?: any;
    }

    export function NvInput<T>({ Model, Label = "", classContainer = "", className = null, onChange = null, onBlur = null, value = null, ...props }: InputModelProps<T>) {
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

    export function NvInputModel<T>({ Model, Label = "", classContainer = "", className = null, keyprop = null, onChange = null, onBlur = null, value = null, checked = null, ...props }: InputModelProps<T>) {
        const [InputVal, SetInputVal] = Model;

        var Dynamicprop = "prev.";
        if (keyprop != null) Dynamicprop = `prev[${keyprop}].`;
        Dynamicprop = props?.name.startsWith("[") ? "prev" : Dynamicprop;



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

    const { NvAutoNumeric } = ImportNvComponents;

    interface NvAutoNumericLayoutProps<T> extends NvAutoNumericProps {
        Model?: ModelInputState<T>;
        Label?: React.ReactNode | string | undefined;
        classContainer?: string
        ref?: any;
        keyprop?: any;
    }
    function NvAutoNumericLayout<T>({ Model, Label = "", classContainer = "", onChange = null, onBlur = null, value = null, ...props }: NvAutoNumericLayoutProps<T>) {
        const [InputVal, SetInputVal] = Model;

        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>, currentValue?: number) {

            SetInputVal(currentValue as any);

            if (onChange != null) onChange(evt, currentValue);
        }
        function HandlerEventBlur(evt: React.ChangeEvent<HTMLInputElement>, currentValue?: number) {
            if (onBlur != null) {


                onBlur(evt, currentValue);
            }

        }

        const { id = "" } = props;
        return (<div className={"nv-validar " + classContainer}>
            <label className="form-label" htmlFor={id} >{Label}</label>
            <NvAutoNumeric  {...props} onChange={HandlerEventChange} onBlur={HandlerEventBlur}
                value={InputVal as any}
            />
        </div>);
    };


    NvInput.Numeric = NvAutoNumericLayout;

    function NvAutoNumericLayoutModel<T>({ Model, Label = "", classContainer = "", keyprop = null, onChange = null, onBlur = null, value = null, ...props }: NvAutoNumericLayoutProps<T>) {
        const [InputVal, SetInputVal] = Model;

        var Dynamicprop = "prev.";
        if (keyprop != null) Dynamicprop = `prev[${keyprop}].`;
        Dynamicprop = props?.name.startsWith("[") ? "prev" : Dynamicprop;



        function HandlerEventChange(evt: React.ChangeEvent<HTMLInputElement>, currentValue: number) {

            SetInputVal(prev => {

                eval(`${Dynamicprop}${props.name} = currentValue;`)

                return ({ ...prev });
            });

            if (onChange != null) onChange(evt, currentValue);
        }


        function HandlerEventBlur(evt: React.ChangeEvent<HTMLInputElement>, currentValue: number) {
            if (onBlur != null) {

                onBlur(evt, currentValue);
            }

        }
        const { id = "" } = props;

        return (<div className={"nv-validar " + classContainer}>
            <label className="form-label" htmlFor={id} >{Label}</label>
            <NvAutoNumeric  {...props} onChange={HandlerEventChange} onBlur={HandlerEventBlur}
                value={value as any}
            />
        </div>);
    }

    NvInputModel.Numeric = NvAutoNumericLayoutModel


}