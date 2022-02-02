export { }
declare global {
    export  function needToProduceProvide(original: any): boolean;
    interface ProvideObj {
        managed?: {
            [k: string]: any;
        };
        managedReactive?: {
            [k: string]: any;
        };
    }
    export type ProvideFunc = ((this: any) => Object) & ProvideObj;
    export  function produceProvide(original: any): ProvideFunc;
    /** Used for keying reactive provide/inject properties */
    export  const reactiveInjectKey2 = "__reactiveInject__";
    export  function inheritInjected(componentOptions: ComponentOptions<Vue>): void;
}
