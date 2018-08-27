package com.herokuapp.step_definitions;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import com.herokuapp.pages.HuntPage;
import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.SchedulPage;
import com.herokuapp.pages.SchedulePage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.ConfigurationReader;
import com.herokuapp.utilities.DBUtils;
import com.herokuapp.utilities.Driver;

import cucumber.api.java.en.And;
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

	/// njl
	@And("the user clicks on the schedule button")
	public void the_user_clicks_on_the_schedule_button() {
		BrowserUtils.waitFor(1);
		mapPage.scheduleButton.click();

	}

	// njl
	@Then("verify the schedule page is displayed")
	public void verify_the_schedule_page_is_displayed() {
		BrowserUtils.waitFor(1);
		Assert.assertEquals("schedule", schedulePage.schedulePage.getText());

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

	// nejla
	@And("verify booking information text should be displayed")
	public void verify_booking_information_text_should_be_displayed() {
		BrowserUtils.waitFor(1);
		Assert.assertEquals("on 8/18 from 12:00am to 2:00pm", huntPage.bookingInformationText.getText());

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
		Assert.assertEquals("conference in stanford has been successfully scheduled",
				schedulePage.successfullyScheduledText.getText());

	}

	@Then("the minimum and maximum time in schedule should match with DB")
	public void the_minimum_and_maximum_time_in_schedule_should_match_with_DB() {
		SchedulePage schedulePage = new SchedulePage();

		String min = "0" + schedulePage.minTime.getText().replaceAll(":", "");
		String max = schedulePage.maxTime.getText().replaceAll(":", "");

		System.out.println("min : " + min);
		System.out.println("max : " + max);

		String minTime = "";
		String maxTime = "";

		for (int i = 0; i < min.length(); i++) {
			if (Character.isDigit(min.charAt(i)))
				minTime += min.charAt(i);
		}

		System.out.println("minTime : " + minTime);
		minTime = minTime.substring(0, minTime.length() - 2);

		for (int i = 0; i < max.length(); i++) {
			if (Character.isDigit(max.charAt(i)))
				maxTime += max.charAt(i);
		}
		System.out.println("maxTime : " + maxTime);
		maxTime = maxTime.substring(0, maxTime.length() - 2);

		System.out.println("min ui : " + minTime);
		System.out.println("max ui : " + maxTime);

		String sql = "select min(start), max(finish) from timeline;";
		List<Map<String, Object>> queryResult = DBUtils.getQueryResultMap(sql);
		Map<String, Object> result = queryResult.get(0);

					Date date = (Date) result.get("min");
					DateFormat df = new SimpleDateFormat("HH:mm:ss");
					String expectedmin = df.format(date);
			
					String exminTime = "";
			
					for (int i = 0; i < expectedmin.length(); i++) {
						if (Character.isDigit(expectedmin.charAt(i)))
							exminTime += expectedmin.charAt(i);
					}
			
					System.out.println("exminTime : " + exminTime);
		
		Date date2 = (Date) result.get("max");
		DateFormat df2 = new SimpleDateFormat("HH:mm:ss");
		String expectedmax = df2.format(date2);

		System.out.println("expectedmax : " + expectedmax);
		
		String exmaxTime = "";

		for (int i = 0; i < expectedmax.length(); i++) {
			if (Character.isDigit(expectedmax.charAt(i)))
				exmaxTime += expectedmax.charAt(i);
		}

		System.out.println("exmaxTime : " + exmaxTime);
		
		String expectedminTime = exminTime.substring(0, exminTime.length() - 4);

		String a = exmaxTime.substring(0, exmaxTime.length() - 4);
		System.out.println("a : " + a);
		int b = Integer.parseInt(a) - 12;
		System.out.println("b : " + b);
		String expectedmaxTime = Integer.toString(b);
		System.out.println("expectedmaxTime : " + expectedmaxTime);
		// String expectedmaxTime =Integer.toString((Integer.parseInt(exmaxTime.substring(0, exmaxTime.length()- 6))) - 12);

		Assert.assertEquals(expectedminTime, minTime);
		Assert.assertEquals(expectedmaxTime, maxTime);

	}
}
