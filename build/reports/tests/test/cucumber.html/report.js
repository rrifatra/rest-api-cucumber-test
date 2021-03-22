$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DummyAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Dummy Rest API - Smoke Tests",
  "description": "",
  "id": "dummy-rest-api---smoke-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@GET1USER"
    },
    {
      "line": 5,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I submit a request to Get a single employee data \"\u003cEmployee number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "# And validate response body"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Employee number",
        "Response Code"
      ],
      "line": 12,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "100",
        "200"
      ],
      "line": 13,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@GET1USER"
    },
    {
      "line": 5,
      "name": "@Success"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I submit a request to Get a single employee data \"100\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
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
  "duration": 460793598,
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
  "duration": 1741218225,
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
  "duration": 2690609,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[200]\u003e but was:\u003c[429]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bdd.smoke.test.steps.StepDefinition.validate(StepDefinition.java:82)\n\tat ✽.Then validate \"200\"(DummyAPI.feature:9)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Success Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@DELETE"
    },
    {
      "line": 41,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I submit a request to delete a \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code",
        "user"
      ],
      "line": 47,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;1"
    },
    {
      "cells": [
        "200",
        "719"
      ],
      "line": 48,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Success Scenario - Integration Test for DELETE End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-delete-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@DELETE"
    },
    {
      "line": 41,
      "name": "@Success"
    },
    {
      "line": 39,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I submit a request to delete a \"719\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
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
  "duration": 45524227,
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
  "duration": 1202920725,
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
  "duration": 341604,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[200]\u003e but was:\u003c[429]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bdd.smoke.test.steps.StepDefinition.validate(StepDefinition.java:82)\n\tat ✽.Then validate \"200\"(DummyAPI.feature:45)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@SmokeTest"
    },
    {
      "line": 62,
      "name": "@GetAllUser"
    },
    {
      "line": 63,
      "name": "@Success"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I submit a request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "validate \"\u003cResponse Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 68,
      "value": "# And validate response body"
    }
  ],
  "line": 69,
  "name": "",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;",
  "rows": [
    {
      "cells": [
        "Response Code"
      ],
      "line": 70,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 71,
      "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "Success Scenario - Integration Test for GET End point",
  "description": "",
  "id": "dummy-rest-api---smoke-tests;success-scenario---integration-test-for-get-end-point;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@Success"
    },
    {
      "line": 62,
      "name": "@GetAllUser"
    },
    {
      "line": 61,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "Rest API is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I submit a request to Get all employee data endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 67,
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
  "duration": 3825300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iSubmitARequestToGetAllEmployeeDataEndpoint()"
});
formatter.result({
  "duration": 907348501,
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
  "duration": 412906,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[200]\u003e but was:\u003c[429]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bdd.smoke.test.steps.StepDefinition.validate(StepDefinition.java:82)\n\tat ✽.Then validate \"200\"(DummyAPI.feature:67)\n",
  "status": "failed"
});
});