namespace App {

    const { Component,VModel,Prop ,Emit } = ImportVueDecorator;


    @Component({
        inheritAttrs:true,
        template:`<vue-autonumeric v-model="val" @input="change"  :options="Options" > </vue-autonumeric>`
    })
    class NvAutonumeric extends Vue {

        @VModel({ default: null, type: Number })
        val!: number;

        Timer:number = null;
        change() {
            clearTimeout(this.Timer);
            this.Timer = setTimeout(() =>this.$emit("change", this.val), 600);
        }

        @Prop({ type: String, default: '' })
        symbol!: string;
        @Prop({ type: String, default: null })
        min!: string;

        @Prop({ type: Number, default: 0 })
        decimal!: number;

        @Prop({ type: String, default: null })
        rounding!: IAutoNumeric.RoundingMethodOption;

        @Prop({ type: String, default: null })
        default!: string;

        get Options(): IAutoNumeric.Options | string{
            if (this.default != null) return this.default;

            var options= {
                digitGroupSeparator: ',',
                decimalCharacter: '.',
                currencySymbol: this.symbol,
                decimalPlaces: this.decimal
                
            } as IAutoNumeric.Options;

            if (!isNullOrEmpty(this.min)) options.minimumValue= this.min;
            if (!isNullOrEmpty(this.rounding)) options.roundingMethod = this.rounding;

            return options;
        }
    }


    Vue.component("NvAutonumeric", NvAutonumeric);
}