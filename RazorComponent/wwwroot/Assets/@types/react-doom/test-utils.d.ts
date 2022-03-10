export {}
declare global {
     namespace CSS {
         export interface Properties<TLength = (string & {}) | 0, TTime = string & {}> { }
    }
}