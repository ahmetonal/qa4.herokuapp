@login 
Feature: login 

@smoke 
Scenario: login link 
	Given the user is on the home page 
	When the user clicks on the Sign in link 
	Then username and password fields should be displayed 
	
