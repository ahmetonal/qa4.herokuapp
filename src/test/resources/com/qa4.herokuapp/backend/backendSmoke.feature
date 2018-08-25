Feature: Back end db testing
@db @smoke 
Scenario: Database testing from sign in page 
Given the user is on sign in page
When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
Then the user should verify light-side page is displayed
Then the user should click on team link
Then verify Me page information with DB entering this email "jalabaster7f@drupal.org"
