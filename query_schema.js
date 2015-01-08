var query_schema = {
    "title": "Query",
    "description": "Query object",
    "type": "object",
    "required"	:	["queryId", "sections", "name"],
    "properties": {
        "queryId": {
          "type": "string",
          "title" : "QueryId",
          "description": "UniqueId",
          "default": "default from schema"
        },

        "name": {
            "type": "object",
            "properties" : {
                "FI" : {"type" : "string"},
                "EN" : {"type" : "string"}
            }
        },
        "purpose" : {
            "type": "object",
            "properties" : {
                "FI" : {"type" : "string"},
                "EN" : {"type" : "string"}
            }
        },
        "sections" : {
            "type" : "array",
            "items" : {
                "type" : "object",
                "required" : ["sectionId"],
                "properties" : {
                    "sectionId" : {
                        "type" : "string"
                    },
                    "questions" : {
                        "type" : "array",
                        "items" : {
                            "type" : "object"
//                            ,
//                            "properties" : {
//                                "question" : {
//                                    "type" : "string"
//                                }
//                            }
                        }
                    }
                }
            }
        }
    }
}