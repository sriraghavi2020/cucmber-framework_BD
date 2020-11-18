package BDFramework.HTTP.Client.API;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.testng.Assert;

import com.google.gson.Gson;

import BDFramework.HTTP.Client.API.postPayLoad.payLoad;
import io.cucumber.datatable.DataTable;

public class API_PostCall {

	public static int response_status_code_200 =200;		//OK
	public static int response_status_code_201 =201;		//created
	public static int response_status_code_400 =400;
	public static int response_status_code_404 =404;
	public static int response_status_code_500 =500;


	payLoad payloadclass;

	String URL;
	int statusCode;
	String responseAsString;
	String payLoadAsString;


	JSONArray responseAsJSON ;
	CloseableHttpResponse response;
	JSONObject jsonObject;

	PrintWriter pr;
	Map<String, String> header;
	Map<String, Object> PLoad;
	Gson gson;

	public void gettting_URL_for_API_Request(DataTable reqURL) {
		List<List<String>> data = reqURL.asLists();
		URL = data.get(0).get(0);
		System.out.println(URL);
	}


	public void headerInfo_postRequest(DataTable headerInfo) {
		List<Map<String, String>> info = headerInfo.asMaps();
		header = new HashMap<String, String>();
		for(int i=0; i<info.size(); i++) {
			header.put(info.get(i).get("Key"), info.get(i).get("Value"));
		}
		System.out.println(header);
	}

	public void payLoad_For_postCall(DataTable payload) throws IOException {
		List<Map<String, String>> load = payload.asMaps();
		//		PLoad = new HashMap<String, Object>();
		//		for(int i=0; i<load.size(); i++) {
		//		PLoad.put(load.get(i).get("Key"), load.get(i).get("Value"));
		//		}
		//		System.out.println(PLoad);
		//Writing the data to the file is for assertion purpose is later used to compare for assertion
		FileWriter FW = new FileWriter(System.getProperty("user.dir")+"\\src\\test\\java\\BDFramework\\HTTP\\Client\\API\\postPayLoad\\payload.json");
		gson = new Gson();
		//gson.toJson(PLoad, FW);//Can convert to json directly if we have all field as string--To specify the fields different type need to create a class
		payloadclass = new payLoad(load.get(0).get("Value"), load.get(1).get("Value"), Integer.parseInt(load.get(2).get("Value")), load.get(3).get("Value"), Integer.parseInt(load.get(4).get("Value")), Integer.parseInt(load.get(5).get("Value")));
		gson.toJson(payloadclass, FW);
		FW.close();
		payLoadAsString = gson.toJson(payloadclass);


	}
	public void postCallRequest() throws ClientProtocolException, IOException {
		CloseableHttpClient link = HttpClients.createDefault();

		HttpPost postURL = new HttpPost(URL);
		postURL.setEntity(new StringEntity(payLoadAsString));
		for(Map.Entry<String, String> entry: header.entrySet()) {
			postURL.addHeader(entry.getKey(), entry.getValue());
		}
		response = link.execute(postURL);
	}


	public void storing_the_response_for_post_call(String filePath) throws ParseException, IOException {

		statusCode = response.getStatusLine().getStatusCode();
		responseAsString = EntityUtils.toString(response.getEntity(), "UTF-8");
		jsonObject = new JSONObject(responseAsString);

		File file = new File(System.getProperty("user.dir")+filePath);
		FileOutputStream fo = new FileOutputStream(file);
		pr = new PrintWriter(fo);
		pr.println("Status code: "+statusCode);
		pr.println("response as string: "+responseAsString);
		pr.println("response as JSON Object: "+jsonObject);

	}


	public void assertion_of_post_call_response() throws IOException, org.json.simple.parser.ParseException {

		Assert.assertEquals(response_status_code_201, statusCode, "Status code is "+statusCode+" and the expected");

		JSONParser parser = new JSONParser();
		Assert.assertEquals(parser.parse(responseAsString), parser.parse(payLoadAsString), "Assertion");
		pr.println("JSON payload is asserted");

		pr.flush();
		pr.close();

	}


}
