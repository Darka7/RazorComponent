



export { }
 declare  global {
    
   export  type _Vue=typeof Vue;

     export type PluginFunction<T> = (Vue: _Vue, options?: T) => void;

    export interface PluginObject<T> {
        install: PluginFunction<T>;
        [key: string]: any;
    }

    
}