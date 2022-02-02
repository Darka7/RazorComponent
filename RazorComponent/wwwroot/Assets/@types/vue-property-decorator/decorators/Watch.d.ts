
export { }
declare global {
     namespace VuePropertyDecorator {
        /**
         * decorator of a watch function
         * @param  path the path or the expression to observe
         * @param  WatchOption
         * @return MethodDecorator
         */
        export function Watch(path: string, options?:WatchOptions):VueDecorator;
    }

}