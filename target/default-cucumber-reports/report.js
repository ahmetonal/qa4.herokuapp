$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/bbinbir_DB_testing.feature");
formatter.feature({
  "name": "DataBase Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing VA Ligth Side Page with DataBase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@bbinbirDB"
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
  "name": "the user clicks on \"yale\" room and verifies its subtitle with Database",
  "keyword": "Then "
});
formatter.match({
  "location": "bbinbirDataBaseTesting.the_user_clicks_on_room_and_verifies_its_subtitle_with_Database(String)"
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
formatter.scenario({
  "name": "Checking Myself page for name of the team which is TheCrew",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@bbinbirDB"
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
  "name": "the user click on myself button",
  "keyword": "Then "
});
formatter.match({
  "location": "MapPageStepDef.the_user_click_on_myself_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the name of the person with Database",
  "keyword": "Then "
});
formatter.match({
  "location": "bbinbirDataBaseTesting.user_verifies_the_name_of_the_person_with_Database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the name of the team with Database",
  "keyword": "Then "
});
formatter.match({
  "location": "bbinbirDataBaseTesting.user_verifies_the_name_of_the_team_with_Database()"
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
formatter.scenario({
  "name": "Checking team page to verify some stuff",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@bbinbirDB"
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
  "name": "user clicks on team tab",
  "keyword": "Then "
});
formatter.match({
  "location": "bbinbirDataBaseTesting.user_clicks_on_team_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies role for Teri Mapam",
  "keyword": "Then "
});
formatter.match({
  "location": "bbinbirDataBaseTesting.user_verifies_role_for_Teri_Mapam()"
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