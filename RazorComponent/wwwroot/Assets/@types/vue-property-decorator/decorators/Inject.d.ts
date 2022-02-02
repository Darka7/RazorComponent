
export { }
declare global {
     namespace VuePropertyDecorator {

        export type InjectOptions = {
            from?: InjectKey;
            default?: any;
        };

        /**
         * decorator of an inject
         * @param from key
         * @return PropertyDecorator
         */
        export function Inject(options?: InjectOptions | InjectKey): VueDecorator;
    }
}