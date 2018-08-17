package com.herokuapp.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
				"pretty",
				"html:target/default-cucumber-reports",
				"json:target/cucumber.json"
		
		},
<<<<<<< HEAD
		
		tags="@asli",
		features="src/test/resources/com/qa4.herokuapp/features", 
		glue="com/herokuapp/step_definitions"
//		,dryRun =true
=======
		 
		tags="@talha",
		features="src/test/resources/com/qa4.herokuapp/features", 
		glue="com/herokuapp/step_definitions"
		,dryRun = false
		,monochrome = true
>>>>>>> 2f60bd095e71eb1378350fe78f66b55a3bda67f6
		)
public class CukesRunner {}
