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
	String token;
	String user;
	
    @Given("I am logged reservation api using {string} and {string}")
    public void i_am_logged_reservation_api_using_and(String username, String password) {
        user = username;
        RestAssured.baseURI = Environment.BASE_URI;
        Response res = RestAssured.given().param("email", username).param("password", password).and().header("Accept", "application/json").when()
                .get(RestAssured.baseURI + "/sign");
        token = res.jsonPath().get("accessToken");
        System.out.println(token);

    }

	@Then("the user verifies status code is {int}")
	public void the_user_verifies_status_code_is(Integer int200) {
		RestAssured.basePath = "api/students/me";
		
		responce = RestAssured.given().and().header("Authorization", token).when().get();
		responce.then().statusCode(200);

	}

	@Then("the user should be able to get response content in JSON")
	public void the_user_should_be_able_to_get_response_content_in_JSON() {
		responce.then().header("Content-Type", "text/html; charset=UTF-8");
	}

	@Then("the following team data should be returned:")
	public void the_following_team_data_should_be_returned() {
		String firstname = responce.jsonPath().get("firstName");
        String lastname = responce.jsonPath().get("lastName");
        String role = responce.jsonPath().get("role");
        System.out.println("firstname : " + firstname);
        System.out.println("lastname : " + lastname);
        System.out.println("role : " + role);
        assertTrue(user.contains(firstname.toLowerCase()));
        assertTrue(user.contains(lastname.toLowerCase()));
        assertTrue(user.contains(role.toLowerCase()));

	}

}
