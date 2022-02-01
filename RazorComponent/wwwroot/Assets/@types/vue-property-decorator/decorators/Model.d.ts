declare namespace VuePropertyDecorator {
    /**
     * decorator of model
     * @param  event event name
     * @param options options
     * @return PropertyDecorator
     */
    export  function Model(event?: string, options?: App.PropOptions | App.Constructor[] | App.Constructor): (target: App.Vue, key: string) => void;
}