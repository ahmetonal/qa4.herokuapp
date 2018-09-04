package com.herokuapp.step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.testng.Assert;

import com.herokuapp.utilities.Environment;

public class API_Testing_Step_Defs {

	Response responce;
	Response res;
	String token;
	String user;
	

	@When("the user should send  GET request to REST url")
	public void the_user_should_send_GET_request_to_REST_url() {


	}

	@Given("I am logged reservation api using {string} and {string}")
	public void i_am_logged_reservation_api_using_and(String username, String password) {
		user = username;
		RestAssured.baseURI = Environment.BASE_URI;
		res = RestAssured.given().param("email", username).param("password", password).when()
				.get(RestAssured.baseURI + "/sign");
		
		token = res.jsonPath().get("accessToken");
		System.out.println(token);


	}

	@Then("the user verifies status code is {int}")
	public void the_user_verifies_status_code_is(Integer int200) {
		Assert.assertEquals(res.statusCode(), 200);

	}

	@Then("the user should be able to get response content in JSON")
	public void the_user_should_be_able_to_get_response_content_in_JSON() {
		res.then().assertThat().contentType(ContentType.JSON);
	}

	@Then("the following team data should be returned:")
	public void the_following_team_data_should_be_returned() {
		String firstname = res.jsonPath().get("firstName");
        String lastname = res.jsonPath().get("lastName");
        String role = res.jsonPath().get("role");
        assertTrue(user.contains(firstname.toLowerCase()));
        assertTrue(user.contains(lastname.toLowerCase()));
        assertTrue(user.contains(role.toLowerCase()));

	}

}
