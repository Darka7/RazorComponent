
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of a prop
         * @param  options the options for the prop
         * @return PropertyDecorator | void
         */
        export function Prop(options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;
    }


}