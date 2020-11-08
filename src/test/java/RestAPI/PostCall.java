package RestAPI;

import java.util.HashMap;
import java.util.Map;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;
import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;

public class PostCall {
	
	
	@Test
	public void PostCall_withSimplePayload() {
		Map<String, Object> map = new HashMap<String, Object>();
		/*{
	    "subjectID": 501,
	    "id": 14,
	    "lastName": "Bosh",
	    "employeeID": 113,
	    "departmentID": 202,
	    "firstName": "Kia"
	  },*/
		map.put("firstName", "Vaidhiya");
		map.put("lastName", "Nadhan");
		map.put("employeeID", 121);
		map.put("departmentID", 201);
		map.put("subjectID", 501);
		map.put("id", "rest_105");
		System.out.println(map);
		JSONObject payLoad = new JSONObject(map);
		System.out.println(payLoad);
		
		given().
			header("Content-Type", "application/json").
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
			body(payLoad).
		when().
			post("http://localhost:3000/Employees").
		then().
			statusCode(201);
	}

}
