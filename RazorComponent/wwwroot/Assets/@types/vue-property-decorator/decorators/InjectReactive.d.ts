declare namespace VuePropertyDecorator {
    /**
     * decorator of a reactive inject
     * @param from key
     * @return PropertyDecorator
     */
    export  function InjectReactive(options?: InjectOptions | App.InjectKey): App.VueDecorator;
}