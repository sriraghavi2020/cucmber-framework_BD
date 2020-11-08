Feature: Get a qoute for CAR
@DataTable_For_PostCoe
Scenario: starts the quote for car with Post code verification
   Given User starts from Get A Quote Page
   And Title of the GetAQuotePage is displayed as "Budget Direct"
   Then User starts with the quote for "Car"
   Then User agrees for legal information
   Then User enter PostCode and Address
   		| PostCode | Address |
    	| 317 | 64 brady |
     	| 3175 | 84 brady |
     	
     	
     	
     	
@Example_For_PostCoe
Scenario Outline:: starts the quote for car with Post code verification
   Given User starts from Get A Quote Page
   And Title of the GetAQuotePage is displayed as "Budget Direct"
   Then User starts with the quote for "Car"
   Then User agrees for legal information
   Then User enter <PostCode> and <Address>
   Examples:
   		| PostCode | Address |
    	| 317 | 64 brady |
     	| 3175 | 84 brady |
     	
     	
     	
   
@Vehicle_Identification_RegNum_With_Confirmation_And_DOB_Examples
Scenario Outline:: Start the quote for car VH RegNo verification(Confirms Details)
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  |State|Reg_Num|
  |VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth days as <Day> month as <Month> year as <Year>
  Examples:
  |Day|Month|Year|
  |20 |11	|2005|
  #correct row
   |11 |11	|1989|  
   |11 |11	|1920|
   |11 |11	|1921|
  #Day
   |0  |11	|1989|
   |32 |11	|1989|
  #Month
   |11 |13	|1989|
   |11 |0	|1989|
   
   
   
   
@Vehicle_Identification_RegNum_With_NotMyCar
Scenario: Start the quote for car VH RegNo verification(Deny/Details Manually)
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  |State|Reg_Num|
  |VIC  |WWI559 |
  Then User deny the car details shown and enters car details for_Deny
  		|Brand|YearOfManicature|Model|Variant|TransmissionType|Type			       |Color|
  		|Honda|2008			   |Civic|Vti	 |Manual	      |Vti 4dr Sedan 1.8mpi|Blue |
  Then User selects the Factory Option of the Car as No Factory Option
  
  
  

@Vehicle_Identification_Manual_Details
Scenario: Start the quote for car VH manualDetails verification
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters car details Manually
  		|Brand|YearOfManicature|Model|Variant|TransmissionType|Type			       |Color|
  		|Honda|2008			   |Civic|Vti	 |Manual	      |Vti 4dr Sedan 1.8mpi|Blue |
  Then User selects the Factory Option of the Car as No Factory Option
  
  
  
  
@Loan_Statement
Scenario: Start the quote for car Loan statement with hiring and lease(both same procedure) 
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  |State|Reg_Num|
  |VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects Lease loan for current loan or lease
  Then User selects Company Name for finace
  Then User Skips the First Name of the Regular Driver
  
  
  
  
@YoungerDriver_Yes
Scenario: Start the quote for car YoungerDriver verification
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  		|Day|Month|Year|
  		|11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects Yes for Younger Driver 
  Then User enter the details of the Younger Driver
  		|Day_DOB|Month_DOB|Year_DOB|Gender|
  		|21     |1        |2000    |Female|
  Then User selects that the Younger Driver is on Learners Licence
  		|Month_LP|Year_LP|
  		|11      |2018   |
  Then User confirms the address of the Younger Driver as Yes
  Then User select No for other drive younger than the Regular Driver
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly
  
  
  

