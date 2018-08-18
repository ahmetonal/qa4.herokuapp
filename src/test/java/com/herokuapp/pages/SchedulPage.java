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
	
	@FindBy(xpath="//a[@class='navbar-item is-active']")
	// This xpath for schedule button 
	public WebElement searchButton;
	
	@FindBy (xpath="//button[@class='button is-danger']")
	public WebElement cancelConference;
	
	
	@FindBy(xpath ="//td[@class='conference']")
	public WebElement reservedRoom;
	
	@FindBy (xpath=" //p[contains(text(),'die luft der freiheit weht')]")
	public WebElement dieLuftDerFreiheitWeht;
	
	@FindBy(xpath="(//time[contains(text(),'')])[1]")
	public WebElement dateInCancelingReservedRoomPage;
	
	@FindBy(xpath="(//time[contains(text(),'')])[2]")
	public WebElement timeInCancelingReservedRoomPage;
}
