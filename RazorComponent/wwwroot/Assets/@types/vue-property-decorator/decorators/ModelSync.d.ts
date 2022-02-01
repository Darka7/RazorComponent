declare namespace VuePropertyDecorator {
    /**
     * decorator of synced model and prop
     * @param propName the name to interface with from outside, must be different from decorated property
     * @param  event event name
     * @param options options
     * @return PropertyDecorator
     */
    export  function ModelSync(propName: string, event?: string, options?: App.PropOptions | App.Constructor[] | App.Constructor): (target: App.Vue, key: string) => void;
}