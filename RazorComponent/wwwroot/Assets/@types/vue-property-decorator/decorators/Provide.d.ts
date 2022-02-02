
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of a provide
         * @param key key
         * @return PropertyDecorator | void
         */
        export function Provide(key?: string | symbol):VueDecorator;

    }
}