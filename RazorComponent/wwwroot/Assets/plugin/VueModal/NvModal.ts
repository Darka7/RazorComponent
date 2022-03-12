namespace App {

    const { Component,Prop ,VModel }= VuePropertyDecorator


    @Component({
        inheritAttrs: false,
        template:
        `
<div class="nvmodal" :id="id"  tabindex="-1" v-show.display="show"  :style="indexStyle">
  <div :class="['modal-dialog modal-dialog-centered',SizeModal]" :style="indexStyle">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" >
        <slot name="h"> {{title}} </slot>
        </h5>
        <button type="button" class="btn-close"  aria-label="Close" @click="show=false"></button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
          <slot name="f">
        <button type="button" class="btn btn-outline-secondary" @click="show=false">Cerrar</button>
            </slot>
      </div>
    </div>
  </div>
</div>`
    })

    class NvModal extends Vue {
        @Prop({ default: null, type: String })
        title!: string;

        @Prop({ default: null, type: String })
        id!: string;

        @VModel({ type: Boolean, default: false })
        show!: boolean;

        @Prop({default:null,type:String})
        size!: string

        get SizeModal() {
            return isNullOrEmpty(this.size) ? '' : 'modal-'+this.size;
        }

        @Prop({ default: null, type: String })
        index!: string;

        get indexStyle() {
            return this.index != null ? { "z-index": this.index } : {};
        }
    }


    Vue.component("NvModal", NvModal);

   
}