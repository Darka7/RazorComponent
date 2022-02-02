
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator for capturings v-model binding to component
         * @param options the options for the prop
         */
        export function VModel(options?: PropOptions):VueDecorator;
    }
}