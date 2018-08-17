$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/Talha.feature");
formatter.feature({
  "name": "End to end reservation testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@talha"
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
  "name": "the user sign in using email \"daldie7l@seattletimes.com\" and password \"ruthannjohnes\"",
  "keyword": "When "
});
formatter.match({
  "location": "SigninStepDef.the_user_sign_in_using_email_and_password(String,String)"
});
formatter.result({
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
  "name": "the system should display the product information:",
  "rows": [
    {
      "cells": [
        "name",
        "Ruthann Johnes"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-leader"
      ]
    },
    {
      "cells": [
        "team",
        "CodeHunters"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyselfPageStepDef.the_system_should_display_the_product_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});