
declare namespace VuePropertyDecorator {
 
    /**
     * decorator of a synced prop
     * @param propName the name to interface with from outside, must be different from decorated property
     * @param options the options for the synced prop
     * @return PropertyDecorator | void
     */
    export  function PropSync(propName: string, options?: App.PropOptions | App.Constructor[] | App.Constructor): (target: App.Vue, key: string) => void;
}