package com.bdd.smoke.test.steps;

import com.bdd.smoke.test.utils.ConfigFileReader;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.bdd.smoke.test.utils.ApiUtil;
import org.junit.Assert;

import java.util.Map;

import static com.bdd.smoke.test.utils.ConstantsUtil.*;


public class StepDefinition extends StepDefinitionBase{

    private final transient ApiUtil util = new ApiUtil();
    ConfigFileReader configFileReader = new ConfigFileReader();

    private void submitRequest(String method, String endPoint, String body) {
        performHttpMethod(method, endPoint, body);
    }

    private void performHttpMethod(String method, String url, String body) {
        Map<String, String> headers = ApiUtil.getHeaders();

        switch (method) {
            case "get":
                  makeGetCall(url,headers,body);
                break;
            case "post":
                makePostCallWithJson(url, headers, util.readJsonFile(body));
                break;
            case "delete":
                makeDeleteCallWithJson(url, headers, body);
                break;
            case "put":
                makePutCallWithJson(url, headers, util.readJsonFile( body));
                break;
        }
    }



    @Then("^Validate Response code \"([^\"]*)\"$")
    public void validateResponseCode(String responseCode) throws Throwable {
        Assert.assertNotNull(response);
        Assert.assertEquals(String.valueOf(response.getStatusCode()), responseCode);
        Assert.assertNotNull(response.getBody());

    }

    @Given("^Rest API is up and running$")
    public void restAPIIsUpAndRunning() {
    }

    @When("^I submit a request to create an user$")
    public void iSubmitARequestToCreateAnUser() {
        String POST_USER_URL = configFileReader.getUrl("POST_USER_URL");
        submitRequest(POST_METHOD, POST_USER_URL, POST_REQUEST);
    }


    @When("^I submit a request to delete a \"([^\"]*)\"$")
    public void iSubmitARequestToDeleteA(String user) throws Throwable {
        String deleteUserUrl = configFileReader.getUrl("DELETE_USER_URL");
        String finalURL = deleteUserUrl + user;
        submitRequest(DELETE_METHOD, finalURL, null);

    }

    @When("^I submit a request to update a \"([^\"]*)\"$")
    public void iSubmitARequestToUpdateA(String user) throws Throwable {
        String putUserUrl = configFileReader.getUrl("PUT_USER_URL");
        String finalURL = putUserUrl + user;
        submitRequest(PUT_METHOD, finalURL, PUT_REQUEST);
    }

    @Then("^validate \"([^\"]*)\"$")
    public void validate(String responseCode) throws Throwable {
        Assert.assertEquals(responseCode,String.valueOf(response.getStatusCode()));
    }

    @When("^I submit a request to Get a single employee data \"([^\"]*)\"$")
    public void iSubmitARequestToGetASingleEmployeeData(String employeeNumber) throws Throwable {
        String GET_URL = configFileReader.getUrl("GET_URL");
        String FINAL_URL = GET_URL+employeeNumber;
        submitRequest(GET_METHOD, FINAL_URL, null);
    }

    @When("^I submit a error request to Get a single employee data \"([^\"]*)\"$")
    public void iSubmitAErrorRequestToGetASingleEmployeeData(String arg0) throws Throwable {
        String GET_URL = configFileReader.getUrl("GET_URL");
        submitRequest(GET_METHOD, GET_URL, null);
    }

    @When("^I submit a bad request to Get a single employee data \"([^\"]*)\"$")
    public void iSubmitABadRequestToGetASingleEmployeeData(String arg0) throws Throwable {
        String GET_URL = configFileReader.getUrl("WRONG_URL");
        submitRequest(GET_METHOD, GET_URL, null);
    }

    @When("^I submit a request to Get all employee data endpoint$")
    public void iSubmitARequestToGetAllEmployeeDataEndpoint() {
        String GET_URL = configFileReader.getUrl("GET_ALL_USERS");
        submitRequest(GET_METHOD, GET_URL, null);
    }

    @When("^I submit a error request to Get all employee data endpoint$")
    public void iSubmitAErrorRequestToGetAllEmployeeDataEndpoint() {
        String GET_URL = configFileReader.getUrl("GET_ALL_USERS");
        submitRequest(GET_METHOD, GET_URL, null);
    }
}
