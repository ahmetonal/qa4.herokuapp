package com.herokuapp.step_definitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.herokuapp.pages.MapPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.DBUtils;

import cucumber.api.java.en.Then;

public class MitRoomStepDef {
	
	MapPage mapPage = new MapPage();
	@Then("the user click on {string} and verify description of subtitle with DB")
	public void the_user_click_on_and_verify_description(String roomName) {
		BrowserUtils.waitFor(2);
		mapPage.mit.click();
		BrowserUtils.waitFor(2);
		String sql= "select description from room where name='"+roomName+"';";
		 List<Map<String, Object>> queryResult= DBUtils.getQueryResultMap(sql);
		    
		    System.out.println(queryResult);
		    Map<String, Object> result= queryResult.get(0);
		    System.out.println(result);
		    String expectedDescription = (String)result.get("description");
		    String actualDescription = mapPage.mitSubtitle.getText();
		     
		     Assert.assertEquals(expectedDescription, actualDescription);
		     
	}

}
