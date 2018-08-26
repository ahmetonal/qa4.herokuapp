$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/backendTalha.feature");
formatter.feature({
  "name": "Back end db testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@talha"
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
  "name": "the user verify all rooms names which cluster_id is 3 in map page with DB",
  "keyword": "Then "
});
formatter.match({
  "location": "MapPageStepDef.the_user_verify_all_rooms_names_which_cluster_id_is_in_map_page_with_DB(Integer)"
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