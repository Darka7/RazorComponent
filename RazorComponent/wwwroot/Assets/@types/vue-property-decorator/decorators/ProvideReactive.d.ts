
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of a reactive provide
         * @param key key
         * @return PropertyDecorator | void
         */
        export function ProvideReactive(key?: string | symbol): VueDecorator;
    }

}