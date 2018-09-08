Feature: Api testing
@ws @SmokeTemp
Scenario Outline: Testing team data with API
 Given I am logged reservation api using "jalabaster7f@drupal.org" and "terimapam" 
 Then the user verifies status code is 200

 Then the following team data should be returned: 
     Examples:
    |team_id |first_name |last_name |role                 |batch|location|team   |
    |38      |Teri       |Mapam     |student-team-leader  |#8   |      VA|TheCrew|
    
    
    # And the user should be able to get response content in JSON 