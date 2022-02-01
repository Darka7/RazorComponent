

declare namespace VuePropertyDecorator {

    export type InjectOptions = {
        from?: App.InjectKey;
        default?: any;
    };
    
    /**
     * decorator of an inject
     * @param from key
     * @return PropertyDecorator
     */
    export  function Inject(options?: InjectOptions | App.InjectKey): App.VueDecorator;
}