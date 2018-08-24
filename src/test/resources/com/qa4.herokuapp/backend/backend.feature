Feature: Back end testing
@smoke
Scenario: Database testing from sign in page 
Given the user is on the sign in page
When the user sign in using email "jalabaster7f@drupal.org" and password "terimapam"
Then verify light-side page is displayed
Then verify Me page information with DB using this email "jalabaster7f@drupal.org"