namespace App {
     interface Example2Model  {
        
        Security?: SecurityPageEntity;
      
        Ocultar?: boolean;
      
        Persona: Persona;
    }

    declare var Model: Example2Model;

    const {Component } = VuePropertyDecorator;


    @Component({
        data() { return Model;}
    })

    class Example2 extends Vue implements Example2Model {
        Security!: SecurityPageEntity;
        Ocultar!: boolean;
        Persona!: Persona;

        public HolaMundo: string = "Hola mundo Andrey";

        public OnClickMe() {
            MensajeriaApp.Mostrar(this.Persona.Nombre);
            this.HolaMundo = "Se cambio el mensaje"

            this.Persona.Nombre = "Anita-chan";
        }

        
    }



    var vm = new Example2().$mount("#VueApp");


}
