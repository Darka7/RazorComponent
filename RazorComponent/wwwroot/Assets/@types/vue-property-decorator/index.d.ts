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
export { }
declare global {
     namespace VuePropertyDecorator {


        export function Mixins<A>(CtorA: VueClass<A>): VueClass<A>;
        export function Mixins<A, B>(CtorA: VueClass<A>, CtorB: VueClass<B>): VueClass<A & B>;
        export function Mixins<A, B, C>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>): VueClass<A & B & C>;
        export function Mixins<A, B, C, D>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>): VueClass<A & B & C & D>;
        export function Mixins<A, B, C, D, E>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>, CtorE: VueClass<E>): VueClass<A & B & C & D & E>;


        export function Mixins<T>(...Ctors: VueClass<Vue>[]): VueClass<T>;
        export function Mixins<T extends VueClass<Vue>[]>(...Ctors: T): MixedVueClass<T>;

        export function Mixins<A, B, C, D, E, F>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>, CtorE: VueClass<E>, CtorF: VueClass<F>): VueClass<A & B & C & D & E & F>;

        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>, A10: VueClass<A10>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>, A10: VueClass<A10>, A11: VueClass<A11>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>, A10: VueClass<A10>, A11: VueClass<A11>, A12: VueClass<A12>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>, A10: VueClass<A10>, A11: VueClass<A11>, A12: VueClass<A12>, A13: VueClass<A13>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12 & A13>;
        export function Mixins<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14>(A1: VueClass<A1>, A2: VueClass<A2>, A3: VueClass<A3>, A4: VueClass<A4>, A5: VueClass<A5>, A6: VueClass<A6>, A7: VueClass<A7>, A8: VueClass<A8>, A9: VueClass<A9>, A10: VueClass<A10>, A11: VueClass<A11>, A12: VueClass<A12>, A13: VueClass<A13>, A14: VueClass<A14>): VueClass<A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10 & A11 & A12 & A14>;

        //component
        export function Component<V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;

        export namespace Component {
            var registerHooks: (keys: string[]) => void;
        }
        export function Component<VC extends VueClass<Vue>>(target: VC): VC;
        export namespace Component {
            var registerHooks: (keys: string[]) => void;
        }

    }
}
