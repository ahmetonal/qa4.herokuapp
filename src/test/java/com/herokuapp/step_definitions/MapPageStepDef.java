package com.herokuapp.step_definitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.MyselfPage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.DBUtils;

import cucumber.api.java.en.Then;


public class MapPageStepDef {
	MapPage mapPage= new MapPage();
	SigninPage signinPage = new SigninPage();
	BrowserUtils browserUtils = new BrowserUtils();
	MyselfPage myselfPage = new MyselfPage();
	
	
	@Then("the user click on myself button")
	public void the_user_click_on_myself_button() {
		browserUtils.hover(mapPage.myButton);
		BrowserUtils.waitFor(2);
		mapPage.myButton.click();
		BrowserUtils.waitFor(2);
		mapPage.mySelfButton.click();
		}
	
	@Then("the user verify all rooms names which cluster_id is {int} in map page with DB")
	public void the_user_verify_all_rooms_names_which_cluster_id_is_in_map_page_with_DB(Integer cluster_id) {
		BrowserUtils.waitFor(4);
		String sql= "select name from room where cluster_id ="+cluster_id+";";
		 List<Map<String, Object>> queryResult= DBUtils.getQueryResultMap(sql);
		    
		    System.out.println(queryResult);
		     Map<String, Object> result= queryResult.get(0);
		     System.out.println(result);
		     
		     String expectedMit = (String)result.get("name");
			 String actualMit= mapPage.mit.getText();
			 System.out.println(expectedMit);
			 System.out.println(actualMit);
			 Map<String, Object> result1= queryResult.get(1);
			 String expectedHarvard = (String)result1.get("name");
			 String actualHarvard= mapPage.harvard.getText();
			 Map<String, Object> result2= queryResult.get(2);
			 String expectedYale= (String)result2.get("name");
			 String actualYale= mapPage.yale.getText();
			 Map<String, Object> result3= queryResult.get(3);
			 String expectedPrinceton = (String)result3.get("name");
			 String actualPrinceton= mapPage.princeton.getText();
			 Map<String, Object> result4= queryResult.get(4);
			 String expectedStanford = (String)result4.get("name");
			 String actualStanford= mapPage.stanford.getText();
			 Map<String, Object> result5= queryResult.get(5);
			 String expectedDuke = (String)result5.get("name");
			 String actualDuke= mapPage.duke.getText();
			 Map<String, Object> result6= queryResult.get(6);
			 String expectedBerkeley = (String)result6.get("name");
			 String actualBerkeley= mapPage.berkeley.getText();
			 
			 Assert.assertEquals(expectedMit, actualMit);
			 Assert.assertEquals(expectedHarvard, actualHarvard);
			 Assert.assertEquals(expectedYale, actualYale);
			 Assert.assertEquals(expectedPrinceton, actualPrinceton);
			 Assert.assertEquals(expectedStanford, actualStanford);
			 Assert.assertEquals(expectedDuke, actualDuke);
			 Assert.assertEquals(expectedBerkeley, actualBerkeley);
	 
	}

	

}
