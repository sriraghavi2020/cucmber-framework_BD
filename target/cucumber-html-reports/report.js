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
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/\u003cid\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Header for the delete request",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.step({
  "name": "Asserting the response for delete call \u003cid\u003e",
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
        "DUP2httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP3httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP4httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP5httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP6httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP7httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP8httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP9httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP10httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP11httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP12httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP13httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP14httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP15httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP16httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP17httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP18httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP19httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP20httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP21httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP22httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP23httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP24httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP25httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP26httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP27httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP28httpClients_204"
      ]
    },
    {
      "cells": [
        "DUP29httpClients_204"
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
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP2httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP2httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP3httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP3httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP4httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP4httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP5httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP5httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP6httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP6httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP7httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP7httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP8httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP8httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP9httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP9httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP10httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP10httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP11httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP11httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP12httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP12httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP13httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP13httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP14httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP14httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP15httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP15httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP16httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP16httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP17httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP17httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP18httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Asserting the response for delete call DUP18httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP19httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP19httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP20httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP20httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP21httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP21httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP22httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP22httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP23httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP23httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP24httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP24httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP25httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP25httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP26httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP26httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP27httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP27httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP28httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP28httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": API Get call testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteCall"
    }
  ]
});
formatter.step({
  "name": "URL for delete request",
  "rows": [
    {
      "cells": [
        "http://localhost:3000/Employees/DUP29httpClients_204"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "HttpClientAPIStepDef.url_for_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Header for the delete request",
  "rows": [
    {
      "cells": [
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.header_for_the_delete_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hitting API with delete request",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.hitting_API_with_delete_request()"
});
formatter.result({
  "error_message": "org.apache.http.conn.HttpHostConnectException: Connect to localhost:3000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:156)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat ✽.Hitting API with delete request(file:src/test/resources/BDFramework/FeatureFiles/HttpClientAPI.feature:43)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:476)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:218)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:162)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:394)\r\n\tat java.net.Socket.connect(Socket.java:606)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:376)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)\r\n\tat BDFramework.HTTP.Client.API.API_DeleteCall.deleteCall_API_request(API_DeleteCall.java:67)\r\n\tat BDFramework.TestRunner.StepDefenition.HttpClientAPIStepDef.hitting_API_with_delete_request(HttpClientAPIStepDef.java:88)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Storing the delete call response to file \\APIHttpClient_Response\\\\DeleteCallResponse.txt",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.storing_the_delete_call_response_to_file(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Asserting the response for delete call DUP29httpClients_204",
  "keyword": "Then "
});
formatter.match({
  "location": "HttpClientAPIStepDef.asserting_the_response_for_delete_call(String)"
});
formatter.result({
  "status": "skipped"
});
});