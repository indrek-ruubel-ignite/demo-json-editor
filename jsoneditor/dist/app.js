
var app = (function() {

    var t = {};

    var schema = null;
//    var schema_editor_id = "schema";
    var query_editor_id = "output";
    var lang_checkbox_class = "language";

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
    t.init = function(readyCallback){

        var jsoneditor;

        /**
        *   DOM elements
        */
        var $editor = document.getElementById('editor');
        var $validate = document.getElementById('validate');
        var langCheckboxes = document.getElementsByClassName(lang_checkbox_class);//(langs_button_id);
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
            }, function(){
                if(typeof readyCallback !== 'undefined'){
                    readyCallback();
                }
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

        // Takes tring as
        t.setValue = function(obj){
            if(typeof obj !== 'object'){
                obj = JSON.parse(obj);
            }
            query_editor.setValue(JSON.stringify(obj, null, 2));
//            updateDownloadBase64(currentVal);
            var verdict = jsoneditor.validate(obj);
            if(!verdict.length || verdict == true){
                jsoneditor.setValue(obj);
            }else{
                setValidationErrors(verdict);
            }
        };


        /**
        *   Event listeners
        */
        $set_value_button.addEventListener('click',function() {
            var currentVal = query_editor.getValue();
            t.setValue(currentVal);
        });

        function nth_occurrence (string, char, nth) {
            var first_index = string.indexOf(char);
            var length_up_to_first_index = first_index + 1;

            if (nth == 1) {
                return first_index;
            } else {
                var string_after_first_occurrence = string.slice(length_up_to_first_index);
                var next_occurrence = nth_occurrence(string_after_first_occurrence, char, nth - 1);

                if (next_occurrence === -1) {
                    return -1;
                } else {
                    return length_up_to_first_index + next_occurrence;
                }
            }
        }

        var removeAttributesWithKey = function(txt, key){
            var lookfor = '"' + key + '"';
            var startIndex = null;

            while((startIndex = txt.indexOf(lookfor)) > -1){
                var temp = txt.substring(startIndex, txt.length);
                var endIndex = nth_occurrence(temp, '"', 4);

                var beforeCommaRemove = false;

                if(txt.substring(startIndex-1, startIndex) === ","){
                    beforeCommaRemove = true;
                }

                if(txt.substring(startIndex+endIndex+1, startIndex+endIndex+2) === ","){
                    var toRemove = txt.substring(startIndex, startIndex+endIndex+2);
                }else{
                    var toRemove = txt.substring(startIndex + (beforeCommaRemove ? -1 : 0), startIndex+endIndex+1);
                }
                txt = txt.replace(toRemove, "");
            }
            return txt;
        }

        var addTranslationWithKey = function(txt, key){
            /**
            *   Find suspects
            */

            var lookfor = "{";
            var startIndex = null;
            var temp = txt;
            var charsFromBeginning = 0;

            var replacements = [];

            while((startIndex = temp.indexOf(lookfor)) > -1){
                charsFromBeginning += startIndex + 1;

                var temp = temp.substring(startIndex + 1, temp.length);

                var endIndex = temp.indexOf("}");
                var newObj = temp.substring(0, endIndex + 1);


                // Analyze if language obj
                if(newObj.indexOf("{") > -1)
                    continue;

//                console.log(txt.substring(charsFromBeginning - 20, charsFromBeginning));

                newObj = "{" + newObj;
                var parsed = JSON.parse(newObj);
                parsed[key] = "";
                newObj = JSON.stringify(parsed);

                var real = txt.substring(charsFromBeginning - 1, charsFromBeginning + endIndex + 1);

                replacements.push({
                    "new" : newObj,
                    "old" : real
                });
            }

            for(i in replacements){
                var obj = replacements[i];
                txt = txt.replace(obj["old"], obj["new"]);
            }

            return txt;
        }

        for(i in langCheckboxes){
            var checkbox = langCheckboxes[i];

            if(checkbox.nodeName === "INPUT"){
                checkbox.addEventListener('click', function(){
                    var json = jsoneditor.getValue();
                    var txt = JSON.stringify(json);
                    if(this.checked){
                        txt = addTranslationWithKey(txt, this.value);
                    }else{
                        txt = removeAttributesWithKey(txt, this.value);
                    }
                    t.setValue(txt);
                });
            }
        }

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