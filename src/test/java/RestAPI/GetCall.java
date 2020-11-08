package RestAPI;

import org.testng.annotations.Test;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetCall {
	
	@Test
	public void OldGetCall_Method() {
		Response response = RestAssured.get("http://localhost:3000/Employees/14");
		System.out.println("Status code: "+response.getStatusCode());
		System.out.println("Response as String: "+response.asString());
		System.out.println("Body: "+response.getBody().asString());
		System.out.println("Time: "+response.getTime());
	}
	

	@Test
	public void NewGetCall_Method() {
		//rest assured --import static io.restassured.RestAssured.*
		//instead of calling RestAssured.get  can call directly get() method
		given().
			get("http://localhost:3000/Employees").
		then().
			statusCode(200).
			body("lastName", hasItems("Bosh", "Badhara")).
			body("subjectID[12]", equalTo(501)).
			body("id[12]", equalTo(14)).log().all();
	}

}
