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
	
	//locator for my button
	@FindBy(xpath ="//a[.='my']")
	public WebElement myButton;
	
	//locator for myself button
	@FindBy(xpath="//a[contains(text(),'self')]")
	public WebElement mySelfButton;

}
