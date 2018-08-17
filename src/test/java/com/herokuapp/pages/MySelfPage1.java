package com.herokuapp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.herokuapp.utilities.Driver;

public class MySelfPage1 {

	public MySelfPage1() {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	   //locator for my button
		@FindBy(xpath = "//h2")
		public WebElement titleFullName;
	
	
}
