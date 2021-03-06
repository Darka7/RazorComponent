export {}
declare global {

    export  const noop: () => void;
    export  const hasProto: boolean;
    export interface VueDecorator {
        (Ctor: typeof Vue): void;
        (target: Vue, key: string): void;
        (target: Vue, key: string, index: number): void;
    }

   /* export function createDecorator(factory: (options: ComponentOptions<Vue>, key: string, index: number) => void): VueDecorator;*/

    export  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
    export  type ExtractInstance<T> = T extends VueClass<infer V> ? V : never;
    export  type MixedVueClass<Mixins extends VueClass<Vue>[]> = Mixins extends (infer T)[] ? VueClass<UnionToIntersection<ExtractInstance<T>>> : never;
    //export function mixins<A>(CtorA: VueClass<A>): VueClass<A>;
    //export function mixins<A, B>(CtorA: VueClass<A>, CtorB: VueClass<B>): VueClass<A & B>;
    //export function mixins<A, B, C>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>): VueClass<A & B & C>;
    //export function mixins<A, B, C, D>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>): VueClass<A & B & C & D>;
    //export function mixins<A, B, C, D, E>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>, CtorE: VueClass<E>): VueClass<A & B & C & D & E>;

    //export function mixins<T>(...Ctors: VueClass<Vue>[]): VueClass<T>;
    //export function mixins<T extends VueClass<Vue>[]>(...Ctors: T): MixedVueClass<T>;
   

     namespace VueClassComponent {
         export function createDecorator(factory: (options: ComponentOptions<Vue>, key: string, index: number) => void): VueDecorator;
         export function isPrimitive(value: any): boolean;
         export function warn(message: string): void;

    }

}

