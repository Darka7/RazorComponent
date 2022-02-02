//by andrey
export { }

declare global {

     const  enum BValidator {
        data = "bootstrapValidator"
    }

    interface feedbackIconsOption {
        valid?: string;
        invalid?: string;
        validating: string;
    }

     interface bootstrapValidatorOption {
        excluded?: string[];
        feedbackIcons?: feedbackIconsOption;
        fields?: any;
        message?: string;
        live?: string;
    }
    interface bvIsValid {
        isValid(): boolean;
    }

    interface JQuery {

        bootstrapValidator(): JQuery;
        bootstrapValidator(options?: bootstrapValidatorOption): JQuery;
        bootstrapValidator(accion: "destroy" | "validate" | "resetForm", required?: boolean): JQuery;
        data(bootrap: BValidator): bvIsValid;
    }

}