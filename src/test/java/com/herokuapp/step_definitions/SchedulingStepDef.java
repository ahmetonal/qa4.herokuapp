package com.herokuapp.step_definitions;

import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import com.herokuapp.pages.HuntPage;
import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.SchedulPage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.ConfigurationReader;
import com.herokuapp.utilities.Driver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class SchedulingStepDef {

	// GS-Scheduling event test Scenario 
	Select select;
	SigninPage signinPage = new SigninPage();
	MapPage mapPage = new MapPage();
	HuntPage huntPage = new HuntPage();
	SchedulPage schedulePage = new SchedulPage();

	@Given("the user on home page should be able to sign in with email {string} and password {string}")
	public void the_user_on_home_page_should_be_able_to_sign_in_with_email_and_password(String email, String password) {
		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
		signinPage.email.sendKeys(email);
		signinPage.password.sendKeys(password);
		signinPage.signinButton.click();
	}

	@Then("the user should verify map link")
	public void the_user_should_verify_map_link() {
		BrowserUtils.waitFor(1);
		Assert.assertEquals("map", mapPage.mapText.getText());

	}

	@Then("the user clicks on hunt link")
	public void the_user_clicks_on_hunt_link() {
		BrowserUtils.waitFor(1);
		mapPage.huntButton.click();
	}

	@Then("verify hunt for spot is displayed")
	public void verify_hunt_for_spot_is_displayed() {
		BrowserUtils.waitFor(1);
		Assert.assertEquals("hunt for spot", huntPage.huntforspotText.getText());
	}

	@Then("the user enters date {string} and startTime {string} endTime {string} then click search button")
	public void the_user_enters_date_and_startTime_endTime_then_click_search_button(String date, String startTime,
			String endTime) {
		BrowserUtils.waitFor(1);
		huntPage.date.sendKeys(date);
		BrowserUtils.waitFor(1);
		new Select(huntPage.timeFromButton).selectByIndex(21);
		BrowserUtils.waitFor(2);
		new Select(huntPage.timeToButton).selectByIndex(3);
		
		BrowserUtils.waitFor(1);
		huntPage.searchButton.click();
	}


	@Then("verify free spots is displayed")
	public void verify_free_spots_is_displayed() {
		BrowserUtils.waitFor(2);
		Assert.assertEquals("free spots", huntPage.freespotsText.getText());
	}


	@Then("the user clicks book button in stanford section")
	public void the_user_clicks_book_button_in_stanford_section() {
		BrowserUtils.waitFor(1);
      huntPage.bookButton.click();
	}

	@Then("the user clicks confirm button")
	public void the_user_clicks_confirm_button() {
		BrowserUtils.waitFor(1);
		huntPage.confirmButton.click();
	}
	
	@Then("verify the schedule is displayed")
	public void verify_the_schedule_is_displayed() {
		BrowserUtils.waitFor(1);
		Assert.assertEquals("conference in stanford has been successfully scheduled",schedulePage.successfullyScheduledText.getText());
		
	}
		


}
