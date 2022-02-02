
export {  };

declare global {

    interface JQuery {
        data<T>(element: string): T;
    }


}