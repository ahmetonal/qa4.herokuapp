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

	
