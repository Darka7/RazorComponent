export { }
declare global{
    export  const $internalHooks: string[];
    export  function componentFactory(Component: VueClass<Vue>, options?: ComponentOptions<Vue>): VueClass<Vue>;
}

