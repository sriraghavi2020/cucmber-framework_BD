Feature: API Testing using HTTP Client 

@GetCall
Scenario Outline:: API Get call testing
Given Hitting API with get request on URL
|http://localhost:3000/BudgetDirect_Car/<id>|
Then Storing the get call response to file \APIHttpClient_Response\GetCallResponse.txt
Then Asserting get call response for <id>
Examples:
|id|
|rest_BD113|

@PostCall
Scenario: API Post call testing
Given URL for post request
|http://localhost:3000/Employees|
Then Header for the post request 
|Key	   |Value	  |
|Connection|keep-alive|
|Content-Type| application/json|
Then Payload for post request

	|Key		 |Value	  		 |
	|firstName   |Andrews  		 |
	|lastName    |Hillery  		 |
	|departmentID|203    		 |
	|id          |httpClients_201|
	|employeeID  |130	  		 |
	|subjectID   |504	  		 |

Then Hitting API with post request
Then Storing the post call response to file \APIHttpClient_Response\PostCallResponse.txt
Then Asserting the response

@PostCallWithExcel
Scenario Outline:: API Post call with Excel
Given URL for post request
|http://localhost:3000/Employees|
Then Header for the post request 
|Key	   |Value	  |
|Connection|keep-alive|
|Content-Type| application/json|
Then Post call for Row <RowNum>
Then Payload for post request from Excel file \ExcelFolder\Emplooye_payLoad.xlsx and sheetName is Sheet1
Then Hitting API with post call with payload at Excel
Then Storing the post call response to file \APIHttpClient_Response\PostCallResponse_Excel.txt
Then Asserting the response
Examples:
|RowNum|
#|1|
|2|
|3|
|4|

@DeleteCall
Scenario Outline:: API Get call testing
Given URL for delete request
|http://localhost:3000/Employees/<id>|
Then Header for the delete request 
|Key	   |Value	  |
|Connection|keep-alive|
|Content-Type| application/json|
Then Hitting API with delete request
Then Storing the delete call response to file \APIHttpClient_Response\\DeleteCallResponse.txt
Then Asserting the response for delete call <id>
Examples:
|id|
#|DUP2httpClients_204|
#|DUP3httpClients_204|
#|DUP4httpClients_204|
#|DUP5httpClients_204|
#|DUP6httpClients_204|
#|DUP7httpClients_204|
#|DUP8httpClients_204|
#|DUP9httpClients_204|
#|DUP10httpClients_204|
#|DUP11httpClients_204|
#|DUP12httpClients_204|
#|DUP13httpClients_204|
#|DUP14httpClients_204|
#|DUP15httpClients_204|
#|DUP16httpClients_204|
#|DUP17httpClients_204|
#|DUP18httpClients_204|
#|DUP19httpClients_204|
#|DUP20httpClients_204|
#|DUP21httpClients_204|
#|DUP22httpClients_204|
#|DUP23httpClients_204|
#|DUP24httpClients_204|
#|DUP25httpClients_204|
#|DUP26httpClients_204|
#|DUP27httpClients_204|
#|DUP28httpClients_204|
#|DUP29httpClients_204|
|yj8AnCB|

