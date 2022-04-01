namespace App {

    const { Component } = VuePropertyDecorator;
    const { WithRender,TemplateAsync,Template } = VueLoad;
    
       
    var titulo = "title";
      @Component
      @WithRender(`<div>
                       <h1>Hola Mundo With Render {{${titulo}}}</h1>

                          <input type="text" v-model="title" />
                    </div>`)
      class TemplateLoadar extends Vue {

          title = "Esto es una variable";
          gg: string = "Hola";

          OnClickMe() {
              bootbox.alert("Hola")
          }


          created() {
              
          }

      }


      new Vue({
          render: (h) => h(TemplateLoadar),
      }).$mount("#AddHtml");
    
  
}