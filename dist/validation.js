
/**
*   Validation wrapper for tv4
*/

var Validator = (function() {

    var t = {};

    t.validate = function(value, schema){

        var errors = [];

        var error = tv4.validateResult(value, schema);

        if(error.valid){
            return true;
        }else{
            var accustomed_error = {
                path: error.error.dataPath,
                property: error.error.params.key,//.code,
                message: error.error.message
            };

            errors.push(accustomed_error);
            return errors;
        }
        return errors;
    };

    return t;

})();