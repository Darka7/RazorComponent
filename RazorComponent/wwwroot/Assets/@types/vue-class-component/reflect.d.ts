

declare namespace App {

    export  function reflectionIsSupported(): false | any;
    export  function copyReflectionMetadata(to: VueConstructor, from: VueClass<Vue>): void;

}
