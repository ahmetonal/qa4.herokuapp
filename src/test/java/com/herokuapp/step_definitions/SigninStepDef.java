package com.herokuapp.step_definitions;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.herokuapp.pages.HuntPage;
import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.MePage;
import com.herokuapp.pages.SchedulPage;
import com.herokuapp.pages.SelfPage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.ConfigurationReader;
import com.herokuapp.utilities.DBUtils;
import com.herokuapp.utilities.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class SigninStepDef {
	Select select;
	SigninPage signinPage = new SigninPage();
	MapPage mapPage= new MapPage();
	HuntPage huntPage = new HuntPage();
	SchedulPage schedulePage= new SchedulPage();
	SelfPage selfPage = new SelfPage();
	MePage mePage=new MePage();
	
	DBUtils dbutils= new DBUtils();
	
	@Given("the user is on the sign in page")
	public void the_user_is_on_the_sign_in_page() {
		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
	    
	}

	@When("the user sign in using email {string} and password {string}")
	public void the_user_sign_in_using_email_and_password(String email, String password) {
		BrowserUtils.waitFor(2);
		signinPage.email.sendKeys(email);
		BrowserUtils.waitFor(2);
		signinPage.password.sendKeys(password);
		BrowserUtils.waitFor(2);
		signinPage.signinButton.click();
	}

	@Then("verify light-side page is displayed")
	public void verify_light_side_page_is_displayed() {
		BrowserUtils.waitFor(3);
	   Assert.assertEquals("light-side", mapPage.lightsideText.getText());
	}

	@When("the user clicks on hunt to make reservation")
	public void the_user_clicks_on_hunt_to_make_reservation() {
		BrowserUtils.waitFor(2);
		mapPage.huntButton.click();
	}

	@Then("verify hunt for spot page is displayed")
	public void verify_hunt_for_spot_page_is_displayed() {
		BrowserUtils.waitFor(2);
		Assert.assertEquals("hunt for spot", huntPage.huntforspotText.getText());
	}

	@Then("user chooses desired date {string} and time from {string} to {string} then clicks search button")
	public void user_chooses_desired_date_and_time_from_to_then_clicks_search_button(String date, String timeFrom, String timeTo) {
		BrowserUtils.waitFor(2);
		huntPage.date.sendKeys(date);

		BrowserUtils.waitFor(2);
		new Select(huntPage.timeFromButton).selectByIndex(10);
		
		BrowserUtils.waitFor(2);
		new Select(huntPage.timeToButton).selectByIndex(3);

		BrowserUtils.waitFor(2);
		huntPage.searchButton.click();
	}
		
		
	@Then("user clicks on book to reserve for {string} room")
	public void user_clicks_on_book_to_reserve_for_room(String stanford) {
		BrowserUtils.waitFor(2);
		huntPage.bookButton.click();
	}
	

	@Then("verify booking confirmation page is displayed")
	public void verify_booking_confirmation_page_is_displayed() {
		BrowserUtils.waitFor(2);
		Assert.assertEquals("booking confirmation", huntPage.bookingConfirmationText.getText());
	}


	@Then("user clicks on confirm button to reserve the room")
	public void user_clicks_on_confirm_button_to_reserve_the_room() {
		BrowserUtils.waitFor(2);
	   huntPage.confirmButton.click();
	}

	
	@Then("verify {string} message is displayed")
	public void verify_message_is_displayed(String successfullyScheduled) {
		BrowserUtils.waitFor(2);
		Assert.assertEquals("conference in stanford has been successfully scheduled",schedulePage.successfullyScheduledText.getText());
	}

	@Then("the user should be able to see the links")
	public void the_user_should_be_able_to_see_the_links(List<String> list) {
		List<String> actualList = new ArrayList<>();
		actualList.add(selfPage.map.getText());
		actualList.add(selfPage.schedule.getText());
		actualList.add(selfPage.hunt.getText());
		actualList.add(selfPage.my.getText());
		
		assertEquals(list, actualList);
		
	}
	
	
}
