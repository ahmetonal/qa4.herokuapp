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
		

		tags="@talha",

		features= {"src/test/resources/com/qa4.herokuapp/features", 
				"src/test/resources/com/qa4.herokuapp/backend"}, 
			
		glue="com/herokuapp/step_definitions"
				

		,monochrome = true
		,dryRun = false

	

		)
public class SmokeTestRunner {}
  