@YoungerDriver_No
 Scenario: Start the quote for car Without Younger driver 
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  		|Day|Month|Year|
  		|11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects No for Younger Driver
  Then User selects the age restriction as 25+
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly
  
  
  

  @PocilyHolder_Yes
  Scenario: Start the quote for car Policy holder as same person
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  		|Day|Month|Year|
  		|11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects No for Younger Driver
  Then User selects the age restriction as 25+
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly
  Then User continues with yearly quote
  Then User enters regular driver deltails
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mr   |Ki	   |Kumre  |11     |11       |1989    |
  Then User selects the type of license regular driver holds as Foreign Licence resident
  Then User selects foreign license issued country as Australia
  Then User confirms the address of the regular driver as No
  Then User Select Yes for whether he is the main policy holder
  Then User select Yes for additional member who may driver the car
  
  
  
  
  
  @PocilyHolder_No_AdditionalMember_No_Registered_Owner_AnotherDriver
  Scenario: Start the quote for car Policy holder as different person
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  		|Day|Month|Year|
  		|11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects No for Younger Driver
  Then User selects the age restriction as 25+
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly
  Then User continues with yearly quote
  Then User enters regular driver deltails
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mr   |Ki	   |Kumre  |11     |11       |1989    |
  Then User selects the type of license regular driver holds as Foreign Licence resident
  Then User selects foreign license issued country as Australia
  Then User confirms the address of the regular driver as No
  Then User Select No for whether he is the main policy holder
  Then User giver the details of the policy holder
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mrs  |Liiy	  |Hendry |25      |01       |1992    |
  Then User selects the type of license PH_AddMem driver as Full Australian Licence More than 2 years
  Then User confirms the address of the PH_AddMem driver as No
  Then User selects No for registered Owner of Another Car
  Then User select the relationship with policy holder as Spouse
  Then User select No for additional member who may driver the car
  Then User checks the Listed Drivers and confirms that have added all drivers
  Then User select Another Person as the registered owner of the car
  
  
  
  
  
  
  @PH_Yes_AdditionalMember_Yes
  Scenario: Start the quote for car with PH_Yes and Add a member to list
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address      |
    	| 3180     | 18 Fernbrook |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  |Day|Month|Year|
  |11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects No for Younger Driver
  Then User selects the age restriction as 25+
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly
  Then User continues with yearly quote
  Then User enters regular driver deltails
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mr   |Ki	   |Kumre  |11     |11       |1989    |
  Then User selects the type of license regular driver holds as Foreign Licence resident
  Then User selects foreign license issued country as Australia
  Then User confirms the address of the regular driver as No
  Then User Select Yes for whether he is the main policy holder
  Then User select Yes for additional member who may driver the car
  Then User enters details of the Additional member
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mr   |Harry	  |Lade   |21      |01       |1992    |
  Then User selects the type of license PH_AddMem driver as Foreign Licence resident
  Then User selects PH_AddMem driver license issued country as Australia
  Then User confirms the address of the PH_AddMem driver as Yes
  Then User selects No for PH_AddMem driver Owning Another Car
  Then User select the relationship with PH_AddMem driver as Partner
  Then User checks the Listed Drivers and confirms that have added all drivers
  Then User select Regural Driver as the registered owner of the car
  Then User selects No for claims unclaimed accident and thefts
  Then User selects No for Refused or Cancelled Insurance
  Then User selects No for Alcohol, Drug Related or Dangerous Driving Charges
  Then User selects No for Maximum Demerit Points or Good Behaviour Bond
  Then User selects No for Licence Suspensions, Cancellations or Restrictions
  Then User selects No for Criminal Convictions
  Then User selects No for the purchase the car in the past 12 months
  Then User select Yes for insurance on the car in the past two weeks
  Then User select AAMI as the company with which the policy was held
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as past insurance level of cover
  Then user selects the expiry date of the policy as 15 of October 2020
  Then User selects No for adding Roadside assistance
  Then User continues with the flexible policy options \\QuotePriceList\\PriceList.txt
  Then User selects the postal address Where The Car Is Kept
  Then User provides the contact number as 0470123456
  Then User selects No for the policy to be held in joint names 
  
  
  
  @EndToEnd
  Scenario: Start the quote for car YoungerDriver_Yes verification
  Given User starts from Get A Quote Page
  And Title of the GetAQuotePage is displayed as "Budget Direct"
  Then User starts with the quote for "Car"
  Then User agrees for legal information
  Then User enter Address where the car is parked at night
   		| PostCode | Address |
    	| 3195 | 84 branagan |
  Then User enters the state and the registration number of the car and search for the it
  		|State|Reg_Num|
  		|VIC  |WWI559 |
  Then User confirms his car details
  Then User selects the Factory Option of the Car as No Factory Option
  Then User selects No for Non-Standard Accessories of the Car
  Then User selects No for Modification in Car
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as the cover level of the quote
  Then User selects Parking location of the Car at night as Garage
  Then User selects No Damage for any unrepaired accident or hail damage
  Then User selects the Usage of the Car as Private
  Then User selects the Average Number of kilometres as 17,500km
  Then User selects No loan for current loan or lease
  Then User Skips the First Name of the Regular Driver
  Then User enters date of birth of the Regular Driver
  		|Day|Month|Year|
  		|11 |11	|1989|
  Then User selects the Gender of the Regular Driver as Male
  Then User selects No for Motor Insurance Claims in the last 5 years
