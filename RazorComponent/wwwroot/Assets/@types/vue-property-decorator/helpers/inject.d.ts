
export { }
declare global {
    /** Used for keying reactive provide/inject properties */
    export  const reactiveInjectKey = "__reactiveInject__";
    export  function inheritInjected(componentOptions: ComponentOptions<Vue>): void;
}