
export {}
declare global {

    export  function reflectionIsSupported(): false | any;
    export  function copyReflectionMetadata(to: VueConstructor, from: VueClass<Vue>): void;

}
