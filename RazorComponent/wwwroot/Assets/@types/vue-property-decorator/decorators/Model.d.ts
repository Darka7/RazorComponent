
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of model
         * @param  event event name
         * @param options options
         * @return PropertyDecorator
         */
        export function Model(event?: string, options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;
    }

}