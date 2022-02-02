

export { }
declare global {
     namespace VuePropertyDecorator {
        export function Emit(event?: string): (_target: Vue, propertyKey: string, descriptor: any) => void;
    }
}

