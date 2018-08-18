package com.herokuapp.step_definitions;

import com.herokuapp.pages.MapPage;
import com.herokuapp.pages.MyselfPage;
import com.herokuapp.pages.SigninPage;
import com.herokuapp.utilities.BrowserUtils;


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
	

}
