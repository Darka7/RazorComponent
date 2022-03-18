"use strict";
var bvAddValidators;
bvAddValidators = function (NombreAtribute, validateFun) {
    eval("$.fn.bootstrapValidator.validators.".concat(NombreAtribute, "={validate:validateFun };"));
};
//# sourceMappingURL=bv-validators.js.map