## Smoke-test-bdd

This BDD framework is to test DummyAPI Endpoints
.
There are 2 endpoints that has been Automated: GET and DELETE

##On MacOS:
#To run  the Smoke Test use the below command:
###Step 1: ./gradlew clean build
###Step 2: ./gradlew smokeTest

##On Windows:

#To run  the Smoke Test use the below command:
###Step 1: gradlew clean build
###Step 2: gradlew smokeTest 


## To view the BDD report navigate to below path and Open in browser:
  build/reports/tests/test/cucumber.html ->index.html
 
## To view the gradle report navigate to below path
  build/reports/tests/test/index.html

## Feature file
DummyAPI.feature file is located in src/test/resources/features/UserAPI.feature

Following tags are added in feature file to run specific tests:
###@SmokeTest - To run all tests in feature file 
###@GET1USER - To run Get a single employee data tests
###@Success - To run success scenarios for 3 end points
###@GetAllUser - To run Get all employee data tests
###@Error - To run negative test cases
###@DELETE - To run test cases for Delete End point


 
