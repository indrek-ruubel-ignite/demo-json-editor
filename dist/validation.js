
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
                path: error.error.schemaPath,
                property: error.error.code,
                message: error.error.message
            };

            errors.push(accustomed_error);
            return errors;
        }
        return errors;
    };

    return t;

})();