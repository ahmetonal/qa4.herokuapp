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
      "name": "@SmokeTemp"
    }
  ]
});
formatter.step({
  "name": "the user should accepts type in JSON",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should send  GET request to REST url",
  "keyword": "When "
});
formatter.step({
  "name": "the user verifies status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the user should be able to get response content in JSON",
  "keyword": "And "
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
        "id",
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
      "name": "@SmokeTemp"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user should accepts type in JSON",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should send  GET request to REST url",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies status code is 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be able to get response content in JSON",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the following team data should be returned:",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});