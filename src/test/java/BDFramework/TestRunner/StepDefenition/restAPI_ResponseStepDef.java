package BDFramework.TestRunner.StepDefenition;

import BDFramework.RestAPI.Response.APICall_Response;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class restAPI_ResponseStepDef {
	
	APICall_Response responseCall;
	
	@Given("^URI for the get request$")
	public void URI_for_the_get_request(DataTable uri) {
		responseCall = new APICall_Response();
		responseCall.getRequest(uri);
	}
	
	
	@Then("^Store the GetCall response in a file (.*)$")
	public void store_the_GetCall_response_in_a_file(String filePath) {
		responseCall.Storing_the_GetCall_Response(filePath);
	}
	
	
	@Given("^Base URI for API call$")
	public void base_URI_for_API_call(DataTable baseURI) {
		responseCall = new APICall_Response();
		responseCall.getting_baseURI(baseURI);
	}
	
	
	@Then("^API req URI$")
	public void API_req_URI(DataTable getReQ) {
		responseCall.getReQ_URI(getReQ);
	}
	
	
	@Then("^Payload for post call (.*) (.*) (.*) (.*) (.*)$")
	public void  payload_for_post_call(String id, String cus_name, String regNum, String state, String DOB) {
		responseCall.payloay_for_post(id, cus_name, regNum, state, DOB);
	}
	
	
//	@Then("^Check the status code (.*)$")
//	public void check_the_status_code(int SCode) {
//		responseCall.getting_statusCode(SCode);
//	}
	
	
	@Then("^Hitting the API with Post call$")
	public void hitting_the_API_with_Post_call() {
		responseCall.postRequest();
	}
	
	@Then("^Storing the Post call response (.*)$")
	public void storing_the_Post_call_response(String filePath) {
		responseCall.Storing_the_PostCall_Response(filePath);
	}
	
	@Then("^Payload for Delete call (.*)$")
	public void payload_for_Delete_call(String id) {
		responseCall.payLoad_for_DeleteCall(id);
	}
	
	@Then("^Hitting the API with Delete call (.*)$")
	public void hitting_the_API_with_Delete_call(String id) {
		responseCall.DeleteCallMethod(id);
	}
	
	@Then("^Storing the Delete call response (.*)$")
	public void storing_the_Delete_call_response(String filePath) {
		responseCall.storing_DeleteCall_Response(filePath);
	}
	@Then("^Payload for Patch call (.*)$")
	public void payload_for_Patch_call(String state) {
		responseCall.payLoad_for_PatchCall(state);
	}
	
	@Then("^Hitting the API with Patch call (.*)$")
	public void hitting_the_API_with_Patch_call(String id) {
		responseCall.PatchCallMethod(id);
	}
	
	@Then("^Storing the Patch call response (.*)$")
	public void storing_the_Patch_call_response(String filePath) {
		responseCall.storing_PatchCall_Response(filePath);
	}
	
	@Then("^Payload for Put call (.*)$")
	public void payload_for_Put_call(String name) {
		responseCall.payLoad_for_PutCall(name);
	}
	
	@Then("^Hitting the API with Put call (.*)$")
	public void hitting_the_API_with_Put_call(String id) {
		responseCall.PutCallMethod(id);
	}


}
