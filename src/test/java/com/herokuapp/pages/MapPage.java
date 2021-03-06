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

	//locator for my button
	@FindBy(xpath ="//a[.='my']")
	public WebElement myButton;
	
	//locator for myself button
	@FindBy(xpath="//a[contains(text(),'self')]")
	public WebElement mySelfButton;
	
	//GS->locator to verify map link
	@FindBy(xpath="//a[.='map']")
	public WebElement mapText;
	
	//njl -> locator for schedule button
	@FindBy(linkText = "schedule")
	public WebElement scheduleButton;
	
	 //locator for team button
    @FindBy(xpath="//a[.='team']")
    public WebElement teamButton;
    
    @FindBy(id="room-112")
    public WebElement harvard;
    
    @FindBy(xpath="//h2[.='veritas']")
    public WebElement harvardSubtitle;
    
    @FindBy(id="room-111")
    public WebElement mit;
    
    @FindBy(xpath="//h2[@class='subtitle']")
    public WebElement mitSubtitle;
    
    @FindBy(id="room-113")
    public WebElement yale;
    
    @FindBy(xpath="//h2[.='lux et veritas']")
    public WebElement yaleSubtitle;
    
    @FindBy(id="room-114")
    public WebElement princeton;
    
    @FindBy(id="room-115")
    public WebElement stanford;
    
    @FindBy(id="room-116")
    public WebElement duke;
    
    @FindBy(id="room-117")
    public WebElement berkeley;
    
    
  
    
  
}
