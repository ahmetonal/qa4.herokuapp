 Feature: login 
 Scenario Outline: Verify usernames 
	
	Given the user is on the login page 
	When I login using username "<username>" and password "<password>" 
	And The user click on myself 
	Then users full name "<firstname>" "<lastname>" should be displayed 
	
	Examples: 
	 |firstname  |lastname         |username		                   |password         |	
     |Ruthann    |Johnes           |daldie7l@seattletimes.com          |ruthannjohnes    |
     |Arluene    |Reolfo           |gmcalister7n@google.nl             |arluenereolfo    |   
	 |Leonard    |Warfield         |sutting7v@liveinternet.ru          |leonardwarfield  |        
     |Carlos     |Michie           |strayford84@e-recht24.de           |carlosmichie     |  
     |Hadley     |Climer           |finkles7z@studiopress.com          |hadleyclimer     | 

	
Scenario: Verify group members on team page 
		Given the user is on the home page
       	When the user click on team button
		Then the user should be able to see following names 
		|Christophe Flory        |
		|Daryle Dikles 	    	 |
		|Ruthann Johnes     	 |
		|Merrilee Ambler 	     |
		
Scenario: verify first and last two hours 
	Given the user is on the home page 
	When the user click on berkeley room 
	Then subtitle should be “berkeley”
	Then the first and last two hours should be displayed in the following : 
		|7:00AM   |
		|7:30AM   |
		|9:30PM   |
	    |10:00PM  |
	    
	    
Scenario: make a reservation
    Given the user is on the home page
    When the user click hunt
    And subtitle “hunt for spot” should be display
    Then the user select 8-17-2018 11.00-12.00am 
    And the user choose stanford
    And confirm reservation	    