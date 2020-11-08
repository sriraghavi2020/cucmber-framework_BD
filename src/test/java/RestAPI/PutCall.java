package RestAPI;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
public class PutCall {

//put call will update as whole index 
	
	@Test
	public void putCall_Method() {
		Map<String, Object> payLoad = new HashMap<String, Object>();
		payLoad.put("firstName", "Kiaradhana");
		payLoad.put("lastName", "Sudh");
		payLoad.put("employeeID", "120");
		payLoad.put("departmentID", "204");
		payLoad.put("subjectID", "503");
		payLoad.put("id", "rest_101");
		
		JSONObject jsonPayLoad = new JSONObject(payLoad);
		System.out.println(jsonPayLoad);
		given().
		header("Content-Type", "application/json").
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
			body(jsonPayLoad).
		when().
			put("http://localhost:3000/Employees/rest_100").
		then().
			statusCode(200).
			log().all();
	}

}
