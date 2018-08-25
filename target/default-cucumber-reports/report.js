$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/backendSmoke.feature");
formatter.feature({
  "name": "Back end db testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Database testing from sign in page",
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
  "name": "the user is on sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeDBStepDefs.the_user_is_on_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sign in entering email \"jalabaster7f@drupal.org\" and password \"terimapam\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeDBStepDefs.the_user_sign_in_entering_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should verify light-side page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeDBStepDefs.the_user_should_verify_light_side_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click on team link",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeDBStepDefs.the_user_should_click_on_team_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Me page information with DB entering this email \"jalabaster7f@drupal.org\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeDBStepDefs.verify_Me_page_information_with_DB_entering_this_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});