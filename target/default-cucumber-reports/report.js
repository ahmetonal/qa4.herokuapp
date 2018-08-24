$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/asli.feature");
formatter.feature({
  "name": "End to end reservation testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify the page is uploaded correctly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@asli"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user sign in using email \"bcrosetti88@sitemeter.com\" and password \"jamesmcdonagh\"",
  "keyword": "Given "
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
  "name": "the user should be able to see the links",
  "rows": [
    {
      "cells": [
        "map"
      ]
    },
    {
      "cells": [
        "schedule"
      ]
    },
    {
      "cells": [
        "hunt"
      ]
    },
    {
      "cells": [
        "my"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SigninStepDef.the_user_should_be_able_to_see_the_links(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});