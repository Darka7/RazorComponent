namespace App.ImportNvComponents {
 
    export function UseFormValidator(Formulario: string): [
        Init?: () => void,
        Validate?: () => boolean,
        Reset?: () => void
    ]{

        function Init() {

            $(Formulario).bootstrapValidator('destroy');
            $(Formulario).bootstrapValidator({
                feedbackIcons: {
                    valid: 'bx bx-check',
                    invalid: 'bx bx-x',
                    validating: 'bx bx-refresh'
                },

                live: 'enabled',
                submitButtons: 'button[name="submit"]',

            });
        }

        function Validate(): boolean {

            Init();
            $(Formulario).bootstrapValidator('validate');
            var ValidForm = $(Formulario).data('bootstrapValidator').isValid();

            return ValidForm;
        }

        function Reset() {
            $(Formulario).bootstrapValidator('resetForm', true);
            Init();
            

        }

        return [Init, Validate, Reset];
    }

}

type NvFormValidator = {
    Init?: () => void,
    Validate?: () => boolean,
    Reset?: () => void;
}

var CreateFormValidator = function(Formulario: string): NvFormValidator {

    function Init() {
        $(Formulario).bootstrapValidator('destroy');
        $(Formulario).bootstrapValidator({
            feedbackIcons: {
                valid: 'bx bx-check',
                invalid: 'bx bx-x',
                validating: 'bx bx-refresh'
            },

            live: 'enabled',
            submitButtons: 'button[name="submit"]',

        });
    }

    function Validate(): boolean {

        $(Formulario).bootstrapValidator('destroy');
        $(Formulario).bootstrapValidator({
            feedbackIcons: {
                valid: 'bx bx-check',
                invalid: 'bx bx-x',
                validating: 'bx bx-refresh'
            },

            live: 'enabled',
            submitButtons: 'button[name="submit"]',

        });

        $(Formulario).bootstrapValidator('validate');
        var ValidForm = $(Formulario).data('bootstrapValidator').isValid();
        $(Formulario).bootstrapValidator('validate');
        return ValidForm;
    }

    function Reset() {
        $(Formulario).bootstrapValidator('resetForm', true);
        $(Formulario).bootstrapValidator('destroy');
        $(Formulario).bootstrapValidator({
            feedbackIcons: {
                valid: 'bx bx-check',
                invalid: 'bx bx-x',
                validating: 'bx bx-refresh'
            },

            live: 'enabled',
            submitButtons: 'button[name="submit"]',

        });
     
    }

    return { Init, Validate, Reset };
}