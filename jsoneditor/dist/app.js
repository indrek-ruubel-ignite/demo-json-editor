
var app = (function() {

    var t = {};

    var schema = null;
    var query_editor_id = "output";
    var languages_wrapper_id = "languages";
    var langsWrapper = null;
    var query_editor = null;
    var $validate = null;

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
    *   Helper functions
    */

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

    var getActiveLanguages = function(){
        var activeLangs = [];
        var checkboxes = langsWrapper.getElementsByTagName('input');
        for(i in checkboxes){
            var checkbox = checkboxes[i];
            if(checkbox.checked){
                activeLangs.push(checkbox.value);
            }
        }
        return activeLangs;
    }

    /**
    *   String manipulation
    */
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

            newObj = "{" + newObj;
            var parsed = JSON.parse(newObj);
            if(!parsed.hasOwnProperty(key)){
                parsed[key] = "";
            }
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


    /**
    *   Setup locales, format ["NO", "RU", "FI"]
    */
    t.setupLocales = function(arr){
        for(i in arr){
            var lang = arr[i];
            var label = document.createElement('label');
            label.innerHTML = lang + " ";
            langsWrapper.appendChild(label);

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = lang;
            langsWrapper.appendChild(checkbox);

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
    };

    /**
    *   Update languages
    */
    t.updateLanguages = function(){
        var langs = getActiveLanguages();
        var json = jsoneditor.getValue();
        var txt = JSON.stringify(json);
        for(i in langs){
            var lang = langs[i];
            txt = addTranslationWithKey(txt, lang);
        }
        t.setValue(txt);
    }


    /**
    *   Set value to editor, argument as object or string
    */
    t.setValue = function(obj){
        if(typeof obj !== 'object'){
            obj = JSON.parse(obj);
        }
        query_editor.setValue(JSON.stringify(obj, null, 2));
        jsoneditor.setValue(obj);
        var verdict = jsoneditor.validate(obj);
        if(!verdict.length || verdict == true){
            jsoneditor.setValue(obj);
        }else{
            setValidationErrors(verdict);
        }
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
        $validate = document.getElementById('validate');
        langsWrapper = document.getElementById(languages_wrapper_id);

        /**
        *   Buttons
        */
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


        /**
        *   Setup ACE editor
        */

        query_editor = ace.edit(query_editor_id);
        query_editor.setTheme("ace/theme/monokai");
        query_editor.getSession().setMode("ace/mode/javascript");
        query_editor.setOptions({
            maxLines: Infinity
        });
        query_editor.setValue("");

        /**
        *   Event listeners
        */
        $set_value_button.addEventListener('click',function() {
            var currentVal = query_editor.getValue();
            t.setValue(currentVal);
        });


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
        *   Load schema callback
        */
        loadSchema(function(res){
            schema = res;
            reload();
        });
    };

    return t;

})();