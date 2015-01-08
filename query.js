{
    "queryId": "hotelLaundry",
    "lastUpdated" : "17.7.2014",
    "owner" : "Bionova Consulting",
    "name" : { "EN" : "Hotel Laundry" , "FI" : "Hotellin pyykinpesu"},
    "purpose" : { "EN" : "This query collects data about hotel laundry.", "FI" : "Kysely kerää tietoa hotellin pyykin määrästä." },

    "sections": [
        {
        "sectionId" : "laundry",
        "name" : { "EN" : "Amount of laundry", "FI" : "Pyykin määrä" },
        "help" : { "EN" : "Please This section is mandatory only if laundry is not done on the premises.", "FI" : "Tämä osio on pakollinen vain jos pesulapalvelu on ulkoistettu."},
        "questions" : [
             {
             "questionId" : "laundry_kg",
             "question" : { "EN"  : "Provide the amount of laundry, separate outsourced and inhouse.", "FI": "Syötä pyykin määrä, erottele alihankintana ja hotellilla pestävä pyykki." },
             "inputType" : "select",
             "resourceGroups" : ["laundry"],
             "multipleChoicesAllowed" : true,
             "quantity" : true,
             "additionalQuestionIds" : ["comment"]
             }
            ]
        }
    ]
}