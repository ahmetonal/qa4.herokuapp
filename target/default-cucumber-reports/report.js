<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/asli.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/features/Talha.feature");
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
formatter.feature({
  "name": "End to end reservation testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "verify the page is uploaded correctly",
=======
  "name": "",
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@asli"
=======
      "name": "@talha"
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
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
<<<<<<< HEAD
=======
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
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
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
<<<<<<< HEAD
  "name": "the user should be able to see the links",
  "rows": [
    {
      "cells": [
        "map"
=======
  "name": "the system should display the product information:",
  "rows": [
    {
      "cells": [
        "name",
        "Ruthann Johnes"
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
      ]
    },
    {
      "cells": [
<<<<<<< HEAD
        "schedule"
=======
        "role",
        "student-team-leader"
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
      ]
    },
    {
      "cells": [
<<<<<<< HEAD
        "hunt"
=======
        "team",
        "CodeHunters"
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
      ]
    },
    {
      "cells": [
<<<<<<< HEAD
        "my"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SigninStepDef.the_user_should_be_able_to_see_the_links(String\u003e)"
=======
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
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});