# Then User selects No for Regular Driver retired
  Then User selects No for registered Owner of Another Car
  Then User selects Yes for Owning a Home
  Then User selects Yes for Younger Driver 
  Then User enter the details of the Younger Driver
  		|Day_DOB|Month_DOB|Year_DOB|Gender|
  		|21     |1        |2000    |Female|
  Then User selects that the Younger Driver is on Learners Licence
  		|Month_LP|Year_LP|
  		|11      |2018   |
  Then User confirms the address of the Younger Driver as Yes 
  Then User select No for other drive younger than the Regular Driver
  Then user select the start date of the policy as 15 of October 2020
  Then User enters the email ID as test2020@gmail.com
  Then User recives basic quote for yearls, monthly and forthnightly \\QuotePriceList\\PriceList.txt
  Then User continues with yearly quote
  Then User enters regular driver deltails
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Mr   |Kily	    |Kure   |11        |11       |1989    |
  Then User selects the type of license regular driver holds as Foreign Licence resident
  Then User selects foreign license issued country as Australia
  Then User confirms the address of the regular driver as No
  Then User Select Yes for whether he is the main policy holder
  Then User select Yes to enter the complete details of Younger Driver
  Then User enters details of the Younger Driver
  		|Title|FirstName|Surname|Day	   |Month    |Year    |
  		|Miss |Liiy	    |Hendry |21        |1        |2000    |
  Then User selects the type of license Younger driver as Leaner
  Then User confirms Leaner licence dates
  Then User confirms the address of the Younger Driver as Yes
  Then User selects No for Younger driver Owning Another Car
  Then User select the relationship with Younger driver as Other Family
  Then User select Yes for additional member who may driver the car
  Then User enters details of the Additional member
  		|Title|FirstName|Surname|Day	 |Month    |Year    |
  		|Mr   |Harry	|Lade   |21      |11       |1992    |
  Then User selects the type of license PH_AddMem driver as Full Australian Licence More than 2 years
  Then User confirms the address of the PH_AddMem driver as Yes
  Then User selects No for PH_AddMem driver Owning Another Car
  Then User select the relationship with PH_AddMem driver as Partner
  Then User checks the Listed Drivers and confirms that have added all drivers \\QuotePriceList\\ListedDriver.txt
  Then User select Regural Driver as the registered owner of the car
  Then User selects No for claims unclaimed accident and thefts
  Then User selects No for Refused or Cancelled Insurance
  Then User selects No for Alcohol, Drug Related or Dangerous Driving Charges
  Then User selects No for Maximum Demerit Points or Good Behaviour Bond
  Then User selects No for Licence Suspensions, Cancellations or Restrictions
  Then User selects No for Criminal Convictions
  Then User selects No for the purchase the car in the past 12 months
  Then User select Yes for insurance on the car in the past two weeks
  Then User select AAMI as the company with which the policy was held
  Then User selects THIRD_PARTY_PROPERTY_DAMAGE as past insurance level of cover
  Then user selects the expiry date of the policy as 15 of October 2020
  Then User selects No for adding Roadside assistance
  Then User continues with the flexible policy options
  Then User selects the postal address Where The Car Is Kept
  Then User provides the contact number as 0470123456
  Then User selects No for the policy to be held in joint names
  Then User reaches to the paymanet page  
