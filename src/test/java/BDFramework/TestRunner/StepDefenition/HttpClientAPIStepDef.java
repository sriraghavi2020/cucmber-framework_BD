package BDFramework.TestRunner.StepDefenition;

import java.io.IOException;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;

import BDFramework.HTTP.Client.API.API_DeleteCall;
import BDFramework.HTTP.Client.API.API_GetCall;
import BDFramework.HTTP.Client.API.API_PostCall;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class HttpClientAPIStepDef {
	API_GetCall apiGetcall;
	API_PostCall apiPostcall;
	API_DeleteCall apiDeletecall;



	@Given("^Hitting API with get request on URL$")
	public void hitting_API_with_get_request_on_URL(DataTable URL) throws ClientProtocolException, IOException {
		apiGetcall = new API_GetCall();
		apiGetcall.API_GetRequest(URL);

	}
	@Then("^Storing the get call response to file (.*)$")
	public void storing_the_get_call_response_to_file(String filename) throws ParseException, IOException {
		apiGetcall.getCallResponse(filename);

	}
	
	@Then("^Asserting get call response for (.*)$")
	public void asserting_get_call_response_for(String id) {
		apiGetcall.getCallResponseVerification(id);
		
	}
	
	
	
	@Given("^URL for post request$")
	public void url_for_post_request(DataTable URL){
		apiPostcall = new API_PostCall();
		apiPostcall.gettting_URL_for_API_Request(URL);
	}
	
	@Then("^Header for the post request$")
	public void header_for_the_post_request(DataTable header){
		apiPostcall.headerInfo_postRequest(header);
	}
	
	@Then("^Payload for post request$")
	public void payload_for_post_request(DataTable payload) throws IOException {
		apiPostcall.payLoad_For_postCall(payload);
	}
	
	@Then("^Hitting API with post request$")
	public void hitting_API_with_post_request() throws ClientProtocolException, IOException {
		apiPostcall.postCallRequest();
	}
	
	@Then("^Storing the post call response to file (.*)$")
	public void storing_the_post_call_response_to_file(String filePath) throws ParseException, IOException {
		apiPostcall.storing_the_response_for_post_call(filePath);
	}
	
	@Then("^Asserting the response$")
	public void asserting_the_response() throws IOException, org.json.simple.parser.ParseException {
		apiPostcall.assertion_of_post_call_response();
	}
	
	
	
	@Given("^URL for delete request$")
	public void url_for_delete_request(DataTable URL){
		apiDeletecall = new API_DeleteCall();
		apiDeletecall.gettting_URL_for_API_Request(URL);
	}
	
	@Then("^Header for the delete request$")
	public void header_for_the_delete_request(DataTable header){
		apiDeletecall.headerInfo_postRequest(header);
	}
	
	@Then("^Hitting API with delete request$")
	public void hitting_API_with_delete_request() throws ClientProtocolException, IOException {
		apiDeletecall.deleteCall_API_request();
	}
	
	@Then("^Storing the delete call response to file (.*)$")
	public void storing_the_delete_call_response_to_file(String filePath) throws ParseException, IOException {
		apiDeletecall.deleteCallResponse_Storing_inFile(filePath);
	}
	
	@Then("^Asserting the response for delete call (.*)$")
	public void asserting_the_response_for_delete_call(String id) throws IOException, org.json.simple.parser.ParseException {
		apiDeletecall.assertion(id);
	}

}
