export { }
declare  global {

    export  function applyMetadata(options: PropOptions | Constructor[] | Constructor, target: Vue, key: string): void;
}