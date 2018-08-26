$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/GS_DB_Testing.feature");
formatter.feature({
  "name": "DataBase testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing team info with DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@gulnoza"
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
  "name": "the user logins using \"gmcalister7n@google.nl\" \"arluenereolfo\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GS_TeamInfo_DB_StepDefs.the_user_logins_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be on team page",
  "keyword": "When "
});
formatter.match({
  "location": "GS_TeamInfo_DB_StepDefs.the_user_should_be_on_team_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system should display all member of the \"Spark\" and retrieve teams information with db",
  "keyword": "Then "
});
formatter.match({
  "location": "GS_TeamInfo_DB_StepDefs.system_should_display_all_member_of_the_and_retrieve_teams_information_with_db(String)"
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