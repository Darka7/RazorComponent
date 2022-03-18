"use strict";
var App;
(function (App) {
    var ImportNvComponents;
    (function (ImportNvComponents) {
        function UseFormValidator(Formulario) {
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
            function Validate() {
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
        ImportNvComponents.UseFormValidator = UseFormValidator;
    })(ImportNvComponents = App.ImportNvComponents || (App.ImportNvComponents = {}));
})(App || (App = {}));
var CreateFormValidator = function (Formulario) {
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
    function Validate() {
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
    return { Init: Init, Validate: Validate, Reset: Reset };
};
//# sourceMappingURL=FormValidateConfig.js.map