$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/nejla.feature");
formatter.feature({
  "name": "Nejla\u0027s End to end testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the schedule page is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@nejla"
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
  "name": "the user clicks on the schedule button",
  "keyword": "And "
});
formatter.match({
  "location": "SchedulingStepDef.the_user_clicks_on_the_schedule_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the schedule page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SchedulingStepDef.verify_the_schedule_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});