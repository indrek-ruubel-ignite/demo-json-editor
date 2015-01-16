var query_schema = {
    "title": "Query",
    "description": "Query object",
    "type": "object",
    "required"	:	["queryId", "name", "sections"],
    "defaultProperties": ["queryId", "name", "sections"],
    "additionalProperties" : false,
    "properties": {
        "queryId": {
          "type": "string",
          "minLength" : 1,
          "pattern" : "^[a-zA-Z0-9_]+$",
          "optional" : false,
          "title" : "Id",
          "description": "Query Id",
          "propertyOrder": 1,
          "default": "1"
        },
        "name": {
            "title" : "Name",
            "propertyOrder": 2,
            "$ref" : "dist/language.json"
        },
        "purpose" : {
            "title" : "Purpose",
            "propertyOrder": 3,
            "$ref" : "dist/language.json"
        },
        "allowMonthlyData" : {
            "title" : "Allow monthly data",
            "type" : "boolean",
            "propertyOrder": 4
        },
        "disableHighlight" : {
            "title": "Disable highlight",
            "description" : "Disable the highlight",
            "type" : "boolean",
            "propertyOrder": 8
        },
        "help" : {
            "title" : "Help",
            "propertyOrder": 9,
            "$ref" : "dist/language.json"
        },
        "componentQuery" : {
            "title" : "Component Query",
            "description" : "Query can only be used for entity with entityClass == “component” and componentAbilityLicensed (mapping entity datasets as resources).",
            "type" : "boolean",
            "propertyOrder": 10,
        },
        "status" : {
            "title" : "Status",
            "type"  :   "string",
            "propertyOrder": 13
        },
        "last_modified" : {
            "title" : "Last modified",
            "type"  : "string",
            "propertyOrder": 14
        },
        "history" : {
            "title" : "History",
            "type" : "object",
            "additionalProperties" : true,
            "propertyOrder": 15
        },
        "includedSections" : {
            "title" : "Included sections",
            "type" : "array",
            "propertyOrder": 16,
            "items" : {
                "type" : "object",
                "additionalProperties" : false,
                "properties" : {

                }
            }
        },
        "summaryData" : {
            "title" : "Summary data",
            "type"  :   "array",
            "propertyOrder": 17,
            "items" :   {
                "type"          :   "object",
                "properties"    :   {
                }
            }
        },
        "sections" : {
            "title": "Sections",
            "description" : "Sections",
            "type" : "array",
            "propertyOrder": 18,
            "items" : {
                "$ref"  : "dist/section.json"
            }
        },
    }
}