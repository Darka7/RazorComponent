export { }

declare global {

    // Type definitions for React (react-dom) 17.0
    // Project: https://reactjs.org
    // Definitions by: Asana <https://asana.com>
    //                 AssureSign <http://www.assuresign.com>
    //                 Microsoft <https://microsoft.com>
    //                 MartynasZilinskas <https://github.com/MartynasZilinskas>
    //                 Josh Rutherford <https://github.com/theruther4d>
    //                 Jessica Franco <https://github.com/Jessidhia>
    //                 Sebastian Silbermann <https://github.com/eps1lon>
    // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
    // TypeScript Version: 2.8

    // NOTE: Users of the upcoming React 18 release should add a reference
    // to 'react-dom/next' in their project. See next.d.ts's top comment
    // for reference and documentation on how exactly to do it.

    // NOTE: Users of the `experimental` builds of React should add a reference
    // to 'react-dom/experimental' in their project. See experimental.d.ts's top comment
    // for reference and documentation on how exactly to do it.

    
     namespace ReactDOM {
        export function findDOMNode(instance: React.ReactInstance | null | undefined): Element | null | Text;
        export function unmountComponentAtNode(container: Element | DocumentFragment): boolean;

         export function createPortal(children: React.ReactNode, container: Element, key?: null | string): React.ReactPortal;

        export const version: string;
        export const render: Renderer;
        export const hydrate: Renderer;

        export function flushSync<R>(fn: () => R): R;
        export function flushSync<A, R>(fn: (a: A) => R, a: A): R;

        export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
        export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
        export function unstable_batchedUpdates(callback: () => any): void;

        export function unstable_renderSubtreeIntoContainer<T extends Element>(
            parentComponent: React.Component<any>,
            element: React.DOMElement<React.DOMAttributes<T>, T>,
            container: Element,
            callback?: (element: T) => any): T;
         export function unstable_renderSubtreeIntoContainer<P, T extends React.Component<P, React.ComponentState>>(
             parentComponent: React.Component<any>,
             element: React.CElement<P, T>,
            container: Element,
            callback?: (component: T) => any): T;
        export function unstable_renderSubtreeIntoContainer<P>(
            parentComponent: React.Component<any>,
            element: React.ReactElement<P>,
            container: Element,
            callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, React.ComponentState> | Element | void;

        export type Container = Element | Document | DocumentFragment;

        export interface Renderer {
            // Deprecated(render): The return value is deprecated.
            // In future releases the render function's return type will be void.

            <T extends Element>(
                element: React.DOMElement<React.DOMAttributes<T>, T>,
                container: Container | null,
                callback?: () => void
            ): T;

            (
                element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
                container: Container | null,
                callback?: () => void
            ): Element;

            (
                element: React.FunctionComponentElement<any> | Array<React.FunctionComponentElement<any>>,
                container: Container | null,
                callback?: () => void
            ): void;

            <P, T extends React.Component<P, React.ComponentState>>(
                element: React.CElement<P, T>,
                container: Container | null,
                callback?: () => void
            ): T;

            (
                element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>,
                container: Container | null,
                callback?: () => void
            ): React.Component<any, React.ComponentState>;

            <P>(
                element: React.ReactElement<P>,
                container: Container | null,
                callback?: () => void
            ): React.Component<P, React.ComponentState> | Element | void;

            (
                element: React.ReactElement[],
                container: Container | null,
                callback?: () => void
            ): React.Component<any, React.ComponentState> | Element | void;
        }
    }
}

declare global {
    namespace NodeJS {
        // tslint:disable-next-line:no-empty-interface
        interface ReadableStream { }
    }

    function unstable_flushControlled(callback: () => void): void;

    // enableSelectiveHydration feature

    /**
     * @see https://github.com/facebook/react/commit/3a2b5f148d450c69aab67f055fc441d294c23518
     */
    function unstable_scheduleHydration(target: Element | Document | DocumentFragment | Comment): void;

    namespace ReactDOMServer {

        /**
         * Render a React element to its initial HTML. This should only be used on the server.
         * React will return an HTML string. You can use this method to generate HTML on the server
         * and send the markup down on the initial request for faster page loads and to allow search
         * engines to crawl your pages for SEO purposes.
         *
         * If you call `ReactDOM.hydrate()` on a node that already has this server-rendered markup,
         * React will preserve it and only attach event handlers, allowing you
         * to have a very performant first-load experience.
         */
        export function renderToString(element: React.ReactElement): string;

        /**
         * Render a React element to its initial HTML. Returns a Readable stream that outputs
         * an HTML string. The HTML output by this stream is exactly equal to what
         * `ReactDOMServer.renderToString()` would return.
         */
        export function renderToNodeStream(element: React.ReactElement): NodeJS.ReadableStream;

        /**
         * Similar to `renderToString`, except this doesn't create extra DOM attributes
         * such as `data-reactid`, that React uses internally. This is useful if you want
         * to use React as a simple static page generator, as stripping away the extra
         * attributes can save lots of bytes.
         */
        export function renderToStaticMarkup(element: React.ReactElement): string;

        /**
         * Similar to `renderToNodeStream`, except this doesn't create extra DOM attributes
         * such as `data-reactid`, that React uses internally. The HTML output by this stream
         * is exactly equal to what `ReactDOMServer.renderToStaticMarkup()` would return.
         */
        export function renderToStaticNodeStream(element: React.ReactElement): NodeJS.ReadableStream;

        export const version: string;
    }
}