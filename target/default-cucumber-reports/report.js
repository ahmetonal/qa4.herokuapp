<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/bbinbir_DB_testing.feature");
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/ahmet_DB.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qa4.herokuapp/backend/backendTalha.feature");
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
formatter.feature({
<<<<<<< HEAD
  "name": "DataBase Testing",
=======
<<<<<<< HEAD
  "name": "DataBase testing by Ahmet",
=======
  "name": "Back end db testing",
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "Testing VA Ligth Side Page with DataBase",
=======
<<<<<<< HEAD
  "name": "Verify  classes name",
=======
  "name": "",
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@ahmet"
=======
      "name": "@db"
    },
    {
<<<<<<< HEAD
      "name": "@bbinbirDB"
=======
      "name": "@talha"
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
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
<<<<<<< HEAD
  "name": "the user clicks on \"yale\" room and verifies its subtitle with Database",
=======
<<<<<<< HEAD
  "name": "the user should be able to see following names should be matched the db records",
  "rows": [
    {
      "cells": [
        "mit"
      ]
    },
    {
      "cells": [
        "harvard"
      ]
    },
    {
      "cells": [
        "yale"
      ]
    },
    {
      "cells": [
        "princeton"
      ]
    },
    {
      "cells": [
        "stanford"
      ]
    },
    {
      "cells": [
        "duke"
      ]
    },
    {
      "cells": [
        "berkeley"
      ]
    }
  ],
=======
  "name": "the user verify all rooms names which cluster_id is 3 in map page with DB",
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
  "keyword": "Then "
});
formatter.match({
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  "location": "Ahmet_DB.the_user_should_be_able_to_see_following_names_should_be_matched_the_db_record(String\u003e)"
=======
  "location": "MapPageStepDef.the_user_verify_all_rooms_names_which_cluster_id_is_in_map_page_with_DB(Integer)"
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
>>>>>>> branch 'master' of https://github.com/ahmetonal/qa4.herokuapp.git
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
  "name": "verify first five schedule  hours",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ahmet"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-KMQCVAG\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\ahmet\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51214}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 204529f3878fefce83a8ab2e18c0e1c2\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:395)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.herokuapp.step_definitions.SmokeDBStepDefs.the_user_sign_in_entering_email_and_password(SmokeDBStepDefs.java:35)\r\n\tat ✽.the user sign in entering email \"jalabaster7f@drupal.org\" and password \"terimapam\"(src/test/resources/com/qa4.herokuapp/backend/ahmet_DB.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should click on berkeley room",
  "keyword": "When "
});
formatter.match({
  "location": "Ahmet_DB.the_user_should_click_on_berkeley_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "subtitle should be fiat lux matched the db records",
  "keyword": "Then "
});
formatter.match({
  "location": "Ahmet_DB.subtitle_should_be_fiat_lux_matched_the_db_records()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the first five schedule hours should be matched the db records",
  "keyword": "Then "
});
formatter.match({
  "location": "Ahmet_DB.the_first_five_schedule_hours_should_be_matched_the_db_records()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my self verify",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ahmet"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-KMQCVAG\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\ahmet\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51214}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 204529f3878fefce83a8ab2e18c0e1c2\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:395)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.herokuapp.step_definitions.SmokeDBStepDefs.the_user_sign_in_entering_email_and_password(SmokeDBStepDefs.java:35)\r\n\tat ✽.the user sign in entering email \"jalabaster7f@drupal.org\" and password \"terimapam\"(src/test/resources/com/qa4.herokuapp/backend/ahmet_DB.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should click on team link",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeDBStepDefs.the_user_should_click_on_team_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user info role \"student-team-leader\" name \"Teri Mapam\" should match the db records",
  "keyword": "Then "
});
formatter.match({
  "location": "Ahmet_DB.user_info_role_name_should_match_the_db_records(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});