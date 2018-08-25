package com.herokuapp.step_definitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.MePage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.ConfigurationReader;
import com.herokuapp.utilities.DBUtils;
import com.herokuapp.utilities.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeDBStepDefs {
	
	MePage mePage=new MePage();
    SigninPage signinPage = new SigninPage();
	MapPage mapPage= new MapPage();
	DBUtils dbutils= new DBUtils();
     
	@Given("the user is on sign in page")
	public void the_user_is_on_sign_in_page() {
		Driver.getDriver().get(ConfigurationReader.getProperty("url"));
	}

	@When("the user sign in entering email {string} and password {string}")
	public void the_user_sign_in_entering_email_and_password(String email, String password) {
		BrowserUtils.waitFor(2);
		signinPage.email.sendKeys(email);
		BrowserUtils.waitFor(2);
		signinPage.password.sendKeys(password);
		BrowserUtils.waitFor(2);
		signinPage.signinButton.click();
	}

	@Then("the user should verify light-side page is displayed")
	public void the_user_should_verify_light_side_page_is_displayed() {
		   BrowserUtils.waitFor(3);
		   Assert.assertEquals("light-side", mapPage.lightsideText.getText());
	}

	@Then("the user should click on team link")
	public void the_user_should_click_on_team_link() {
		  BrowserUtils.waitFor(3);
		  BrowserUtils.hover(mapPage.myButton);
		  BrowserUtils.waitFor(1);
		  mapPage.mySelfButton.click();
	}

	@Then("verify Me page information with DB entering this email {string}")
	public void verify_Me_page_information_with_DB_entering_this_email(String email) {
		String sql= "select U.firstname,U.lastname,U.role,T.batch_number,T.name,C.location From users U,campus C, team T Where  email='"+email+"' AND U.campus_id=C.id AND U.team_id=T.id;";
	    List<Map<String, Object>> queryResult= DBUtils.getQueryResultMap(sql);
	    
	    System.out.println(queryResult);
	     Map<String, Object> result= queryResult.get(0);
	     System.out.println(result);
	     String expectedFirstname = (String)result.get("firstname");
	     System.out.println(expectedFirstname);
	     String expectedLastname = (String)result.get("lastname");
	     String expectedRolename = (String)result.get("role");
	     String expectedBatchNumber = "#" + (String)result.get("batch_number").toString();
	     String expectedLocationname = (String)result.get("location");
	     
	     
	     String actualFirstname=mePage.userNameText.getText().split(" ")[0];
	     BrowserUtils.waitFor(2);
		 String actualLastname=mePage.userNameText.getText().split(" ")[1];
		  BrowserUtils.waitFor(2);
		 String actualRoleName= mePage.RoleText.getText();
		  BrowserUtils.waitFor(2);
		 String actualBatchNumber= mePage.batchNumberText.getText();
		  BrowserUtils.waitFor(2);
		 String actualCampusName= mePage.campusNameText.getText();
		  BrowserUtils.waitFor(2);
		
		 Assert.assertEquals(expectedFirstname, actualFirstname);
		 Assert.assertEquals(expectedLastname, actualLastname);
		 Assert.assertEquals(expectedRolename, actualRoleName);
		 Assert.assertEquals(expectedBatchNumber, actualBatchNumber);
		 Assert.assertEquals(expectedLocationname, actualCampusName);
		 
	}
	


}
