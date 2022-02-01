/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */

//export { Component, Vue, mixins as Mixins };
//export { Emit } from './decorators/Emit';
//export { Inject } from './decorators/Inject';
//export { InjectReactive } from './decorators/InjectReactive';
//export { Model } from './decorators/Model';
//export { ModelSync } from './decorators/ModelSync';
//export { Prop } from './decorators/Prop';
//export { PropSync } from './decorators/PropSync';
//export { Provide } from './decorators/Provide';
//export { ProvideReactive } from './decorators/ProvideReactive';
//export { Ref } from './decorators/Ref';
//export { VModel } from './decorators/VModel';
//export { Watch } from './decorators/Watch';

declare namespace VuePropertyDecorator {

    
    export function Mixins<A>(CtorA: App.VueClass<A>): App.VueClass<A>;
    export function Mixins<A, B>(CtorA: App.VueClass<A>, CtorB: App.VueClass<B>): App.VueClass<A & B>;
    export function Mixins<A, B, C>(CtorA: App.VueClass<A>, CtorB: App.VueClass<B>, CtorC: App.VueClass<C>): App.VueClass<A & B & C>;
    export function Mixins<A, B, C, D>(CtorA: App.VueClass<A>, CtorB: App.VueClass<B>, CtorC: App.VueClass<C>, CtorD: App.VueClass<D>): App.VueClass<A & B & C & D>;
    export function Mixins<A, B, C, D, E>(CtorA: App.VueClass<A>, CtorB: App.VueClass<B>, CtorC: App. VueClass<C>, CtorD: App.VueClass<D>, CtorE: App.VueClass<E>): App.VueClass<A & B & C & D & E>;

    
    export function Mixins<T>(...Ctors: App.VueClass<App.Vue>[]): App.VueClass<T>;
    export function Mixins<T extends App.VueClass<App.Vue>[]>(...Ctors: T): App.MixedVueClass<T>;

    export function Mixins<A, B, C, D, E, F>(CtorA: App.VueClass<A>, CtorB: App.VueClass<B>, CtorC: App.VueClass<C>, CtorD: App.VueClass<D>, CtorE: App.VueClass<E>, CtorF: App.VueClass<F>): App.VueClass<A & B & C & D & E & F>;

    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>, A10: App.VueClass<A10>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>, A10: App.VueClass<A10>, A11: App.VueClass<A11>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>, A10: App.VueClass<A10>, A11: App.VueClass<A11>, A12: App.VueClass<A12>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>, A10: App.VueClass<A10>, A11: App.VueClass<A11>, A12: App.VueClass<A12>, A13: App.VueClass<A13>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12 & A13>;
    export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14>(A1: App.VueClass<A1>, A2: App.VueClass<A2>, A3: App.VueClass<A3>, A4: App.VueClass<A4>, A5: App.VueClass<A5>, A6: App.VueClass<A6>, A7: App.VueClass<A7>, A8: App.VueClass<A8>, A9: App.VueClass<A9>, A10: App.VueClass<A10>, A11: App.VueClass<A11>, A12: App.VueClass<A12>, A13: App.VueClass<A13>, A14: App.VueClass<A14>): App.VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12 & A14>;

    //component
    export function Component<V extends App.Vue>(options: App.ComponentOptions<V> & ThisType<V>): <VC extends App.VueClass<V>>(target: VC) => VC;

    export namespace Component {
        var registerHooks: (keys: string[]) => void;
    }
    export function Component<VC extends App.VueClass<App.Vue>>(target: VC): VC;
    export namespace Component {
        var registerHooks: (keys: string[]) => void;
    }

}
