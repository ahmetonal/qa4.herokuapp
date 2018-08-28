Feature: DataBase Testing
@db @bbinbirDB
Scenario: Testing VA Ligth Side Page with DataBase
Given the user is on sign in page
When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
Then the user clicks on "yale" room and verifies its subtitle with Database

@db @bbinbirDB
Scenario: Checking Myself page for name of the team which is TheCrew
Then the user click on myself button
Then user verifies the name of the person with Database
Then user verifies the name of the team with Database

@db @bbinbirDB
Scenario: Checking team page to verify some stuff
Then user clicks on team tab
Then user verifies role for Teri Mapam



