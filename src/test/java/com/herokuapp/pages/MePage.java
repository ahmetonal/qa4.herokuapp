package com.herokuapp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.herokuapp.utilities.Driver;

public class MePage {
	
	public MePage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	
	//locator for 'Teri Mapam' text
		@FindBy(xpath="//p[.='Teri Mapam']")
		public WebElement userNameText;
		
		@FindBy(xpath="//p[contains(text(),'student-team-leader')]")
		public WebElement RoleText;
		
		@FindBy(xpath="//p[contains(text(),'#8')]")
		public WebElement batchNumberText;

		@FindBy(xpath="//p[contains(text(),'VA')]")
		public WebElement campusNameText;
		
		@FindBy(xpath="//p[.='TheCrew']")
		public WebElement TheCrewText;
		
		 //GS-DB testing for user names
	    @FindBy(xpath="//p[.='Arluene Reolfo']")
	    public WebElement firstUser;
	    //GS-DB testing
	    @FindBy(xpath="//p[.='Sharai Pencot']")
	    public WebElement secondUser;
	    //GS-DB testing
	    @FindBy(xpath="//p[.='Humphrey Alsop']")
	    public WebElement thirdUser;
	    //GS-DB testing
	    @FindBy(xpath="//p[.='Nefen Yong']")
	    public WebElement fourthUser;
	    //GS-DB testing for self button
	    @FindBy(xpath="//a[.='self']")
	    public WebElement selfButton;
	    //GS-DB testing 
	    @FindBy(xpath="//p[.='Arluene Reolfo']")
		public WebElement userNameText2;
		
}
