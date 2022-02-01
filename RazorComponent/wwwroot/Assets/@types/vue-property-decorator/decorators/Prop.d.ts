declare namespace VuePropertyDecorator {
    /**
     * decorator of a prop
     * @param  options the options for the prop
     * @return PropertyDecorator | void
     */
    export  function Prop(options?: App.PropOptions | App.Constructor[] | App.Constructor): (target: App.Vue, key: string) => void;
}
