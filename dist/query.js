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
        "allowMonthlyData" : {
            "title" : "Allow monthly data",
            "type" : "boolean",
            "propertyOrder": 4
        },
        "importTime" : {
            "title" : "Import time",
            "type" : "string",
            "propertyOrder": 5,
        },
        "importFile" : {
            "title" : "Import file",
            "type" : "string",
            "propertyOrder": 6
        },
        "active" : {
            "title" : "Active",
            "type" : "boolean",
            "propertyOrder": 7
        },
        "disableHighlight" : {
            "title": "Disable highlight",
            "description" : "Disable the highlight",
            "type" : "boolean",
            "propertyOrder": 8
        },
        "help" : {
            "title" : "Help",
            "type" : "object",
            "propertyOrder": 9,
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
            "propertyOrder": 10,
        },
        "lastUpdated" : {
            "title" : "Last updated",
            "type" : "string",
            "propertyOrder": 11,
        },
        "owner" : {
            "title" : "Owner",
            "type"  :   "string",
            "propertyOrder": 12,
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
            "type" : "array",
            "propertyOrder": 18,
            "items" : {
                "$ref"  : "dist/section.json"
            }
        },
    }
}