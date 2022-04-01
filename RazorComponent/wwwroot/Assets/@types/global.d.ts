
export {  };

declare global {

    interface JQuery {
        data<T>(element: string): T;
        autoNumeric(val:any);
    }
   

    interface Vue {
         $Api?: App.HttpService;
        $Session?: App.SessionEntity;
        RenderHtml?(): string;
    }
    

   


    interface Navigator extends NavigatorAutomationInformation, NavigatorConcurrentHardware, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLanguage, NavigatorNetworkInformation, NavigatorOnLine, NavigatorPlugins, NavigatorStorage {
        msSaveOrOpenBlob(file: Blob, nombre: string) : void;
        msSaveBlob(file: Blob, nombre: string): void;
    }

}