package BDFramework.HTTP.Client.API;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import org.apache.http.Header;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;

public class API_GetCall {
	
	ValidateJSONresponse validateJsonResponse;
	
	public static int response_status_code_200 =200;		//OK
	public static int response_status_code_201 =201;		//created
	public static int response_status_code_400 =400;
	public static int response_status_code_404 =404;
	public static int response_status_code_500 =500;

	String URL;
	int statusCode;
	String responseAsString;
	
	JSONArray responseAsJSON ;
	CloseableHttpResponse response;
	JSONObject jsonObject;
	
	PrintWriter pr;
	
	public CloseableHttpResponse API_GetRequest(DataTable url) throws ClientProtocolException, IOException{
		List<List<String>> requestURL = url.asLists();
		URL = requestURL.get(0).get(0);
		
		CloseableHttpClient link = HttpClients.createDefault();
		HttpGet getRequest = new HttpGet(URL);
		response = link.execute(getRequest);
		return response;
	}
	
	
	public void getCallResponse(String filePath) throws ParseException, IOException {
		statusCode = response.getStatusLine().getStatusCode();
		responseAsString = EntityUtils.toString(response.getEntity(), "UTF-8");
		//responseAsJSON = new JSONArray(responseAsString);
		
		
		jsonObject = new JSONObject(responseAsString);
		
		
		Header[] responseHeader = response.getAllHeaders();
		HashMap<String, String> receivingheader = new HashMap<String, String>();
		for(Header header:responseHeader) {
			receivingheader.put(header.getName(), header.getValue());
		}
		
		File file = new File(System.getProperty("user.dir")+filePath);
		FileOutputStream fio = new FileOutputStream(file);
		pr = new PrintWriter(fio);
		pr.println("StatusCode: "+statusCode);
		pr.println("Response as String:"+responseAsString);
		//pr.println("Response as JSONString: "+responseAsJSON);
		pr.println("Response as JSON Object: "+jsonObject);
		pr.println("Header information: "+receivingheader);
	}
	
	public void getCallResponseVerification(String id) {
		
		validateJsonResponse =new ValidateJSONresponse();
		Assert.assertEquals(statusCode, response_status_code_200, "Status code is not 200");
		String response = validateJsonResponse.validateResponseJSONObject(jsonObject, "Customer_Name");
		System.out.println(response);
		switch(id) {
		case "rest_BD112":
			Assert.assertEquals(response, "Jill");
			pr.println("Asserted getCall response ID-"+id);
			break;
		case "rest_BD113":
			Assert.assertEquals(response, "Jung");
			pr.println("Asserted getCall response ID-"+id);
			break;
		case "rest_BD114":
			Assert.assertEquals(response, "Juck");
			pr.println("Asserted getCall response ID-"+id);
			break;
		}
		pr.flush();
		pr.close();
	}
}
