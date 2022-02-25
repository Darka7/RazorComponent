namespace App {


    import VmModalExam2 = CompModalExam2.Default;

    const { Component } = ImportVueDecorator;

    @Component
    class ModalExam1 extends Vue {



        Modal = false;

        Modal2Open() {
            VmModalExam2.Modal = true;
        }

    }

    const Default = new ModalExam1().$mount("#ComponentModal1");

}