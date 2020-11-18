package BDFramework.RestAPI.Response;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.json.simple.JSONObject;
import io.cucumber.datatable.DataTable;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APICall_Response {
	long Response_time;
	int response_StatusCode;
	String response_body;
	String response_header;
	String reponse_StatusLine;

	String baseUri;
	String reqURI;
	int SCode;
	Map<String, Object> map; 

	
	public void getRequest(DataTable uri) {
		List<List<String>> requestURL = uri.asLists();

		Response response = RestAssured.get(requestURL.get(0).get(0));
		Response_time = response.getTime();
		response_StatusCode = response.getStatusCode();
		response_body = response.getBody().asString();
		response_header = response.getContentType();
		reponse_StatusLine = response.getStatusLine();
	}

	
	public void Storing_the_GetCall_Response(String filePath) {

		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileIO = new FileOutputStream(file);
			PrintWriter pr = new PrintWriter(fileIO);
			pr.println("Response Time : "+Response_time);
			pr.println("Status line: "+reponse_StatusLine);
			pr.println("Header: "+response_header);
			pr.println("StatusCode: "+response_StatusCode);
			pr.println("Body: "+response_body);
			pr.flush();
			pr.close();
		}catch(IOException e) {

		}
	}


	public void getting_baseURI(DataTable baseURI){
		List<List<String>> uri = baseURI.asLists();
		baseUri = uri.get(0).get(0);
	}


	public void getReQ_URI(DataTable getReQ) {
		List<List<String>> getCond = getReQ.asLists(String.class);
		reqURI = getCond.get(0).get(0);
	}


	public void getting_statusCode(int SCode) {
		this.SCode = SCode;
	}

	
	public void payloay_for_post(String id, String cus_name, String regNum, String state, String DOB) {
		map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("RegistrationNumber", regNum);
		map.put("Customer_Name", cus_name);
		map.put("State", state);
		map.put("DOB", DOB);
	}
	

	public void postRequest() {

		JSONObject jsonPayload = new JSONObject(map);

		RestAssured.baseURI = baseUri;
		RequestSpecification apiRequest = RestAssured.given();
		apiRequest.body(jsonPayload.toJSONString());
		apiRequest.header("ContenType", "application/json");
		apiRequest.contentType(ContentType.JSON);
		apiRequest.accept(ContentType.JSON);
		Response response = apiRequest.post(reqURI);

		Response_time = response.getTime();
		response_StatusCode = response.getStatusCode();
		response_body = response.body().asString();
		reponse_StatusLine = response.getStatusLine();

	}

	
	public void Storing_the_PostCall_Response(String filePath) {

		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileIO = new FileOutputStream(file, true);
			PrintWriter pr = new PrintWriter(fileIO);
			pr.println("Payload: "+map);
			pr.println("Response Time : "+Response_time);
			pr.println("Status line: "+reponse_StatusLine);
			pr.println("StatusCode: "+response_StatusCode);
			pr.println("Response Body: "+response_body);
			pr.flush();
			pr.close();
		}catch(IOException e) {

		}
	}
	

	public void payLoad_for_DeleteCall(String id) {
		map = new HashMap<String, Object>();
		map.put("id", id);

	}


	public void payLoad_for_PatchCall(String state) {
		map = new HashMap<String, Object>();
		map.put("State", state);

	}


	public void payLoad_for_PutCall(String name) {
		map = new HashMap<String, Object>();
		map.put("Customer_Name", name);

	}


	public void DeleteCallMethod(String id) {

		JSONObject jsonPayload = new JSONObject(map);

		RestAssured.baseURI = baseUri;
		RequestSpecification apiRequest = RestAssured.given();
		apiRequest.body(jsonPayload.toJSONString());
		apiRequest.header("ContenType", "application/json");
		apiRequest.contentType(ContentType.JSON);
		apiRequest.accept(ContentType.JSON);
		Response response = apiRequest.delete(reqURI+"/"+id);

		response_StatusCode = response.getStatusCode();
		Response_time = response.getTimeIn(TimeUnit.SECONDS);

	}


	public void storing_DeleteCall_Response(String filePath) {
		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileIO = new FileOutputStream(file, true);
			PrintWriter pr = new PrintWriter(fileIO);
			pr.println("Id that are deleted: "+map);
			pr.println("Response Time : "+Response_time);
			pr.println("StatusCode: "+response_StatusCode);
			pr.flush();
			pr.close();
		}catch(IOException e) {

		}
	}


	public void PatchCallMethod(String id) {

		JSONObject jsonPayload = new JSONObject(map);

		RestAssured.baseURI = baseUri;
		RequestSpecification apiRequest = RestAssured.given();
		apiRequest.body(jsonPayload.toJSONString());
		apiRequest.header("ContenType", "application/json");
		apiRequest.contentType(ContentType.JSON);
		apiRequest.accept(ContentType.JSON);
		Response response = apiRequest.patch(reqURI+"/"+id);

		response_StatusCode = response.getStatusCode();
		Response_time = response.getTimeIn(TimeUnit.SECONDS);
		response_body = response.body().asString();


	}


	public void storing_PatchCall_Response(String filePath) {
		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileIO = new FileOutputStream(file, true);
			PrintWriter pr = new PrintWriter(fileIO);
			pr.println("Patch call for ID: "+map);
			pr.println("Response Time : "+Response_time);
			pr.println("StatusCode: "+response_StatusCode);
			pr.println("Response body: "+response_body);
			pr.flush();
			pr.close();
		}catch(IOException e) {

		}
	}


	public void PutCallMethod(String id) {

		JSONObject jsonPayload = new JSONObject(map);

		RestAssured.baseURI = baseUri;
		RequestSpecification apiRequest = RestAssured.given();
		apiRequest.body(jsonPayload.toJSONString());
		apiRequest.header("ContenType", "application/json");
		apiRequest.contentType(ContentType.JSON);
		apiRequest.accept(ContentType.JSON);
		Response response = apiRequest.put(reqURI+"/"+id);

		response_StatusCode = response.getStatusCode();
		Response_time = response.getTimeIn(TimeUnit.SECONDS);
		response_body = response.body().asString();


	}




}
