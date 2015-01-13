var query_schema = {
    "title": "Query",
    "description": "Query object",
    "type": "object",
    "required"	:	["queryId", "sections", "name"],
    "additionalProperties" : false,
    "properties": {
        "queryId": {
          "type": "string",
          "title" : "QueryId",
          "description": "UniqueId",
          "default": "default from schema"
        },

        "name": {
            "title" : "Title",
            "type": "object",
            "additionalProperties" : false,
            "properties" : {
                "FI" : {"type" : "string"},
                "EN" : {"type" : "string"}
            }
        },
        "purpose" : {
            "title" : "Purpose",
            "type": "object",
            "additionalProperties" : false,
            "properties" : {
                "FI" : {"type" : "string"},
                "EN" : {"type" : "string"}
            }
        },
        "sections" : {
            "title": "Sections",
            "type" : "array",
            "items" : {
                "title": "Section",
                "type" : "object",
                "required" : ["sectionId"],
                "additionalProperties" : false,
                "properties" : {
                    "sectionId" : {
                        "type" : "string"
                    },
                    "help"  : {
                        "type" : "object",
                        "additionalProperties" : false,
                        "properties" : {
                            "FI" : { "type" : "string" },
                            "EN" : { "type" : "string" }
                        }
                    },
                    "skipInResultsView" : {
                        "type" : "boolean"
                    },
                    "name" : {
                        "type" : "object",
                        "additionalProperties" : false,
                        "properties" : {
                            "FI" : { "type" : "string" },
                            "EN" : { "type" : "string" }
                        }
                    },
                    "questions" : {
                        "title" : "Questions",
                        "type" : "array",
                        "items" : {
                            "title" : "Question",
                            "type" : "object",
                            "additionalProperties" : false,
                            "properties" : {
                                "questionId" : {
                                    "type" : "string"
                                },
                                "inputType" : {
                                    "type" : "string"
                                },
                                "unit"  : {
                                    "type" : "object",
                                    "additionalProperties" : false,
                                    "properties" : {
                                        "FI" : { "type" : "string" }
                                    }
                                },
                                "showAnswerInResults" : {
                                    "type" : "boolean"
                                },
                                "optional" : {
                                    "type" : "boolean"
                                },
                                "question" : {
                                    "type" : "object",
                                    "additionalProperties" : false,
                                    "properties" : {
                                        "FI" : { "type" : "string" },
                                        "EN" : { "type" : "string" }
                                    }
                                },
                                "answer" : {
                                    "type" : "object",
                                    "additionalProperties" : false,
                                    "properties" : {
                                        "FI" : { "type" : "string" },
                                        "EN" : { "type" : "string" }
                                    }
                                },
                                "answerId" : {
                                    "type" : "string"
                                },

                                "pointsFactor" : {
                                    "type" : "number"
                                },

                                "help"  : {
                                    "type" : "object",
                                    "additionalProperties" : false,
                                    "properties" : {
                                        "FI" : { "type" : "string" },
                                        "EN" : { "type" : "string" }
                                    }
                                },

                                "choices" : {
                                    "type"  : "array",
                                    "items" : {
                                        "title" : "Choice",
                                        "type"  : "object",
                                        "properties"    :   {
                                            "answer" : {
                                                "type" : "object",
                                                "additionalProperties" : false,
                                                "properties" : {
                                                    "FI" : { "type" : "string" },
                                                    "EN" : { "type" : "string" }
                                                }
                                            },
                                            "answerId" : {
                                                "type" : "string"
                                            },
                                            "pointsFactor" : {
                                                "type" : "number"
                                            },
                                            "ifChosen" : {
                                                "type" : "array",
                                                "items": {
                                                    "type" : "object",
                                                    "additionalProperties" : false,
                                                    "properties" : {
                                                        "questionId" : {
                                                            "type" : "string"
                                                        },
                                                        "inputType" : {
                                                            "type" : "string"
                                                        },
                                                        "optional" : {
                                                            "type" : "boolean"
                                                        },
                                                        "question" : {
                                                            "type" : "object",
                                                            "additionalProperties" : false,
                                                            "properties" : {
                                                                "FI" : { "type" : "string" },
                                                                "EN" : { "type" : "string" }
                                                            }
                                                        },
                                                        "choices" : {
                                                            "type"  : "array",
                                                            "items" : {
                                                                "title" : "Choice",
                                                                "type"  : "object",
                                                                "additionalProperties" : false,
                                                                "properties"    :   {
                                                                    "answer" : {
                                                                        "type" : "object",
                                                                        "additionalProperties" : false,
                                                                        "properties" : {
                                                                            "FI" : { "type" : "string" },
                                                                            "EN" : { "type" : "string" }
                                                                        }
                                                                    },
                                                                    "answerId" : {
                                                                        "type" : "string"
                                                                    },
                                                                    "pointsFactor" : {
                                                                        "type" : "number"
                                                                    },
                                                                    "help"  : {
                                                                        "type" : "object",
                                                                        "additionalProperties" : false,
                                                                        "properties" : {
                                                                            "FI" : { "type" : "string" },
                                                                            "EN" : { "type" : "string" }
                                                                        }
                                                                    },
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },

                                "ifChosen" : {
                                    "type" : "array",
                                    "items": {
                                        "type" : "object",
                                        "additionalProperties" : false,
                                        "properties" : {
                                            "questionId" : {
                                                "type" : "string"
                                            },
                                            "inputType" : {
                                                "type" : "string"
                                            },
                                            "optional" : {
                                                "type" : "boolean"
                                            },
                                            "question" : {
                                                "type" : "object",
                                                "additionalProperties" : false,
                                                "properties" : {
                                                    "FI" : { "type" : "string" },
                                                    "EN" : { "type" : "string" }
                                                }
                                            },
                                            "choices" : {
                                                "type"  : "array",
                                                "items" : {
                                                    "title" : "Choice",
                                                    "type"  : "object",
                                                    "additionalProperties" : false,
                                                    "help"  : {
                                                        "type" : "object",
                                                        "additionalProperties" : false,
                                                        "properties" : {
                                                            "FI" : { "type" : "string" },
                                                            "EN" : { "type" : "string" }
                                                        }
                                                    },
                                                    "properties"    :   {
                                                        "answer" : {
                                                            "type" : "object",
                                                            "additionalProperties" : false,
                                                            "properties" : {
                                                                "FI" : { "type" : "string" },
                                                                "EN" : { "type" : "string" }
                                                            }
                                                        },
                                                        "answerId" : {
                                                            "type" : "string"
                                                        },
                                                        "pointsFactor" : {
                                                            "type" : "number"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    },

                    "sections" : {
                                "title": "Sections",
                                "type" : "array",
                                "items" : {
                                    "title": "Section",
                                    "type" : "object",
                                    "required" : ["sectionId"],
                                    "additionalProperties" : false,
                                    "properties" : {
                                        "sectionId" : {
                                            "type" : "string"
                                        },
                                        "help"  : {
                                            "type" : "object",
                                            "additionalProperties" : false,
                                            "properties" : {
                                                "FI" : { "type" : "string" },
                                                "EN" : { "type" : "string" }
                                            }
                                        },
                                        "skipInResultsView" : {
                                            "type" : "boolean"
                                        },
                                        "name" : {
                                            "type" : "object",
                                            "additionalProperties" : false,
                                            "properties" : {
                                                "FI" : { "type" : "string" },
                                                "EN" : { "type" : "string" }
                                            }
                                        },
                                        "questions" : {
                                            "title" : "Questions",
                                            "type" : "array",
                                            "items" : {
                                                "title" : "Question",
                                                "type" : "object",
                                                "additionalProperties" : false,
                                                "properties" : {
                                                    "questionId" : {
                                                        "type" : "string"
                                                    },
                                                    "inputType" : {
                                                        "type" : "string"
                                                    },
                                                    "optional" : {
                                                        "type" : "boolean"
                                                    },
                                                    "unit"  : {
                                                        "type" : "object",
                                                        "additionalProperties" : false,
                                                        "properties" : {
                                                            "FI" : { "type" : "string" }
                                                        }
                                                    },
                                                    "showAnswerInResults" : {
                                                        "type" : "boolean"
                                                    },
                                                    "question" : {
                                                        "type" : "object",
                                                        "additionalProperties" : false,
                                                        "properties" : {
                                                            "FI" : { "type" : "string" },
                                                            "EN" : { "type" : "string" }
                                                        }
                                                    },
                                                    "answer" : {
                                                        "type" : "object",
                                                        "additionalProperties" : false,
                                                        "properties" : {
                                                            "FI" : { "type" : "string" },
                                                            "EN" : { "type" : "string" }
                                                        }
                                                    },
                                                    "answerId" : {
                                                        "type" : "string"
                                                    },

                                                    "pointsFactor" : {
                                                        "type" : "number"
                                                    },

                                                    "help"  : {
                                                        "type" : "object",
                                                        "additionalProperties" : false,
                                                        "properties" : {
                                                            "FI" : { "type" : "string" },
                                                            "EN" : { "type" : "string" }
                                                        }
                                                    },

                                                    "choices" : {
                                                        "type"  : "array",
                                                        "items" : {
                                                            "title" : "Choice",
                                                            "type"  : "object",
                                                            "properties"    :   {
                                                                "answer" : {
                                                                    "type" : "object",
                                                                    "additionalProperties" : false,
                                                                    "properties" : {
                                                                        "FI" : { "type" : "string" },
                                                                        "EN" : { "type" : "string" }
                                                                    }
                                                                },
                                                                "answerId" : {
                                                                    "type" : "string"
                                                                },
                                                                "pointsFactor" : {
                                                                    "type" : "number"
                                                                },
                                                                "ifChosen" : {
                                                                    "type" : "array",
                                                                    "items": {
                                                                        "type" : "object",
                                                                        "additionalProperties" : false,
                                                                        "properties" : {
                                                                            "questionId" : {
                                                                                "type" : "string"
                                                                            },
                                                                            "inputType" : {
                                                                                "type" : "string"
                                                                            },
                                                                            "optional" : {
                                                                                "type" : "boolean"
                                                                            },
                                                                            "question" : {
                                                                                "type" : "object",
                                                                                "additionalProperties" : false,
                                                                                "properties" : {
                                                                                    "FI" : { "type" : "string" },
                                                                                    "EN" : { "type" : "string" }
                                                                                }
                                                                            },
                                                                            "choices" : {
                                                                                "type"  : "array",
                                                                                "items" : {
                                                                                    "title" : "Choice",
                                                                                    "type"  : "object",
                                                                                    "additionalProperties" : false,
                                                                                    "properties"    :   {
                                                                                        "answer" : {
                                                                                            "type" : "object",
                                                                                            "additionalProperties" : false,
                                                                                            "properties" : {
                                                                                                "FI" : { "type" : "string" },
                                                                                                "EN" : { "type" : "string" }
                                                                                            }
                                                                                        },
                                                                                        "answerId" : {
                                                                                            "type" : "string"
                                                                                        },
                                                                                        "pointsFactor" : {
                                                                                            "type" : "number"
                                                                                        },
                                                                                        "help"  : {
                                                                                            "type" : "object",
                                                                                            "additionalProperties" : false,
                                                                                            "properties" : {
                                                                                                "FI" : { "type" : "string" },
                                                                                                "EN" : { "type" : "string" }
                                                                                            }
                                                                                        },
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },

                                                    "ifChosen" : {
                                                        "type" : "array",
                                                        "items": {
                                                            "type" : "object",
                                                            "additionalProperties" : false,
                                                            "properties" : {
                                                                "questionId" : {
                                                                    "type" : "string"
                                                                },
                                                                "inputType" : {
                                                                    "type" : "string"
                                                                },
                                                                "optional" : {
                                                                    "type" : "boolean"
                                                                },
                                                                "question" : {
                                                                    "type" : "object",
                                                                    "additionalProperties" : false,
                                                                    "properties" : {
                                                                        "FI" : { "type" : "string" },
                                                                        "EN" : { "type" : "string" }
                                                                    }
                                                                },
                                                                "choices" : {
                                                                    "type"  : "array",
                                                                    "items" : {
                                                                        "title" : "Choice",
                                                                        "type"  : "object",
                                                                        "additionalProperties" : false,
                                                                        "help"  : {
                                                                            "type" : "object",
                                                                            "additionalProperties" : false,
                                                                            "properties" : {
                                                                                "FI" : { "type" : "string" },
                                                                                "EN" : { "type" : "string" }
                                                                            }
                                                                        },
                                                                        "properties"    :   {
                                                                            "answer" : {
                                                                                "type" : "object",
                                                                                "additionalProperties" : false,
                                                                                "properties" : {
                                                                                    "FI" : { "type" : "string" },
                                                                                    "EN" : { "type" : "string" }
                                                                                }
                                                                            },
                                                                            "answerId" : {
                                                                                "type" : "string"
                                                                            },
                                                                            "pointsFactor" : {
                                                                                "type" : "number"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                }
                            },

                }
            }
        },
        "last_modified" : {
            "type" : "string"
        },
        "owner" : {
            "type" : "string"
        },
        "status" : {
            "type" : "string"
        }
    }
}

//{
//    "questionId" : "autopaikkaValinnat",
//    "question" : { "FI"  : "Valitse ne vaihtoehdot, joiden vastaus on kyllä" },
//    "inputType" : "checkbox",
//    "optional" : true,
//    "choices" : [
//        {
//        "answerId" : "autopaikkojenRiittavyys",
//        "answer" : { "FI" : "Esteettömiä autopaikkoja on riittävästi"},
//        "help" : {"FI" : "Vähintään 2 paikkaa ensimmäistä 50 pysäköintopaikkaa kohden ja sen jälkeen 1 lisäpaikka 50 pysäköintipaikkaa kohden."},
//        "pointsFactor" : 1
//        }
//    ]
//}