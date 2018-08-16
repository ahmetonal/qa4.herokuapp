$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/signin.feature");
formatter.feature({
  "name": "End to end reservation testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "reservation testing from sign in page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "SigninStepDef.the_user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sign in using email \"jalabaster7f@drupal.org\" and password \"terimapam\"",
  "keyword": "When "
});
formatter.match({
  "location": "SigninStepDef.the_user_sign_in_using_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify light-side page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.verify_light_side_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on hunt to make reservation",
  "keyword": "When "
});
formatter.match({
  "location": "SigninStepDef.the_user_clicks_on_hunt_to_make_reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify hunt for spot page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.verify_hunt_for_spot_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses desired date \"21\" and time from \"12:00am\" to \"1:30pm\" then clicks search button",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.user_chooses_desired_date_and_time_from_to_then_clicks_search_button(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on book to reserve for \"stanford\" room",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.user_clicks_on_book_to_reserve_for_room(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify booking confirmation page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.verify_booking_confirmation_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on confirm button to reserve the room",
  "keyword": "And "
});
formatter.match({
  "location": "SigninStepDef.user_clicks_on_confirm_button_to_reserve_the_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"conference in stanford has been successfully scheduled\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninStepDef.verify_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});