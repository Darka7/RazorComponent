namespace App {

    const { Component, Prop, VModel } = VuePropertyDecorator


    @Component({
        inheritAttrs: false,
        template:
            `
<div class="nvmodalr-backdrop" v-show="show" :style="indexStyle">
<div :class="{'nvmodalr':true,'show':show,'nvmodalr-md':size=='md', 'nvmodalr-lg':size=='lg', 'nvmodalr-xl':size=='xl','nvmodalr-xxl':size=='xxl'}"  :style="indexStyle"
tabindex="-1" :id="id" >
  <div class="offcanvas-header nvmodalr-header">
    <h4 id="offcanvasTopLabel"> <slot name="h"> {{title}} </slot> </h4>
    <button type="button" class="btn-close"  aria-label="Close" @click="show=false"></button>
  </div>
  <div class="offcanvas-body">
   <slot></slot>
  </div>
</div>
</div>
`
    })

    class NvModalR extends Vue {
        @Prop({ default: null, type: String })
        title!: string;

        @Prop({ default: null, type: String })
        id!: string;

        @VModel({ type: Boolean, default: false })
        show!: boolean;

        @Prop({ default: null, type: String })
        size!: string


        @Prop({ default: null, type: String })
        index!: string;

        get indexStyle() {
           return this.index != null ? { "z-index" :  this.index } : {};
           
           
        }
    }


    Vue.component("NvModalR", NvModalR);

}