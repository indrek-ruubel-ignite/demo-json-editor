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
                "title": "Section",
                "type" : "object",
                "required" : ["sectionId", "name"],
                "defaultProperties": ["sectionId", "name"],
                "additionalProperties" : false,
                "properties" : {
                    "sectionId" : {
                        "title" :   "Id",
                        "propertyOrder": 1,
                        "type"  :   "string"
                    },
                    "name" : {
                        "title" :   "Name",
                        "propertyOrder": 2,
                        "type" : "object",
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
                    "help"  : {
                        "type" : "object",
                        "propertyOrder": 3,
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
                    "skipInResultsView" : {
                        "type" : "boolean",
                        "propertyOrder": 4
                    },
                    "includeSectionIds" : {
                        "type" : "object",
                        "propertyOrder": 5,
                        "additionalProperties" : false,
                        "properties" : {
                        }
                    },
                    "defaults" : {
                        "type" : "object",
                        "propertyOrder": 6,
                        "additionalProperties" : false,
                        "properties" : {
                        }
                    },
                    "questions" : {
                        "title" : "Questions",
                        "propertyOrder": 7,
                        "type" : "array",
                        "items" : {
                            "title" : "Question",
                            "type" : "object",
                            "required" : ["questionId", "question"],
                            "defaultProperties": ["questionId", "question"],
                            "additionalProperties" : false,
                            "properties" : {
                                "questionId" : {
                                    "type" : "string",
                                    "propertyOrder": 1,
                                },
                                "question" : {
                                    "type" : "object",
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
                                "help"  : {
                                    "type" : "object",
                                    "propertyOrder": 3,
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
                                "inputType" : {
                                    "type": "string",
                                    "propertyOrder": 4,
                                    "enum" : [
                                        "text",
                                        "checkbox",
                                        "select",
                                        "hidden",
                                        "textArea",
                                        "slider"
                                    ]
                                },
                                "sliderParameters" : {
                                    "type" : "object",
                                    "propertyOrder": 5,
                                    "additionalProperties" : false,
                                    "properties" : {
                                    }
                                },
                                "resourceGroups" : {
                                    "type" : "array",
                                    "propertyOrder": 6,
                                },
                                "filterResources" : {
                                    "type" : "object",
                                    "propertyOrder": 7,
                                    "additionalProperties" : false,
                                    "properties" : {
                                    }
                                },
                                "useTextIfListEmpty" : {
                                    "type" : "boolean",
                                    "propertyOrder": 8
                                },
                                "multipleChoicesAllowed" : {
                                    "title" : "Multiple choices",
                                    "type" : "boolean",
                                    "propertyOrder": 9
                                },
                                "persistent" : {
                                    "type" : "boolean",
                                    "propertyOrder": 10
                                },
                                "unit"  : {
                                    "type" : "object",
                                    "propertyOrder": 11,
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
                                "showAnswerInResults" : {
                                    "type" : "boolean"
                                },
                                "optional" : {
                                    "type" : "boolean",
                                    "propertyOrder": 12,
                                },
                                "entityClasses" : {
                                    "type" : "array",
                                    "propertyOrder": 13,
                                    "items" : {
                                        "type" : "string"
                                    }
                                },
                                "inputWidth" : {
                                    "type" : "number",
                                    "propertyOrder": 14,
                                },
                                "inputHeight" : {
                                    "type" : "number",
                                    "propertyOrder": 15
                                },
                                "additionalQuestionIds" :{
                                    "type" : "array",
                                    "propertyOrder": 16,
                                    "items" : {
                                        "type" : "string"
                                    }
                                },
                                "defaultValue" : {
                                    "type" : "string",
                                    "propertyOrder": 17
                                },
                                "quantity" : {
                                    "type" : "boolean",
                                    "propertyOrder": 18
                                },
                                "recurringReplacement" : {
                                    "type" : "boolean",
                                    "propertyOrder": 19
                                },
                                "showTypeahead" : {
                                    "type" : "boolean",
                                    "propertyOrder": 20
                                },
                                "valueConstraints" : {
                                    "type" : "object",
                                    "propertyOrder": 21,
                                    "additionalProperties" : false,
                                    "properties" : {
                                    }
                                },

                                "choices" : {
                                    "type"  : "array",
                                    "propertyOrder": 22,
                                    "items" : {
                                        "title" : "Choice",
                                        "type"  : "object",
                                        "additionalProperties" : false,
                                        "required" : ["answer", "answerId"],
                                        "defaultProperties": ["answer", "answerId"],
                                        "properties"    :   {
                                            "answerId" : {
                                                "type" : "string"
                                            },
                                            "answer" : {
                                                "type" : "object",
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
                                            "help"  : {
                                                "type" : "object",
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
                                                            "type": "string",
                                                            "enum" : [
                                                                "text",
                                                                "checkbox",
                                                                "select",
                                                                "hidden",
                                                                "textArea",
                                                                "slider"
                                                            ]
                                                        },
                                                        "optional" : {
                                                            "type" : "boolean"
                                                        },
                                                        "question" : {
                                                            "type" : "object",
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
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "ifChoseSectionIds" : {
                                                "type" : "array",
                                                "items" : {
                                                    "type" : "string"
                                                }
                                            },
                                            "additionalQuestionIds" : {
                                                "type" : "array",
                                                "items" : {
                                                    "type" : "string"
                                                }
                                            }
                                        }
                                    }
                                },

                                "allowedExtensions" : {
                                    "type" : "array",
                                    "propertyOrder": 23,
                                    "items" : {
                                        "type" : "object",
                                        "additionalProperties" : false,
                                        "properties" : {
                                        }
                                    }
                                },
                                "maximumSize" : {
                                    "type" : "number",
                                    "propertyOrder": 24
                                },
                                "preventDoubleEntries" : {
                                    "type" : "boolean",
                                    "propertyOrder": 25
                                },

                                "defaultResourceId" : {
                                    "type" : "string",
                                    "propertyOrder": 26
                                },

                                "defaultValueFromResource" : {
                                    "type" : "string",
                                    "propertyOrder": 27
                                },

                                /**
                                *   Illegal
                                */
                                "mapToResourceType" : {
                                    "type" : "string",
                                    "propertyOrder": 28
                                },

                                "defaultValue" : {
                                    "type" : "string",
                                    "propertyOrder": 29
                                },

                                "valueConstraints" : {
                                    "type" : "object",
                                    "propertyOrder": 30,
                                    "properties" : {
                                        "type" : {
                                            "type" : "string"
                                        },
                                        "min" : {
                                            "type" : "number"
                                        },
                                        "max" : {
                                            "type" : "number"
                                        }
                                    }
                                },

                                "licenseKey" : {
                                    "type" : "string",
                                    "propertyOrder": 31
                                }
                            }
                        }
                    },

                    "sections" : {
                        "title": "Sections",
                        "propertyOrder": 8,
                        "type" : "array",
                        "items" : {
                            "title": "Section",
                            "type" : "object",
                            "required" : ["sectionId", "name"],
                            "defaultProperties": ["sectionId", "name"],
                            "additionalProperties" : false,
                            "properties" : {
                                 "sectionId" : {
                                     "title" :   "Id",
                                     "propertyOrder": 1,
                                     "type"  :   "string"
                                 },
                                 "name" : {
                                     "title" :   "Name",
                                     "propertyOrder": 2,
                                     "type" : "object",
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
                                 "help"  : {
                                     "type" : "object",
                                     "propertyOrder": 3,
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
                                 "skipInResultsView" : {
                                     "type" : "boolean",
                                     "propertyOrder": 4,
                                 },
                                 "includeSectionIds" : {
                                     "type" : "object",
                                     "propertyOrder": 5,
                                     "additionalProperties" : false,
                                     "properties" : {
                                     }
                                 },
                                 "defaults" : {
                                     "type" : "object",
                                     "propertyOrder": 6,
                                     "additionalProperties" : false,
                                     "properties" : {
                                     }
                                 },
                                 "questions" : {
                                 "title" : "Questions",
                                 "propertyOrder": 7,
                                 "type" : "array",
                                 "items" : {
                                     "title" : "Question",
                                     "type" : "object",
                                     "required" : ["questionId", "question"],
                                     "defaultProperties": ["questionId", "question"],
                                     "additionalProperties" : false,
                                     "properties" : {
                                         "questionId" : {
                                             "type" : "string",
                                             "propertyOrder": 1,
                                         },
                                         "question" : {
                                             "type" : "object",
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
                                         "help"  : {
                                             "type" : "object",
                                             "propertyOrder": 3,
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
                                         "inputType" : {
                                             "type": "string",
                                             "propertyOrder": 4,
                                             "enum" : [
                                                 "text",
                                                 "checkbox",
                                                 "select",
                                                 "hidden",
                                                 "textArea",
                                                 "slider"
                                             ]
                                         },
                                         "sliderParameters" : {
                                             "type" : "object",
                                             "propertyOrder": 5,
                                             "additionalProperties" : false,
                                             "properties" : {
                                             }
                                         },
                                         "resourceGroups" : {
                                             "type" : "array",
                                             "propertyOrder": 6
                                         },
                                         "filterResources" : {
                                             "type" : "object",
                                             "propertyOrder": 7,
                                             "additionalProperties" : false,
                                             "properties" : {
                                             }
                                         },
                                         "useTextIfListEmpty" : {
                                             "type" : "boolean",
                                             "propertyOrder": 8
                                         },
                                         "multipleChoicesAllowed" : {
                                             "title" : "Multiple choices",
                                             "type" : "boolean",
                                             "propertyOrder": 9
                                         },
                                         "persistent" : {
                                             "type" : "boolean",
                                             "propertyOrder": 10
                                         },
                                         "unit"  : {
                                             "type" : "object",
                                             "propertyOrder": 11,
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
                                         "showAnswerInResults" : {
                                             "type" : "boolean",
                                             "propertyOrder": 12,
                                         },
                                         "optional" : {
                                             "type" : "boolean",
                                             "propertyOrder": 13,
                                         },
                                         "entityClasses" : {
                                             "type" : "array",
                                             "propertyOrder": 14,
                                             "items" : {
                                                 "type" : "string"
                                             }
                                         },
                                         "inputWidth" : {
                                             "type" : "number",
                                             "propertyOrder": 15,
                                         },
                                         "inputHeight" : {
                                             "type" : "number",
                                             "propertyOrder": 16,
                                         },
                                         "additionalQuestionIds" :{
                                             "type" : "array",
                                             "propertyOrder": 17,
                                             "items" : {
                                                 "type" : "string"
                                             }
                                         },
                                         "defaultValue" : {
                                             "type" : "string",
                                             "propertyOrder": 18,
                                         },
                                         "quantity" : {
                                             "type" : "boolean",
                                             "propertyOrder": 19,
                                         },
                                         "recurringReplacement" : {
                                             "type" : "boolean",
                                             "propertyOrder": 20
                                         },
                                         "showTypeahead" : {
                                             "type" : "boolean",
                                             "propertyOrder": 21
                                         },
                                         "valueConstraints" : {
                                             "type" : "object",
                                             "propertyOrder": 22,
                                             "additionalProperties" : false,
                                             "properties" : {
                                             }
                                         },

                                         "choices" : {
                                             "type"  : "array",
                                             "propertyOrder": 23,
                                             "items" : {
                                                 "title" : "Choice",
                                                 "type"  : "object",
                                                 "additionalProperties" : false,
                                                 "required" : ["answer", "answerId"],
                                                 "defaultProperties": ["answer", "answerId"],
                                                 "properties"    :   {
                                                     "answerId" : {
                                                         "type" : "string"
                                                     },
                                                     "answer" : {
                                                         "type" : "object",
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
                                                     "help"  : {
                                                         "type" : "object",
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
                                                                     "type": "string",
                                                                     "enum" : [
                                                                         "text",
                                                                         "checkbox",
                                                                         "select",
                                                                         "hidden",
                                                                         "textArea",
                                                                         "slider"
                                                                     ]
                                                                 },
                                                                 "optional" : {
                                                                     "type" : "boolean"
                                                                 },
                                                                 "question" : {
                                                                     "type" : "object",
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
                                                                         }
                                                                     }
                                                                 }
                                                             }
                                                         }
                                                     },
                                                     "ifChoseSectionIds" : {
                                                         "type" : "array",
                                                         "items" : {
                                                             "type" : "string"
                                                         }
                                                     },
                                                     "additionalQuestionIds" : {
                                                         "type" : "array",
                                                         "items" : {
                                                             "type" : "string"
                                                         }
                                                     }
                                                 }
                                             }
                                         },

                                         "allowedExtensions" : {
                                             "type" : "array",
                                             "propertyOrder": 24,
                                             "items" : {
                                                 "type" : "object",
                                                 "additionalProperties" : false,
                                                 "properties" : {
                                                 }
                                             }
                                         },
                                         "maximumSize" : {
                                             "type" : "number",
                                             "propertyOrder": 25
                                         },
                                         "preventDoubleEntries" : {
                                             "type" : "boolean",
                                             "propertyOrder": 26
                                         },

                                         "defaultResourceId" : {
                                             "type" : "string",
                                             "propertyOrder": 27
                                         },

                                         "defaultValueFromResource" : {
                                             "type" : "string",
                                             "propertyOrder": 28
                                         },

                                         /**
                                         *   Illegal
                                         */
                                         "mapToResourceType" : {
                                             "type" : "string",
                                             "propertyOrder": 29
                                         },

                                         "defaultValue" : {
                                             "type" : "string",
                                             "propertyOrder": 30
                                         },

                                         "valueConstraints" : {
                                             "type" : "object",
                                             "propertyOrder": 31,
                                             "properties" : {
                                                 "type" : {
                                                     "type" : "string"
                                                 },
                                                 "min" : {
                                                     "type" : "number"
                                                 },
                                                 "max" : {
                                                     "type" : "number"
                                                 }
                                             }
                                         },

                                         "licenseKey" : {
                                            "type" : "string",
                                            "propertyOrder": 32
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
        "allowMonthlyData" : {
            "type" : "boolean",
            "propertyOrder": 5
        },
        "summaryData" : {
            "type"  :   "array",
            "propertyOrder": 6,
            "items" :   {
                "type"          :   "object",
                "additionalProperties" : false,
                "properties"    :   {

                }
            }
        },
        "importTime" : {
            "type" : "string",
            "propertyOrder": 7,
        },
        "importFile" : {
            "type" : "string",
            "propertyOrder": 8
        },
        "active" : {
            "type" : "boolean",
            "propertyOrder": 9
        },
        "disableHighlight" : {
            "type" : "boolean",
            "propertyOrder": 10
        },
        "help" : {
            "type" : "object",
            "propertyOrder": 11,
            "additionalProperties" : false,
            "properties" : {
                "FI" : { "type" : "string" },
                "EN" : { "type" : "string" }
            }
        },
        "componentQuery" : {
            "type" : "boolean",
            "propertyOrder": 12,
        },
        "includedSections" : {
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
            "type" : "string",
            "propertyOrder": 14,
        },
        "owner" : {
            "type"  :   "string",
            "propertyOrder": 15,
        },
        "status" : {
            "type"  :   "string",
            "propertyOrder": 16
        },
        "last_modified" : {
            "type"  : "string",
            "propertyOrder": 17
        },

        // Comment: One query had mupltiple "v" and "update" fields,
        // but the last one will be overridden.
        "history" : {
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