$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/bayram.feature");
formatter.feature({
  "name": "BAYRAM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "VA Light Side Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bayram1001"
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
  "name": "the user on home page should be able to sign in with email \"jalabaster7f@drupal.org\" and password \"terimapam\"",
  "keyword": "When "
});
formatter.match({
  "location": "SchedulingStepDef.the_user_on_home_page_should_be_able_to_sign_in_with_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms that VA LightSide is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_confirms_that_VA_LightSide_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hyrt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bayram1001"
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
  "name": "user clicks on hunt to make reservation",
  "keyword": "When "
});
formatter.match({
  "location": "bayram1001TestCases.user_clicks_on_hunt_to_make_reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"today\u0027s date\" as the desired date",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_chooses_as_the_desired_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters startTime \"8:30am\" endTime \"9:30am\" then click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.the_user_enters_startTime_endTime_then_click_search_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify free spots is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SchedulingStepDef.verify_free_spots_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on book for Stanford",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_clicks_on_book_for_Stanford()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the time",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_verifies_the_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "SchedulingStepDef.the_user_clicks_confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Stanford has been reserved as a desired room",
  "keyword": "And "
});
formatter.match({
  "location": "bayram1001TestCases.user_verifies_that_Stanford_has_been_reserved_as_a_desired_room()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bayram1001"
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
  "name": "user clicks on schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_clicks_on_schedule_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees a gray square and clicks on it",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_sees_a_gray_square_and_clicks_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"die luft der freiheit weht\" is visible for Standford room",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_verifies_that_is_visible_for_Standford_room(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the date",
  "keyword": "Then "
});
formatter.match({
  "location": "bayram1001TestCases.user_verifies_the_date()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});