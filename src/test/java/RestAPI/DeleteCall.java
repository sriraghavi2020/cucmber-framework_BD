package RestAPI;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
public class DeleteCall {

	
	@Test
	public void deleteCall_Method() {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", "0");
		JSONObject payLoad = new JSONObject(map);
		System.out.println(payLoad.toJSONString());
		given().
			header("Content-Type", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(payLoad.toJSONString()).
			delete("http://localhost:3000/Employees/0").
		then().
			statusCode(204).
			log().all();
		
	}
}
