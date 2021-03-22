$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserAPI.feature");
formatter.feature({
  "line": 2,
  "name": "Dummy Rest API - Smoke Tests",
  "description": "",
  "id": "dummy-rest-api---smoke-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 5,
      "name": "@Get1User"
    },
    {
      "line": 6,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I submit a request to Get a single employee data \"\u003cEmployee number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "# And validate response body"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Employee number",
        "Response Code"
      ],
      "line": 13,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "100",
        "200"
      ],
      "line": 14,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Get1User"
    },
    {
      "line": 6,
      "name": "@Success"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I submit a request to Get a single employee data \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "validate \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 492914000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 50
    }
  ],
  "location": "StepDefinition.iSubmitARequestToGetASingleEmployeeData(String)"
});
formatter.result({
  "duration": 3014817300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 1742000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Error Scenario 404 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-404---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 17,
      "name": "@Get1User"
    },
    {
      "line": 18,
      "name": "@Error"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I submit a error request to Get a single employee data \"\u003cEmployee number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "# And validate response body"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-404---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Employee number",
        "Response Code"
      ],
      "line": 25,
      "id": "dummy-rest-api---smoke-tests;error-scenario-404---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "1",
        "404"
      ],
      "line": 26,
      "id": "dummy-rest-api---smoke-tests;error-scenario-404---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Error Scenario 404 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-404---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Error"
    },
    {
      "line": 17,
      "name": "@Get1User"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I submit a error request to Get a single employee data \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "validate \"404\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 20629300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "StepDefinition.iSubmitAErrorRequestToGetASingleEmployeeData(String)"
});
formatter.result({
  "duration": 832364600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 171500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Error Scenario 400 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-400---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@SmokeTest"
    },
    {
      "line": 29,
      "name": "@Get1User"
    },
    {
      "line": 30,
      "name": "@Error"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I submit a bad request to Get a single employee data \"\u003cEmployee number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 35,
      "value": "# And validate response body"
    }
  ],
  "line": 36,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-400---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Employee number",
        "Response Code"
      ],
      "line": 37,
      "id": "dummy-rest-api---smoke-tests;error-scenario-400---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "1",
        "429"
      ],
      "line": 38,
      "id": "dummy-rest-api---smoke-tests;error-scenario-400---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Error Scenario 400 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-400---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Error"
    },
    {
      "line": 29,
      "name": "@Get1User"
    },
    {
      "line": 28,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I submit a bad request to Get a single employee data \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "validate \"429\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 7658400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefinition.iSubmitABadRequestToGetASingleEmployeeData(String)"
});
formatter.result({
  "duration": 2194893200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "429",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 680800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c4[29]\u003e but was:\u003c4[04]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bdd.smoke.test.steps.StepDefinition.validate(StepDefinition.java:76)\r\n\tat ✽.Then validate \"429\"(UserAPI.feature:34)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Success Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 41,
      "name": "@Delete"
    },
    {
      "line": 42,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I submit a request to delete a \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code",
        "user"
      ],
      "line": 48,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;1"
    },
    {
      "cells": [
        "200",
        "719"
      ],
      "line": 49,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Success Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Delete"
    },
    {
      "line": 42,
      "name": "@Success"
    },
    {
      "line": 40,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I submit a request to delete a \"719\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "validate \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 1684500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "719",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iSubmitARequestToDeleteA(String)"
});
formatter.result({
  "duration": 706897500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Error Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario---integration-test-for-delete-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@delete"
    },
    {
      "line": 53,
      "name": "@Error"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I submit a request to delete a \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario---integration-test-for-delete-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code",
        "user"
      ],
      "line": 59,
      "id": "dummy-rest-api---smoke-tests;error-scenario---integration-test-for-delete-end-point;;1"
    },
    {
      "cells": [
        "429",
        "719"
      ],
      "line": 60,
      "id": "dummy-rest-api---smoke-tests;error-scenario---integration-test-for-delete-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Error Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario---integration-test-for-delete-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@Error"
    },
    {
      "line": 51,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@delete"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I submit a request to delete a \"719\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "validate \"429\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 3021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "719",
      "offset": 32
    }
  ],
  "location": "StepDefinition.iSubmitARequestToDeleteA(String)"
});
formatter.result({
  "duration": 3095238600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "429",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 65,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    },
    {
      "line": 63,
      "name": "@GetAllUser"
    },
    {
      "line": 64,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I submit a request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 69,
      "value": "# And validate response body"
    }
  ],
  "line": 70,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code"
      ],
      "line": 71,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 72,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@Success"
    },
    {
      "line": 63,
      "name": "@GetAllUser"
    },
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I submit a request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "validate \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 1324700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iSubmitARequestToGetAllEmployeeDataEndpoint()"
});
formatter.result({
  "duration": 939499000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 358600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[200]\u003e but was:\u003c[429]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bdd.smoke.test.steps.StepDefinition.validate(StepDefinition.java:76)\r\n\tat ✽.Then validate \"200\"(UserAPI.feature:68)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Error Scenario 429 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-429---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@SmokeTest"
    },
    {
      "line": 75,
      "name": "@GetAllUser"
    },
    {
      "line": 76,
      "name": "@Error"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I submit a error request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-429---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code"
      ],
      "line": 82,
      "id": "dummy-rest-api---smoke-tests;error-scenario-429---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "429"
      ],
      "line": 83,
      "id": "dummy-rest-api---smoke-tests;error-scenario-429---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Error Scenario 429 - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;error-scenario-429---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@Error"
    },
    {
      "line": 75,
      "name": "@GetAllUser"
    },
    {
      "line": 74,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I submit a error request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "validate \"429\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.restAPIIsUpAndRunning()"
});
formatter.result({
  "duration": 4131600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iSubmitAErrorRequestToGetAllEmployeeDataEndpoint()"
});
formatter.result({
  "duration": 3184617900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "429",
      "offset": 10
    }
  ],
  "location": "StepDefinition.validate(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
});