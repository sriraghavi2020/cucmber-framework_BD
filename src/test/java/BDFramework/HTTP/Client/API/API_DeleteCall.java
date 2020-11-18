package BDFramework.HTTP.Client.API;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONObject;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;

public class API_DeleteCall {
	
	
	public static int response_status_code_200 =200;		//OK
	public static int response_status_code_201 =201;		//created
	public static int response_status_code_204 =204;		//Delete
	public static int response_status_code_400 =400;
	public static int response_status_code_404 =404;
	public static int response_status_code_500 =500;
	
	
	
	String URL;
	String payload;
	
	PrintWriter pr;
	Map<String, String> header;
	Map<String, String> PLoad;
	JSONObject jsonPayload;
	
	CloseableHttpResponse response;
	int statusCode;
	String responseAsString;

	public void gettting_URL_for_API_Request(DataTable reqURL) {
		List<List<String>> data = reqURL.asLists();
		URL = data.get(0).get(0);
	}


	public void headerInfo_postRequest(DataTable headerInfo) {
		List<Map<String, String>> info = headerInfo.asMaps();
		header = new HashMap<String, String>();
		for(int i=0; i<info.size(); i++) {
			header.put(info.get(i).get("Key"), info.get(i).get("Value"));
		}
	}
	
	
	public void deleteCall_API_request() throws ClientProtocolException, IOException {
		CloseableHttpClient link = HttpClients.createDefault();
		HttpDelete deleteURL = new HttpDelete(URL);
		for(Map.Entry<String, String> entry: header.entrySet()) {
			deleteURL.addHeader(entry.getKey(), entry.getValue());
		}
		response = link.execute(deleteURL);
	}
	
	public void deleteCallResponse_Storing_inFile(String filePath) throws FileNotFoundException {
		statusCode = response.getStatusLine().getStatusCode();
		File file = new File(System.getProperty("user.dir")+filePath);
		FileOutputStream fio = new FileOutputStream(file, true);
		pr = new PrintWriter(fio);
		pr.println("Status code: "+statusCode);
	}
	
	public void assertion(String id) {
		Assert.assertEquals(response_status_code_200, statusCode, "Error message: found Status code is"+statusCode);
		
		pr.println("Deleted content id: "+id);
		pr.flush();
		pr.close();
	}
	
	
	
}
