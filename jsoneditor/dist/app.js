
var app = (function() {

    var t = {};

    var schema = null;
//    var schema_editor_id = "schema";
    var query_editor_id = "output";

    /**
    *   Load a file
    *   TODO: make it ajax based
    */
    var loadScript = function(url, callback){
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
    };

    /**
    *   Load schema
    */
    var loadSchema = function(callback){
        loadScript("jsoneditor/dist/query.js", function(){
            callback(query_schema);
        });
    };

    /**
    *   Main
    */
    t.init = function(){

        var jsoneditor;

        /**
        *   DOM elements
        */
        var $editor = document.getElementById('editor');
        var $validate = document.getElementById('validate');
//        var $download_button = document.getElementById('download_query');

        /**
        *   Buttons
        */
//        var $set_schema_button = document.getElementById('setschema');
        var $set_value_button = document.getElementById('setvalue');

        var reload = function(keep_value) {
            window.startval = undefined;

            if(jsoneditor) jsoneditor.destroy();
            jsoneditor = new JSONEditor($editor,{
                schema: schema,
                startval: startval,
                children_expanded: false,
                ajax: true
            });
            window.jsoneditor = jsoneditor;

            // When the value of the editor changes, update the JSON output and validation message
            jsoneditor.on('change',function() {
                var json = jsoneditor.getValue();
                query_editor.setValue(JSON.stringify(json,null,2));
                validate();
            });
        };

        var validate = function(){
            var validation_errors = jsoneditor.validate();
            // Show validation errors if there are any
            if(validation_errors.length) {
                setValidationErrors(validation_errors);
            }
            else {
                $validate.value = 'valid';
            }
        };

        var setValidationErrors = function(errors){
            $validate.value = JSON.stringify(errors,null,2);
        };


        /**
        *   Setup ACE editors
        */
//        var schema_editor = ace.edit(schema_editor_id);
//        schema_editor.setTheme("ace/theme/monokai");
//        schema_editor.getSession().setMode("ace/mode/javascript");
//        schema_editor.setOptions({
//            maxLines: Infinity
//        });
//        schema_editor.setValue("");

        var query_editor = ace.edit(query_editor_id);
        query_editor.setTheme("ace/theme/monokai");
        query_editor.getSession().setMode("ace/mode/javascript");
        query_editor.setOptions({
            maxLines: Infinity
        });
        query_editor.setValue("");

        var updateDownloadBase64 = function(val){

//            var newLink = "data:application/octet-stream;charset=utf-8;base64,";
//            var base64 = btoa(val);
//            newLink += base64;
//
//            console.log(newLink);
//
//            $download_button.href = newLink;

        };


        /**
        *   Event listeners
        */
        $set_value_button.addEventListener('click',function() {
            var currentVal = query_editor.getValue();
            updateDownloadBase64(currentVal);
            var parsed = JSON.parse(currentVal);
            var verdict = jsoneditor.validate(parsed);
            if(!verdict.length || verdict == true){
                jsoneditor.setValue(parsed);
            }else{
                setValidationErrors(verdict);
            }
        });

//        $set_schema_button.addEventListener('click',function() {
//            try {
//                schema = JSON.parse(schema_editor.getValue());
//            }
//            catch(e) {
//                alert('Invalid Schema: '+e.message);
//                return;
//            }
//
//            reload();
//        });

        /**
        *   Theme loading, styling
        */
        var setTheme = function(no_reload) {
            JSONEditor.defaults.options.theme = 'bootstrap3';
            document.getElementById('theme_stylesheet').href = 'jsoneditor/css/bootstrap.min.css';
            if(!no_reload) reload(true);
        };
        setTheme(true);

        var setIconlib = function(no_reload) {
            JSONEditor.defaults.options.iconlib = 'fontawesome4';
            document.getElementById('icon_stylesheet').href = 'jsoneditor/css/font-awesome.css';
            if(!no_reload) reload(true);
        };
        setIconlib(true);


        /**
        *   Load schema
        */
        loadSchema(function(res){
            schema = res;
//            schema_editor.setValue(JSON.stringify(res, null, 2));
            reload();
        });
    };

    return t;

})();