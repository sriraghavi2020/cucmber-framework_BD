$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature");
formatter.feature({
  "name": "API Testing using HTTP Client",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetCall"
    }
  ]
});
formatter.step({
  "name": "Hitting API with get request on URL",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/BudgetDirect_Car/\u003cid\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Storing the get call response to file \\APIHttpClient_Response\\GetCallResponse.txt",
  "keyword": "Then "
});
formatter.step({
  "name": "Asserting get call response for \u003cid\u003e",
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
        "rest_BD113"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetCall"
    }
  ]
});
formatter.step({
  "name": "Hitting API with get request on URL",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/BudgetDirect_Car/rest_BD113"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_get_request_on_URL(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the get call response to file \\APIHttpClient_Response\\GetCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_get_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting get call response for rest_BD113",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_get_call_response_for(String)"
});
formatter.result({
  "status": "passed"
});
});