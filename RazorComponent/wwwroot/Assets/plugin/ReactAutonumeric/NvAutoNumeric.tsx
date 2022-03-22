namespace App.ImportNvComponents {

    

   export interface NvAutoNumericProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange" | "onBlur">  {
        value?: number;
        symbol?: string;
        minvalue?: string;
        decimal?: number;
        default?: string;
        rounding?: IAutoNumeric.RoundingMethodOption;
        //eventos
        onChange?: (evt: React.ChangeEvent<HTMLInputElement>,val?:number) => void;
        onBlur?: (evt: React.ChangeEvent<HTMLInputElement>,val?:number) => void;
    }
    type NvAutoNumericState = {
        
    }
    export class NvAutoNumeric extends React.Component<NvAutoNumericProps, NvAutoNumericState> {
        public $el: HTMLInputElement;

        public input: AutoNumeric;
        static defaultProps: NvAutoNumericProps = {
            id: null,
            name: null,
            value:null,
            className: "form-control",
            symbol: "",
            min: null,
            decimal: 0,
            rounding: null,
            default:null
        };
        constructor(pr) {
            super(pr);
            this.HandlerCall = this.HandlerCall.bind(this);
            this.Options = this.Options.bind(this);
        }

        Options(PropsOptions: NvAutoNumericProps): IAutoNumeric.Options | string {
            if (PropsOptions.default != null) return PropsOptions.default;

            var options = {
                digitGroupSeparator: ',',
                decimalCharacter: '.',
                currencySymbol: PropsOptions.symbol,
                decimalPlaces: PropsOptions.decimal

            } as IAutoNumeric.Options;

            if (!isNullOrEmpty(PropsOptions.minvalue)) options.minimumValue = PropsOptions.minvalue;
            if (!isNullOrEmpty(PropsOptions.rounding)) options.roundingMethod = PropsOptions.rounding;

            return options;
           
        }

        componentWillUnmount() {
            if (this.input) this.input.remove();
        }

        componentDidMount() {
            
            this.input = new AutoNumeric(this.$el, this.props.value ,this.Options(this.props));

        }

        componentDidUpdate(nextProps: NvAutoNumericProps,nextContext) {
            
            if (this.input != null) {
                if (nextProps.value != this.input.getNumber() && this.props.value != this.input.getNumber()  ) {

                    this.input.set(nextProps.value );

                }
                const isOptionsChanged =
                    JSON.stringify({ ...this.props, value: undefined } as NvAutoNumericProps) !==
                    JSON.stringify({ ...nextProps, value: undefined } as NvAutoNumericProps);
                if (isOptionsChanged) {
                    var NewOptions = this.Options(nextProps) as IAutoNumeric.Options;
                    this.input.update(NewOptions);
                }
            }

        }


        HandlerCall(evt: React.ChangeEvent<HTMLInputElement>,EventName) {
            
            if (this.input != null ) {
                var val = this.input.getNumber();
                var name = evt.currentTarget.name;

                var NewEvent = {
                    target: {
                        name: name,
                        value: val as any,
                        type: "number",
                        id:evt.currentTarget.id
                    },
                    currentTarget: {
                        name: name,
                        value: val as any,
                        type: "number",
                        id: evt.currentTarget.id
                    }
                } as React.ChangeEvent<HTMLInputElement>
              
                
                if (this.props[EventName] != null)
                    this.props[EventName](NewEvent,val);

            }
        }

      

        render() {
            const { type,value,onChange=null,onBlur=null,...setprops } = this.props;

            return (<input
                {...setprops}
                type="text" 
                ref={ ref=> (this.$el=ref)}
                onChange={e => this.HandlerCall(e,"onChange")}
                onBlur={e => this.HandlerCall(e, "onBlur") }
            />)
        }

    }
    
 
}