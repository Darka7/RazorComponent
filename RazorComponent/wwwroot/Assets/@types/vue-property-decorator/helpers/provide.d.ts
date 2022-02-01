
declare namespace App {
    export  function needToProduceProvide(original: any): boolean;
    interface ProvideObj {
        managed?: {
            [k: string]: any;
        };
        managedReactive?: {
            [k: string]: any;
        };
    }
    //export type ProvideFunc = ((this: any) => Object) & ProvideObj;
    export  function produceProvide(original: any): ProvideFunc;

}