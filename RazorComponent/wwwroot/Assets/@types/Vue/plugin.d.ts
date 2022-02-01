




 declare namespace App {
  

     export type PluginFunction<T> = (Vue:  Vue, options?: T) => void;

    export interface PluginObject<T> {
        install: PluginFunction<T>;
        [key: string]: any;
    }

    
}