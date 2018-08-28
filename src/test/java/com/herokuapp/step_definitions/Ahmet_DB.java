package com.herokuapp.step_definitions;

import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.herokuapp.pages.BerkeleyPage;
import com.herokuapp.pages.MapPage;
import com.herokuapp.utilities.BrowserUtils;
import com.herokuapp.utilities.DBUtils;
import org.junit.Assert;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.*;

public class Ahmet_DB {
	
	MapPage mapPage=new MapPage();
	BerkeleyPage berkeleyPage=new BerkeleyPage();
	
	@Then("the user should be able to see following names should be matched the db records")
	public void the_user_should_be_able_to_see_following_names_should_be_matched_the_db_record(List<String>classes) {
		
		String sqlQuery="select  name from public.room where cluster_id=3;";
		List<List<Object>>list=DBUtils.getQueryResultList(sqlQuery);
	 
	for (int i = 0; i < 7; i++) {
		List<Object>result=list.get(i);
		String expect=(String) result.get(0);
		Assert.assertEquals(expect , classes.get(i));
	}
	
	}
	
	
	@When("the user should click on berkeley room")
	public void the_user_should_click_on_berkeley_room() throws Exception {
		Thread.sleep(3);
	   mapPage.berkeleyButton.click();
		
	}
	
	@Then("subtitle should be fiat lux matched the db records")
	public void subtitle_should_be_fiat_lux_matched_the_db_records() throws Exception {
		BerkeleyPage berkeleyPage=new BerkeleyPage();
		String sqlQuery="select description from public.room where name='berkeley';";
		String expectedName=(String) DBUtils.getCellValue(sqlQuery);
		Thread.sleep(2);
		String actualName=berkeleyPage.fiatLuxText.getText();
		Thread.sleep(2);
		Assert.assertEquals(expectedName , actualName);
	}

	@Then("the first five schedule hours should be matched the db records")
	public void the_first_five_schedule_hours_should_be_matched_the_db_records() throws Exception {
		 BrowserUtils.waitFor(2);
		String sqlQuery="select  start from public.timeline where id<11;";
		List<List<Object>>list=DBUtils.getQueryResultList(sqlQuery);
		BrowserUtils.waitFor(2);
		for (int i = 0; i < 5; i++) {
			List<Object>result=list.get(i);
			 BrowserUtils.waitFor(2);
			Date date= (Date) result.get(0);
			DateFormat df = new SimpleDateFormat("HH:mm:ss");
			String expect = df.format(date);
			Thread.sleep(2);
			String actual="0"+berkeleyPage.findHour(i+1).getText().replaceAll("AM", ":00");
			Thread.sleep(2);
		
			Assert.assertEquals(expect ,actual);  
		}
		
	}
	@Then("user info role {string} name {string} should match the db records")
	public void user_info_role_name_should_match_the_db_records(String role, String name) {
		
		String sqlQuery="SELECT role,firstname,lastname FROM public.users where firstname='Teri';";
		  BrowserUtils.waitFor(2);
		List<Map<String, Object>> queryResult= DBUtils.getQueryResultMap(sqlQuery);
		BrowserUtils.waitFor(2);
		Map<String, Object> result= queryResult.get(0);
		 String expectedRolename = (String)result.get("role");
		 String expectedFirstLast = (String)result.get("firstname")+" "+(String)result.get("lastname");
		  BrowserUtils.waitFor(2);
		 Assert.assertEquals( expectedRolename,role); 
		 Assert.assertEquals( expectedFirstLast,name); 
		 
	}
	
	
	
	
	
	
	
	
	
	

}
