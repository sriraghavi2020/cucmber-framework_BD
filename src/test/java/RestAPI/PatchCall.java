package RestAPI;

import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.*;
import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;


public class PatchCall {

//patch call will update a single element/value in the index	
	@Test
	public void patchCall_Method() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("State", "VIC");
		JSONObject payLoad = new JSONObject(map);
		
		given().
			header("Content-Type", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(payLoad.toJSONString()).
		when().
			patch("http://localhost:3000/BudgetDirect_Car/rest_BD112").
		then().
			statusCode(200).
			log().all();
	}
}
