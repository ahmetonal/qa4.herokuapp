package com.herokuapp.step_definitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.MePage;
import com.herokuapp.pages.MyTeamPage;
import com.herokuapp.pages.TopNavigationBar;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.DBUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.description.modifier.SynchronizationState;

public class bbinbirDataBaseTesting extends TopNavigationBar{

	MapPage mapPage = new MapPage();
	MePage mePage = new MePage();
	MyTeamPage myTeamPage = new MyTeamPage();

	@Then("the user clicks on {string} room and verifies its subtitle with Database")
	public void the_user_clicks_on_room_and_verifies_its_subtitle_with_Database(String yaleRoom) {
		BrowserUtils.waitFor(2);
		mapPage.yale.click();
		BrowserUtils.waitFor(2);
		String sqlYale = "select description from room where name ='" + yaleRoom + "';";
		List<Map<String, Object>> queryResultBayram = DBUtils.getQueryResultMap(sqlYale);

		System.out.println(queryResultBayram);
		Map<String, Object> result = queryResultBayram.get(0);
		System.out.println(result);
		String expectedDescription = (String) result.get("description");
		System.out.println("Expected Description: " + expectedDescription);
		String actualDescription = mapPage.yaleSubtitle.getText();
		System.out.println("Actual Description: " + actualDescription);
		Assert.assertEquals(expectedDescription, actualDescription);

	}

	@Then("user verifies the name of the person with Database")
	public void user_verifies_the_name_of_the_person_with_Database() {
		BrowserUtils.waitFor(2);
		//String sqlName = "select firstname , lastname from users\n" + "where email= 'jalabaster7f@drupal.org';";
		String sqlName = "select firstname , lastname from users where email= 'jalabaster7f@drupal.org';";
		List<Map<String, Object>> queryResult2 = DBUtils.getQueryResultMap(sqlName);
		System.out.println("Query Result: " + queryResult2);
		Map<String, Object> name = queryResult2.get(0);

		String expectedFirstName = (String) name.get("firstname");
		System.out.println("Expected First Name: " + expectedFirstName);
		String expectedLastName = (String) name.get("lastname");
		System.out.println("Expected Last Name: " + expectedLastName);

		String actualFrstName = mePage.userNameText.getText();
		System.out.println("Real from application: " + actualFrstName);
		
		String actualFirstname = mePage.userNameText.getText().split(" ")[0];
		BrowserUtils.waitFor(2);
		String actualLastname = mePage.userNameText.getText().split(" ")[1];
		BrowserUtils.waitFor(2);
		Assert.assertEquals(expectedFirstName, actualFirstname);
		Assert.assertEquals(expectedLastName,  actualLastname);
		

	}

	@Then("user verifies the name of the team with Database")
	public void user_verifies_the_name_of_the_team_with_Database() {
		
    String actualTheCrewTextfromApplication = mePage.TheCrewText.getText();
    System.out.println("Actual text from Application is: "+actualTheCrewTextfromApplication);
    
    String sqlTheCrew = "select name from team where name = 'TheCrew';";
    List<Map<String, Object>> theCrewQuery = DBUtils.getQueryResultMap(sqlTheCrew);
    System.out.println("SqlTheCrew: "+sqlTheCrew);
    Map <String, Object> textforTheCrew = theCrewQuery.get(0);
    String expectedTheCrewText = (String) textforTheCrew.get("name");
    System.out.println("Expected text is: "+expectedTheCrewText);
    
    Assert.assertEquals(expectedTheCrewText, actualTheCrewTextfromApplication);
    
    
	}

	@Then("user clicks on team tab")
	public void user_clicks_on_team_tab() {
		BrowserUtils.hover(mapPage.my);
		BrowserUtils.waitFor(2);
		myTeamPage.teamTab.click();
		BrowserUtils.waitFor(2);

	}

	@Then("user verifies role for Teri Mapam")
	public void user_verifies_role_for_Teri_Mapam() {
	
		
		String actualRoleFromApplication = myTeamPage.roleforTeriMapam.getText();
		System.out.println("Actual Role from Application: "+ actualRoleFromApplication);	
		
		String sqlRole = "select role from users where firstname = 'Teri';";
		List<Map<String, Object>> queryForRole = DBUtils.getQueryResultMap(sqlRole);
		Map<String, Object> textForRole = queryForRole.get(0);
		String expectedRoleFromDatabase = (String) textForRole.get("role");
		System.out.println("Expected Role From Databse: "+ expectedRoleFromDatabase);
		
		Assert.assertEquals(expectedRoleFromDatabase, actualRoleFromApplication);

	}
}
