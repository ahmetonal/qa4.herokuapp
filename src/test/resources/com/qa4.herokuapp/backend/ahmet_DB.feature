Feature: DataBase testing by Ahmet

Scenario: Verify  classes name 
	Given the user is on sign in page
	When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
	Then the user should be able to see following names should be matched the db records  
	|mit|
	|harvard|
	|yale|
	|princeton|
	|stanford|
	|duke|
	|berkeley|

	@ahmet	
Scenario: verify first five schedule  hours 
	Given the user is on sign in page 
	When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
	When the user should click on berkeley room 
	Then subtitle should be fiat lux matched the db records
	Then the first five schedule hours should be matched the db records 


Scenario: my self verify 
	Given the user is on sign in page 
	When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
	Then the user should click on team link 
	Then user info role "student-team-leader" name "Teri Mapam" should match the db records 