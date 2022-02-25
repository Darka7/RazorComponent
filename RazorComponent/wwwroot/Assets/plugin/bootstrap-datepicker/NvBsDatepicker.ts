namespace App {
    const { Component, VModel, Emit, Ref, Watch, Prop } = VuePropertyDecorator;

    @Component({
        template: ` <input ref="InputDate"  type="text" class="form-control"   v-bind="$attrs" />  `,
        inheritAttrs: false
    })

    class NvBsDatepicker extends Vue {
        @VModel({ type: Date, default: new Date() })
        InpuVal!: Date;

        @Ref()
        readonly InputDate!: HTMLInputElement;

        @Prop({ type: String, default: "mm/dd/yyyy" })
        format!: string;

       

        ElementHTML: JQuery = null;



        @Watch('InpuVal', { immediate: true })
        OnChangeVmodel(val: number, oldval: number) {
            var old = this.ElementHTML?.datepicker("getDate") == null ? null :
                dateFormat(this.ElementHTML?.datepicker("getDate"), 'dd/MM/yyyy');

            var newval = val == null ? null : dateFormat(val, "dd/MM/yyyy")
            if (newval != old) {
                this.ElementHTML?.datepicker("update", val)

            }


        }

        @Emit('change')
        OnChange() {
            var newdate = this.ElementHTML.datepicker("getDate");


            this.InpuVal = newdate;

            return this.InpuVal;
        }

        mounted() {
            var $this = this;
            this.ElementHTML = $(this.InputDate).datepicker({
                format: this.format,

            });
            //changeDate
            this.ElementHTML.datepicker("update", this.InpuVal);


            this.InputDate.onchange = function (e) {
                $this.InpuVal = $this.ElementHTML.datepicker("getDate");
                //trigger -null
                setTimeout($this.OnChange, 200);

            }
            
        }
      




    }




    Vue.component("NvBsDatepicker", NvBsDatepicker);

}