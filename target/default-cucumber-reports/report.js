$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/asli_DB.feature");
formatter.feature({
  "name": "End to end reservation testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify user information: \u003cemail\u003e",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@asli"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "the user sign in using email \"cbrose86@cbslocal.com\" and password \"garrikheis\"",
  "keyword": "When "
});
formatter.match({
  "location": "SigninStepDef.the_user_sign_in_using_email_and_password(String,String)"
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
  "name": "the minimum and maximum time in schedule should match with DB",
  "keyword": "Then "
});
formatter.match({
  "location": "SchedulingStepDef.the_minimum_and_maximum_time_in_schedule_should_match_with_DB()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});