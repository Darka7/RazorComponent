namespace App {

   export  class HttpService {
        constructor() {

        }

       SaveEmpleados = () =>
           axios.post<object>("").then(({ data }) => data);
         
         
         
    }


    export const Service = new HttpService();

    
    
}