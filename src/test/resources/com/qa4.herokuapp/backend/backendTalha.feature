Feature: Back end db testing

Scenario: 
Given the user is on sign in page
When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
Then the user click on "harvard" and verify description  with DB


Scenario: 
Given the user is on sign in page
When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
Then the user click on "mit" and verify description of subtitle with DB

@db @talha
Scenario: 
Given the user is on sign in page
When the user sign in entering email "jalabaster7f@drupal.org" and password "terimapam"
Then the user verify all rooms names which cluster_id is 3 in map page with DB

