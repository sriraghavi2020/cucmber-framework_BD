Feature: RestAPI with RestAssured
@GetCall
Scenario: Get call with assertion(given Method) and baseURI
	Given Base URI is given as 
	|http://localhost:3000|
	Then Params are given 
	|id|14|
	Then Request URI
	|/Employees|
	Then Check the status code 200
	Then Check the body has
	|firstName|Kia|
	Then Hitting the API with Get request
	
	
@PostCall
Scenario: Post call with simple payload
	Given Base URI is given as 
	|http://localhost:3000|
	Then PayLoad for Post call
	|Key		 |Value	  |
	|subjectID   |502	  |
	|id          |rest_104|
	|lastName    |Dran	  |
	|employeeID  |125	  |
	|departmentID|204     |
	|firstName   |Tommy	  |
	Then Request URI
	|/Employees|
	Then Check the status code 201
	Then Hitting the API with Post request
	
	
@PostCallWithExamples
Scenario Outline:: Post call with payload similar to data provider while using Examples
	Given Base URI is given as 
	|http://localhost:3000|
	Then PayLoad for Post call with keys are <id> <FirstName> <LastName> <EmpID> <DeptID> <SubID>
	Then Request URI
	|/Employees|
	Then Check the status code 201
	Then Hitting the API with Post request
	Examples:
	|SubID|id      |LastName|EmpID|DeptID|FirstName|
	|501  |rest_106|Tim     |126  |201   |Tom      |
	|502  |rest_107|Jack    |127  |202   |Lary     |
	|505  |rest_108|Jill    |128  |203   |Bery     |
	
	
@PatchCall
Scenario: Patch call for madification on existing Index of data
	Given Base URI is given as 
	|http://localhost:3000|
	Then Request URI
	|/Employees/rest_106|  
	Then Payload for Patch call
	|Key         |Value    |
	|APICall_Type|PatchCall|
	Then Check the status code 200
	Then Hitting the API with Patch request
	
	
@PutCall
Scenario: Put call to update a complete index
	Given Base URI is given as
	|http://localhost:3000|
	Then Request URI
	|/Employees/K0EjjGc|  
	Then Payload for Put call
	|Key         |Value    |
	|APICall_Type|UpdatedBy_PutCall|
	Then Check the status code 200
	Then Hitting the API with Put request
	
	
@DeleteCall
Scenario: Delete call to delete complete index of data
	Given Base URI is given as
	|http://localhost:3000|
	Then Request URI
	|/Employees|  
	Then Payload for Delete call
	|Key|Value  |
	|id |ljIuiSH|
	Then Check the status code 200
	Then Hitting the API with Delete request