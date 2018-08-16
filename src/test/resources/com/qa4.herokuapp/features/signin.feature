Feature: End to end reservation testing
@smoke
Scenario: reservation testing from sign in page 
Given the user is on the sign in page
When the user sign in using email "jalabaster7f@drupal.org" and password "terimapam"
Then verify light-side page is displayed
When the user clicks on hunt to make reservation
Then verify hunt for spot page is displayed 
Then user chooses desired date "21" and time from "12:00am" to "1:30pm" then clicks search button
Then user clicks on book to reserve for "stanford" room
Then verify booking confirmation page is displayed 
And user clicks on confirm button to reserve the room
Then verify "conference in stanford has been successfully scheduled" message is displayed

@ahmet
Scenario: reservation testing from sign in page 
Given the user is on the home page
When the user click hunt
And subtitle “hunt for spot” should be display
Then the user select 8-17-2018 11.00-12.00am 
And the user choose stanford
And confirm reservation