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

		//hey

		



		
		tags="@smoke",
		features="src/test/resources/com/qa4.herokuapp/features", 
		glue="com/herokuapp/step_definitions"
//		,dryRun =true
	//	,monochrome = true


		)

public class CukesRunner {}
