﻿namespace App.ImportNvComponents {



    type NvAutoNumericProps = {
        id?: string;
        className?: string;
        value?: number;
        symbol?: string;
        min?: string;
        decimal?: number;
        default?: string;
        rounding?: IAutoNumeric.RoundingMethodOption;
        //eventos
        onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void;
        onChangeNumber?: (val: number) => void;
        onBlur?: (val: React.ChangeEvent<HTMLInputElement>) => void;
        onBlurNumber?: (val: number) => void;
    }
    type NvAutoNumericState = {
        
    }
    export class NvAutoNumeric extends React.Component<NvAutoNumericProps, NvAutoNumericState> {
        public $el: HTMLInputElement;

        public input: AutoNumeric;
        static defaultProps: NvAutoNumericProps = {
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

         Options(): IAutoNumeric.Options | string {
            if (this.props.default != null) return this.props.default;

            var options = {
                digitGroupSeparator: ',',
                decimalCharacter: '.',
                currencySymbol: this.props.symbol,
                decimalPlaces: this.props.decimal

            } as IAutoNumeric.Options;

             if (!isNullOrEmpty(this.props.min)) options.minimumValue = this.props.min;
             if (!isNullOrEmpty(this.props.rounding)) options.roundingMethod = this.props.rounding;

            return options;
           
        }

        componentWillUnmount() {
            if (this.input) this.input.remove();
        }

        componentDidMount() {

            this.input = new AutoNumeric(this.$el, this.props.value,this.Options());

        }

        componentWillReceiveProps(nextProps: NvAutoNumericProps,nextContext) {
            
            if (this.input != null) {
                if ( nextProps.value != this.input.getNumber()) {

                    this.input.set(nextProps.value);

                }
            }

        }


        HandlerCall(event: React.ChangeEvent<HTMLInputElement>,EventName) {
            
            if (this.input != null ) {
                var val = this.input.getNumber();
                var NewEvent = Object.assign(event, {
                    target: { value: val },
                    currentTarget: { value: val }
                });

                if (this.props[EventName] != null)
                    this.props[EventName](NewEvent);

                if (this.props[EventName +"Number"] != null)
                    this.props[EventName +"Number"](val);
            }
        }

      

        render() {
            const { id, className, } = this.props;
           

            return (<input
                type="text"
                id={id}
                name={id}
                className={className}
                ref={ ref=> (this.$el=ref)}
                onChange={e => this.HandlerCall(e,"onChange")}
                onBlur={e => this.HandlerCall(e, "onBlur") }
            />)
        }

    }
    
 
}