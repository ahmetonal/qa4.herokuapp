package com.herokuapp.step_definitions;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import com.herokuapp.pages.SelfPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.DBUtils;
import com.herokuapp.utilities.Driver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyInfoStepDefs {

	@When("the user is on the my self page")
	public void the_user_is_on_the_my_self_page() {
		SelfPage selfPage = new SelfPage();
		Actions actions = new Actions(Driver.getDriver());
		actions.moveToElement(selfPage.my).perform();
		BrowserUtils.waitFor(2);
		selfPage.self.click();
		selfPage.goToSelf();
		BrowserUtils.waitFor(2);
	}
	
	@Then("the user information should be displayed")
	public void the_user_information_should_be_displayed(Map<String, String> map) {
		
		SelfPage selfPage = new SelfPage();
		String expectedName = map.get("name");
		assertEquals(expectedName, selfPage.name.getText());
		   
		String expectedRole = map.get("role");
		assertEquals(expectedRole, selfPage.role.getText());
		//assertEquals(expecteds, actuals);
	}
	
	@Then("the user information should be matched with DB")
	public void the_user_information_should_be_matched_with_DB(Map<String, String> map) {
		
		SelfPage selfPage = new SelfPage();
		String actualName = selfPage.name.getText();
		   
		String actualRole = selfPage.role.getText();
		//assertEquals(expecteds, actuals);
		
		String sql = "select firstname, lastname, role from users where email = '" + map.get("username") + "';";
	
		 List<Map<String, Object>> queryResult= DBUtils.getQueryResultMap(sql);
	     Map<String, Object> result= queryResult.get(0);
	     String expectedName = (String)result.get("firstname") + " " + (String)result.get("lastname");
	     String expectedRole = (String)result.get("role");
	
	     Assert.assertEquals(expectedName, actualName);
	     Assert.assertEquals(expectedRole, actualRole);
	}
}
