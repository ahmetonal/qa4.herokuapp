Feature: End to end reservation testing
@db 
Scenario Outline: verify user information: <email>
	Given the user is on the sign in page
    When the user sign in using email "<username>" and password "<password>"
    When the user is on the my self page
    Then the user information should be matched with DB and API
    |name    |<name>    |
    |role    |<role>    |
    |username|<username>|

    Examples:
    | username                  | password      | name           | role        			   | 
    | bcrosetti88@sitemeter.com | jamesmcdonagh | James McDonagh | student-team-member | 
    | cbrose86@cbslocal.com     | garrikheis    | Garrik Heis    | student-team-member |
    | gmcalister7n@google.nl    | arluenereolfo | Arluene Reolfo | student-team-leader |

@db @asli
Scenario: verify user information: <email>
	Given the user is on the sign in page
    When the user sign in using email "cbrose86@cbslocal.com" and password "garrikheis"
    Then user clicks on schedule button
    Then the minimum and maximum time in schedule should match with DB and API



