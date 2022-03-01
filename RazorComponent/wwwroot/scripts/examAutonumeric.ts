namespace App {


    const { Component }=ImportVueDecorator

    @Component

    class Model extends Vue {


        obj: { value: number } = {value:100};

        OnChange(value) {
            console.log(value);
        }
    }


    new Model().$mount("#AppAN")
}