package BDFramework.RestAPI.BaseURI;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItem;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;

import io.cucumber.datatable.DataTable;
import io.restassured.http.ContentType;

public class API_Call {

	String baseUri;
	String paramKey;
	String paramValue;
	String reqURI;
	String bodyCheckKey;
	Object bodyCheckValue;
	int SCode;
	Map<String, Object> map;
	 
	
	public void getting_baseURI(DataTable baseURI){
		List<List<String>> uri = baseURI.asLists();
		baseUri = uri.get(0).get(0);
	}
	
	
	public void getting_Params(DataTable params) {
		List<List<String>> cond = params.asLists(String.class);
		paramKey = cond.get(0).get(0);
		paramValue = cond.get(0).get(1); 
	}
	
	public void getReQ_URI(DataTable getReQ) {
		List<List<String>> getCond = getReQ.asLists(String.class);
		reqURI = getCond.get(0).get(0);
	}
	
	
	public void getting_statusCode(int SCode) {
		this.SCode = SCode;
	}
	
	
	public void getCall_Body_check(DataTable bodyContent) {
		List<List<String>> content = bodyContent.asLists();
		bodyCheckKey = content.get(0).get(0);
		bodyCheckValue = content.get(0).get(1);
	}
	
	
	public void payLoad_for_postCall(DataTable payLoad) {
		List<Map<String, String>> payload = payLoad.asMaps();
		
		map = new HashMap<String, Object>();
		for(int i=0; i<payload.size(); i++) {
		map.put((String) payload.get(i).get("Key"), payload.get(i).get("Value"));
		}
		System.out.println(map);
		System.out.println(map.get("id"));
	}
	
	public void payloay_for_postCall_Examples(String id, String FirstName, String LastName, int EmpID, int DeptID, int SubID) {
	
		map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("firstName", FirstName);
		map.put("lastName", LastName);
		map.put("EmpID", EmpID);
		map.put("DeptID", DeptID);
		map.put("SubID", SubID);
		
	}
	public void hitting_API_withGetCall() {
		baseURI = baseUri;
		given().
			param(paramKey, paramValue).
		when().
			get(reqURI).
		then().
			body(bodyCheckKey, hasItem(bodyCheckValue)).
			statusCode(SCode).log().all();
	}
	
	
	public void hitting_API_withPostCall() {
		JSONObject jsonPayload= new JSONObject(map);
		System.out.println(jsonPayload);
		
		baseURI = baseUri;
		given().
			header("Content-Type", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(jsonPayload).
		when().
			post(reqURI).
		then().
			statusCode(SCode).log().all();
	}
	
	
	public void hitting_API_withPatchCall() {
		JSONObject jsonPayLoad = new JSONObject(map);
		
		baseURI = baseUri;
		given().
			header("ContentType", "apllication/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(jsonPayLoad).
		when().
			patch(reqURI).
		then().
			statusCode(SCode).log().all();
	}
	
	
	public void hitting_API_withPutCall() {
		JSONObject jsonPayload = new JSONObject(map);
		
		baseURI = baseUri;
		given().
			header("ContentType", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(jsonPayload).
		when().
			put(reqURI).
		then().
			statusCode(SCode).log().all();
		
	}
	
	
	public void hitting_API_withDeleteCall() {
		JSONObject jsonPayload = new JSONObject(map);
		
		baseURI = baseUri;
		given().
			header("ContentType", "application/json").
			contentType(ContentType.JSON).accept(ContentType.JSON).
			body(jsonPayload).
		when().
			delete(reqURI+"/"+map.get("id")).
		then().
			statusCode(SCode).log().all();
	}
	
}
