package com.herokuapp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.herokuapp.utilities.Driver;

public class SchedulPage {

	public SchedulPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	
	
	@FindBy(xpath="//div[.='conference in stanford has been successfully scheduled']")
	public WebElement successfullyScheduledText;
	
	
	///njl-> locator for reservation conference from12.00amto2.00pm
	@FindBy(xpath="//h1[@class='title']")
	public WebElement schedulePage;


	


}

