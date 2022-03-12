namespace App.ImportNvComponents {



    const {  createRef} = React;


    type NvAutoNumericProps = {
        id?: string;
        className?: string;
        value?: number;
        GetVal?: "input" | "val";
        onChange?: (val: number | React.ChangeEvent<HTMLInputElement>) => void;
        onBlur?: (val: number | React.ChangeEvent<HTMLInputElement>) => void;
    }
    type NvAutoNumericState = {
        
    }
    export class NvAutoNumeric extends React.Component<NvAutoNumericProps, NvAutoNumericState> {
        public $el: HTMLInputElement;

        public input: AutoNumeric;
        static defaultProps: NvAutoNumericProps = {
            className: "form-control",
            GetVal:"input"
        };
        constructor(pr) {
            super(pr);
            this.HandlerCall = this.HandlerCall.bind(this);
     
        }

        componentWillUnmount() {
            if (this.input) this.input.remove();
        }

        componentDidMount() {
            this.input = new AutoNumeric(this.$el, this.props.value);

        }

        componentWillReceiveProps(nextProps: NvAutoNumericProps,nextContext) {
            
            if (this.input != null) {
                if ( nextProps.value != this.input.getNumber()) {

                    this.input.set(nextProps.value);

                }
            }

        }


        HandlerCall(event: React.ChangeEvent<HTMLInputElement>,EventName) {
            
            if (this.input != null && this.props[EventName] != null) {
                var val = this.input.getNumber();
                var NewEvent = Object.assign(event, {
                    target: { value: val },
                    currentTarget: { value: val }
                });
              
                this.props[EventName](this.props.GetVal=="input"?NewEvent: val);
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