//by andrey
export { }

declare global {

    namespace React {
        interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {

            'data-bv-callback'?: string | undefined;
            "data-bv-callback-message"?: string | undefined;
        }
    }

    type BoostrapValidatorCallbackValidator = (value: any, validator: any, $field: JQuery<HTMLElement>) => ResultBValidator| boolean;

    const  enum bootstrapValidatorEnum {
        data = "bootstrapValidator"
    }

    interface feedbackIconsBootstrapValidator {
        valid?: string;
        invalid?: string;
        validating: string;
    }

    interface OptionBootstrapValidator {
        excluded?: string[];
        feedbackIcons?: feedbackIconsBootstrapValidator;
        fields?: any;
        message?: string;
        live?: string;
        group?: string;
        submitButtons?: string;
        trigger?: string;
    }
    interface bvIsValid {
        isValid(): boolean;
    }

    interface JQuery {

        bootstrapValidator(): JQuery;
        bootstrapValidator(options?: OptionBootstrapValidator): JQuery;
        bootstrapValidator(accion: "destroy" | "validate" | "resetForm", required?: boolean): JQuery;
        data(bootrap: bootstrapValidatorEnum): bvIsValid;
    }

}