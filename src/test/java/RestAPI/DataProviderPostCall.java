package RestAPI;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

public class DataProviderPostCall {

	
	Map<String, Object> map = new HashMap<String, Object>();
	


	@DataProvider(name="payLoad_Post")
	public Object[][] payLoadsPOST_DatatProvider() {
		//Object[No of indexes][No of elements in the index]
		Object[][] payLoad = new Object[2][6];
		payLoad[0][0] = "Aila";
		payLoad[0][1] = "Hubas";
		payLoad[0][2] = 201;
		payLoad[0][3] = 504;
		payLoad[0][4] = 122;
		payLoad[0][5] = "rest_102";

		payLoad[1][0] = "Brandan";
		payLoad[1][1] = "Bruts";
		payLoad[1][2] = 204;
		payLoad[1][3] = 501;
		payLoad[1][4] = 123;
		payLoad[1][5] = "rest_103";

		return payLoad;
	}
	
	@DataProvider(name="payLoad_BDPost")
	public Object[][] payLoadsPUT_DatatProvider() {
		//Object[No of indexes][No of elements in the index]
		//String Customer_Name, String Reg_Num, String state, int DOB_Day, int DOB_Month, int DOB_Year, String id
		return new Object[][] {
			{"Frank", "WWO-555", "ACT", 30, 11, 1989, "rest_BD101"},
			{"Brandan", "AXY-198", "NSW", 11, 06, 1970, "rest_BD102"}
		};
	}
	
	@DataProvider(name="deletePayload")
	public Object[] payLoad_DeleteCall() {
		return new Object[] {
				1,2,3,4,5,6,7	
		};
	}


	@Test
	public void GetCall() {

		baseURI = "http://localhost:3000"; 

		given().
		param("DepartmentID", "202").
		get("/Employees").
		then().
		statusCode(200).
		log().all();
	}


	@Test(dataProvider="payLoad_Post")
	public void postCall(String firstName, String lastName, int departmentID, int subjectID, int employeeID, String id) {

		baseURI = "http://localhost:3000";

		map.put("FirstName", firstName);
		map.put("LastName", lastName);
		map.put("DepartmentID", departmentID);
		map.put("subjectID", subjectID);
		map.put("EmployeeID", employeeID);
		map.put("id", id);
		
		JSONObject payLoad = new JSONObject(map);

		given().
		header("Content-Type", "application/json").
		contentType(ContentType.JSON).accept(ContentType.JSON).
		body(payLoad).
		when().
		post("/Employees").
		then().
		statusCode(201).
		log().all();
	}


	@Test(dataProvider="payLoad_BDPost")
	public void postCall_BDPost(String Customer_Name, String Reg_Num, String state, int DOB_Day, int DOB_Month, int DOB_Year, String id) {
		
		baseURI = "http://localhost:3000";
		
		map.put("Customer_Name", Customer_Name);
		map.put("RegistrationNumber", Reg_Num);
		map.put("State", state);
		map.put("DOB", DOB_Day+"/"+DOB_Month+"/"+DOB_Year);
		map.put("id", id);
		JSONObject payLoad = new JSONObject(map);
		System.out.println(payLoad);
		given().
			header("Content-Type", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(payLoad).
		when().
			post("/BudgetDirect_Car").
		then().
			statusCode(201).
			log().all();

	}
	
	@Test
	public void deleteCall(int id) {
		
		baseURI = "http://localhost:3000";
		
		map.put("id", id);
		JSONObject payLoad = new JSONObject(map);
		
		given().
			header("Content-Type", "application/json").
			body(payLoad).
		when().
			delete("/BudgetDirect_Car/"+id).
		then().
			statusCode(200).
			log().all();
	}

}
