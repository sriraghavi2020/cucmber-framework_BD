package BDFramework.TestRunner.StepDefenition;

import BDFramework.RestAPI.BaseURI.API_Call;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class restAPIBaseStepDef {
	
	API_Call apicall;
	
	@Given("^Base URI is given as$")
	public void base_URI_is_given_as(DataTable baseURI) {
		apicall = new API_Call(); 
		apicall.getting_baseURI(baseURI);
	}
	
	
	@Then("^Params are given$")
	public void params_are_given(DataTable params) {
		apicall.getting_Params(params);
	}
	
	
	@Then("^Request URI$")
	public void Request_URI(DataTable getReQ) {
		apicall.getReQ_URI(getReQ);
	}
	
	
	@Then("^Hitting the API with Get request$")
	public void hitting_the_API_with_Get_request() {
		apicall.hitting_API_withGetCall();
	}
	
	
	@Then("^Check the status code (.*)$")
	public void check_the_status_code(int SCode) {
		apicall.getting_statusCode(SCode);
	}
	
	@Then("^Check the body has$")
	public void check_the_body_has(DataTable bodyContent) {
		apicall.getCall_Body_check(bodyContent);
	}
	
	@Then("^PayLoad for Post call$")
	public void payLoad_for_Post_call(DataTable payload) {
		apicall.payLoad_for_postCall(payload);
	}
	
	@Then("^PayLoad for Post call with keys are (.*) (.*) (.*) (.*) (.*) (.*)$")
	public void payLoad_for_Post_call_with_keys_are(String id, String FirstName, String LastName, int EmpID, int DeptID, int SubID) {
		apicall.payloay_for_postCall_Examples(id, FirstName, LastName, EmpID, DeptID, SubID);
	}
	@Then("^Hitting the API with Post request$")
	public void hitting_the_API_with_Post_request() {
		apicall.hitting_API_withPostCall();
	}
	@Then("^Payload for Patch call$")
	public void Payload_for_Patch_call(DataTable payload) {
		apicall.payLoad_for_postCall(payload);
	}
	@Then("^Hitting the API with Patch request$")
	public void hitting_the_API_with_Patch_request() {
		apicall.hitting_API_withPatchCall();
	}
	@Then("^Payload for Put call$")
	public void payload_for_Put_call(DataTable payload) {
		apicall.payLoad_for_postCall(payload);
	}
	@Then("^Hitting the API with Put request$")
	public void hitting_the_API_with_Put_request() {
		apicall.hitting_API_withPutCall();
	}
	@Then("^Payload for Delete call$")
	public void payload_for_Delete_call(DataTable payload) {
		apicall.payLoad_for_postCall(payload);
	}
	@Then("^Hitting the API with Delete request$")
	public void hitting_the_API_with_Delete_request() {
		apicall.hitting_API_withDeleteCall();
	}
}
