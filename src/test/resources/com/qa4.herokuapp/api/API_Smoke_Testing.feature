Feature: Api testing
@SmokeTemp
Scenario Outline: Testing team data with API
 Given the user should accepts type in JSON
 When the user should send  GET request to REST url 
 Then the user verifies status code is 200
 And the user should be able to get response content in JSON 
 Then the following team data should be returned: 
     Examples:
    |team_id |first_name |last_name |role                 |batch|location|team   |
    |38      |Teri       |Mapam     |student-team-leader  |#8   |      VA|TheCrew|