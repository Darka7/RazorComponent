
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of a ref prop
         * @param refKey the ref key defined in template
         */
        export function Ref(refKey?: string): VueDecorator;
    }
}