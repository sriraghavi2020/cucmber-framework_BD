$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/BDFramework/FeatureFiles/restAPI_Response.feature");
formatter.feature({
  "name": "restAPI old method to save the output in file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Delete Call using old method",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall_Response"
    }
  ]
});
formatter.step({
  "name": "Base URI for API call",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "http://localhost:3000"
      ]
    }
  ]
});
formatter.step({
  "name": "API req URI",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "/BudgetDirect_Car"
      ]
    }
  ]
});
formatter.step({
  "name": "Payload for Delete call \u003cid\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Hitting the API with Delete call \u003cid\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Storing the Delete call response \\restAPI_response\\DeleteCall_Response.txt",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "rest_BD116"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete Call using old method",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall_Response"
    }
  ]
});
formatter.step({
  "name": "Base URI for API call",
  "rows": [
    {
      "cells": [
        "http://localhost:3000"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "restAPI_ResponseStepDef.base_URI_for_API_call(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API req URI",
  "rows": [
    {
      "cells": [
        "/BudgetDirect_Car"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "restAPI_ResponseStepDef.API_req_URI(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Payload for Delete call rest_BD116",
  "keyword": "Then "
});
formatter.match({
  "location": "restAPI_ResponseStepDef.payload_for_Delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting the API with Delete call rest_BD116",
  "keyword": "Then "
});
formatter.match({
  "location": "restAPI_ResponseStepDef.hitting_the_API_with_Delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the Delete call response \\restAPI_response\\DeleteCall_Response.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "restAPI_ResponseStepDef.storing_the_Delete_call_response(String)"
});
formatter.result({
  "status": "passed"
});
});