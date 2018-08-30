package com.herokuapp.step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;
import static org.testng.Assert.assertEquals;

public class API_Testing_Step_Defs {

	@Given("the user should accepts type in JSON")
	public void the_user_should_accepts_type_in_JSON() {
		given().accept(ContentType.JSON);
        when().get("https://cybertek-reservation-api-qa3.herokuapp.com/api/teams/38");
	}

	@When("the user should send  GET request to REST url")
	public void the_user_should_send_GET_request_to_REST_url() {
		
	  
	}

	@Then("the user verifies status code is {int}")
	public void the_user_verifies_status_code_is(Integer int1) {
	}

	@Then("the user should be able to get response content in JSON")
	public void the_user_should_be_able_to_get_response_content_in_JSON() {
	   
	}

	@Then("the following team data should be returned:")
	public void the_following_team_data_should_be_returned() {
	  
	}
	
	
}
