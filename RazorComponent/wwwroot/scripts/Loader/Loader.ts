namespace App {



    const { Component } = ImportVueDecorator;


    async function Load () {
        const {Template }=  await VueLoad.TemplateAsync("../Loader/CargarPagina?id=Andrey");


        @Component
        @Template
        class Test extends Vue {

            gg: string = "Hola";
            OnClickMe() {
                bootbox.alert("Hola")
            }
        }

        new Vue({
            render(h) { return h(Test) }
        }).$mount("#AddHtml");

    }


    Load();



  
}