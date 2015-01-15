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
          "title" : "Id",
          "description": "Query Id",
          "propertyOrder": 1,
          "default": "default from schema"
        },
        "name": {
            "title" : "Title",
            "type": "object",
            "propertyOrder": 2,
            "additionalProperties" : false,
            "properties" : {
                "FI" : {
                    "description"   :   "Finnish title",
                    "type"          :   "string"
                },
                "EN" : {
                    "description"   :   "English title",
                    "type"          :   "string"
                }
            }
        },
        "purpose" : {
            "title" : "Purpose",
            "type": "object",
            "propertyOrder": 3,
            "additionalProperties" : false,
            "defaultProperties": ["EN", "FI"],
            "properties" : {
                "FI" : {
                    "description"   :   "Finnish title",
                    "type"          :   "string"
                },
                "EN" : {
                    "description"   :   "English title",
                    "type"          :   "string"
                }
            }
        },
        "sections" : {
            "title": "Sections",
            "type" : "array",
            "propertyOrder": 4,
            "items" : {
                "$ref"  : "dist/section.json"
            }
        },
        "allowMonthlyData" : {
            "title" : "Allow monthly data",
            "type" : "boolean",
            "propertyOrder": 5
        },
        "summaryData" : {
            "title" : "Summary data",
            "type"  :   "array",
            "propertyOrder": 6,
            "items" :   {
                "type"          :   "object",
                "properties"    :   {
                }
            }
        },
        "importTime" : {
            "title" : "Import time",
            "type" : "string",
            "propertyOrder": 7,
        },
        "importFile" : {
            "title" : "Import file",
            "type" : "string",
            "propertyOrder": 8
        },
        "active" : {
            "title" : "Active",
            "type" : "boolean",
            "propertyOrder": 9
        },
        "disableHighlight" : {
            "title": "Disable highlight",
            "description" : "Disable the highlight",
            "type" : "boolean",
            "propertyOrder": 10
        },
        "help" : {
            "title" : "Help",
            "type" : "object",
            "propertyOrder": 11,
            "additionalProperties" : false,
            "properties" : {
                "FI" : { "type" : "string" },
                "EN" : { "type" : "string" }
            }
        },
        "componentQuery" : {
            "title" : "Component Query",
            "description" : "Query can only be used for entity with entityClass == “component” and componentAbilityLicensed (mapping entity datasets as resources).",
            "type" : "boolean",
            "propertyOrder": 12,
        },
        "includedSections" : {
            "title" : "Included sections",
            "type" : "array",
            "propertyOrder": 13,
            "items" : {
                "type" : "object",
                "additionalProperties" : false,
                "properties" : {

                }
            }
        },

        /**
        *   Illegal parameters, according to spec
        */
        // inputType - additional option "checkbox"
        // in questions - illegal param "mapToResourceType"
        // in questions - illegal param "defaultValue"
        // in questions - illegal param "valueConstraints"
        // in questions - "defaultValue" was string and number, can only be one type
        // in questions - illegal param "licenseKey"

        "lastUpdated" : {
            "title" : "Last updated",
            "type" : "string",
            "propertyOrder": 14,
        },
        "owner" : {
            "title" : "Owner",
            "type"  :   "string",
            "propertyOrder": 15,
        },
        "status" : {
            "title" : "Status",
            "type"  :   "string",
            "propertyOrder": 16
        },
        "last_modified" : {
            "title" : "Last modified",
            "type"  : "string",
            "propertyOrder": 17
        },

        // Comment: One query had mupltiple "v" and "update" fields,
        // but the last one will be overridden.
        "history" : {
            "title" : "History",
            "type" : "object",
            "propertyOrder": 18,
            "properties" : {
                "v" : {
                    "type" : "string"
                },
                "update" : {
                    "type" : "string"
                }
            }
        }
    }
}