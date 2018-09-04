$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/api/API_Smoke_Testing.feature");
formatter.feature({
  "name": "Api testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testing team data with API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@SmokeTemp"
    }
  ]
});
formatter.step({
  "name": "I am logged reservation api using \"jalabaster7f@drupal.org\" and \"terimapam\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user verifies status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the following team data should be returned:",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "team_id",
        "first_name",
        "last_name",
        "role",
        "batch",
        "location",
        "team"
      ]
    },
    {
      "cells": [
        "38",
        "Teri",
        "Mapam",
        "student-team-leader",
        "#8",
        "VA",
        "TheCrew"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing team data with API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ws"
    },
    {
      "name": "@SmokeTemp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged reservation api using \"jalabaster7f@drupal.org\" and \"terimapam\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Testing_Step_Defs.i_am_logged_reservation_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Testing_Step_Defs.the_user_verifies_status_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following team data should be returned:",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Testing_Step_Defs.the_following_team_data_should_be_returned()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.herokuapp.step_definitions.API_Testing_Step_Defs.the_following_team_data_should_be_returned(API_Testing_Step_Defs.java:56)\r\n\tat ✽.the following team data should be returned:(src/test/resources/com/qa4.herokuapp/api/API_Smoke_Testing.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});