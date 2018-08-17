package com.herokuapp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.herokuapp.utilities.Driver;

public class MapPage {
	
	public MapPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	//locator for 'light-side' text
	@FindBy(xpath="//h2[.='light-side']")
	public WebElement lightsideText;
	
	//locator for hunt button
	@FindBy(linkText = "hunt")
	public WebElement huntButton;
	
	//locator for berkeley button
	@FindBy(linkText = "berkeley")
	public WebElement berkeleyButton;
	
	//locator for my button
	@FindBy(xpath = "//a[.='my']")
	public WebElement my;
	
	//locator for my button
	@FindBy(linkText = "team")
	public WebElement myTeam;
	
	//locator for my self
		@FindBy(linkText = "self")
		public WebElement mySelf;
		
		//locator for my self
				@FindBy(linkText = "sign out")
				public WebElement signOut;
		
}
