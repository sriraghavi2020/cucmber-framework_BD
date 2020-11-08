Feature: restAPI old method to save the output in file
@GetCall_Response
Scenario: Get call using old method
	Given URI for the get request
	|http://localhost:3000/Employees?SubID=505|
	Then Store the GetCall response in a file \restAPI_response\GetCall_Response.txt
	
	
@PostCall_Response
Scenario Outline: Post call using old method
	Given Base URI for API call
	|http://localhost:3000|
	Then API req URI 
	|/BudgetDirect_Car|
	Then Payload for post call <id> <Customer_Name> <RegistrationNumber> <State> <DOB>
	Then Hitting the API with Post call
	Then Storing the Post call response \restAPI_response\PostCall_Response.txt
	Examples:
	|id        |Customer_Name |RegistrationNumber|State|DOB       |
#	|rest_BD112|Jill          |RRI-654   		 |NT   |30/12/1899|
#	|rest_BD113|Jung 		  |KLK-820   		 |SA   |01/06/1994|
#	|rest_BD114|Juck 		  |WAZ-127   		 |ACT  |12/11/1985|
	|rest_BD116|Hendry  	  |WWI-500   		 |ACT  |31/01/1975|
	
@DeleteCall_Response
Scenario Outline: Delete Call using old method
	Given Base URI for API call
	|http://localhost:3000|
	Then API req URI 
	|/BudgetDirect_Car|
	Then Payload for Delete call <id>
	Then Hitting the API with Delete call <id>
	Then Storing the Delete call response \restAPI_response\DeleteCall_Response.txt
	Examples:
	|id|
	|rest_BD116|
#	|gKNuOCI|
#	|l3CeDc7|

@PatchCall_Response
Scenario Outline: Patch call using old method
	Given Base URI for API call
	|http://localhost:3000|
	Then API req URI 
	|/BudgetDirect_Car|
	Then Payload for Patch call <State>
	Then Hitting the API with Patch call <id>
	Then Storing the Patch call response \restAPI_response\PatchCall_Response.txt
	Examples:
	|id|State|
	|rest_BD112|WA|

@PutCall_Response
Scenario Outline: Put call using old method
	Given Base URI for API call
	|http://localhost:3000|
	Then API req URI 
	|/BudgetDirect_Car|
	Then Payload for Put call <Customer_Name>
	Then Hitting the API with Put call <id>
	Examples:
	|id|Customer_Name|
	|rest_BD116|Hendry Lade|
	
	
