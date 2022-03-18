interface ResultBValidator {
    valid: boolean;
    message: string;
}
type BoostrapValidatorCallbackCustomValidator = (validator: any, $field: JQuery<HTMLElement>, options: any) => ResultBValidator | boolean;

var bvAddValidators: (NombreAtribute: string, validate: BoostrapValidatorCallbackCustomValidator) => void;


bvAddValidators = function (NombreAtribute: string, validateFun: BoostrapValidatorCallbackCustomValidator) {
    eval(`$.fn.bootstrapValidator.validators.${NombreAtribute}={validate:validateFun };`); 
}
