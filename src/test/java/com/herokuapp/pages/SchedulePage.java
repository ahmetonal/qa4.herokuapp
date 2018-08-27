package com.herokuapp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.herokuapp.utilities.Driver;

public class SchedulePage extends TopNavigationBar{

	public SchedulePage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	
	@FindBy(xpath = "//div[@class='heading is-7 cell-bottom']")
	public WebElement maxTime;
	
	@FindBy(xpath = "//div[@class='heading is-7 cell-top']")
	public WebElement minTime;
	
	
}
