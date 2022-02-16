
export {  };

declare global {

    interface JQuery {
        data<T>(element: string): T;
        autoNumeric(val:any);
    }
   

    interface Vue {
         $Api?: App.HttpService;
        $Session?: App.SessionEntity;
        
    }
    export interface VueConstructor<V extends Vue = Vue> {
        
        
    }
    
}