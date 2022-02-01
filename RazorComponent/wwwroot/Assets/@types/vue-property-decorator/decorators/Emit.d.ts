declare namespace VuePropertyDecorator {
    export  function Emit(event?: string): (_target: App.Vue, propertyKey: string, descriptor: any) => void;
}

