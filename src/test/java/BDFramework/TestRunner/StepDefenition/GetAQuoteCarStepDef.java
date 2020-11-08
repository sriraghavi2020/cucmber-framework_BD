package BDFramework.TestRunner.StepDefenition;

import org.openqa.selenium.WebDriver;

import BDFramework.Pages.GetAQuoteCarPage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class GetAQuoteCarStepDef {
	WebDriver driver;
	GetAQuoteCarPage GQcarPage;
	
	private WDManager wdManager;
	
	public GetAQuoteCarStepDef(WDManager wdManager) {
		this.wdManager = wdManager;
	}
	
	@Given("^User starts from Get A Quote Page$")
	public void User_starts_from_Get_A_Quote_Page() {
		driver = wdManager.getDriver();
		GQcarPage = new GetAQuoteCarPage(driver);
		GQcarPage.user_starts_from_Get_A_Quote_Page();
	}
	
    @And("^Title of the GetAQuotePage is displayed as (.*)$")
    public void Title_of_the_GetAQuotePage_is_displayed_as(String Title) {
    	GQcarPage.title_of_the_GetAQuotePage_is_displayed_as(Title);
    }
    
    @Then("^User starts with the quote for (.*)$")
    public void User_starts_with_the_quote_for(String coverType) {
    	GQcarPage.user_starts_with_the_quote_for(coverType);
    }
    
    @Then("^User agrees for legal information$")
    public void User_agrees_for_legal_information() {
    	GQcarPage.user_agrees_for_legal_information();
    }
    
    //PostCode DataTable concept
    @Then("^User enter PostCode and Address$")
    public void User_enter_PostCode_and_Address(DataTable Address) {
    	GQcarPage.user_enter_and_DataTable(Address);
    }
    
    //PostCode  Example concept
    @Then("^User enter (.*) and (.*)$")
    public void User_enter_and(String pC, String Address) {
    	GQcarPage.user_enter_postcode_Example(pC, Address);
    }
    
    //PostCode for common purpose
    @Then("^User enter Address where the car is parked at night$")
    public void User_enter_Address_where_the_car_is_parked_at_night(DataTable Address) {
    	GQcarPage.user_enter_Address(Address);
    }
    @Then("^User enters the state and the registration number of the car and search for the it$")
    public void User_enters_the_state_as_and_registration_number_of_the_car_as_and_search_for_the_car(DataTable carDetails) {
    	GQcarPage.user_enter_state_and_regNo(carDetails);
    }
    @Then("^User confirms his car details$")
    public void User_confirms_his_car_details() {
    	GQcarPage.confirmation_of_Registration_Number();
    }
    @Then("^User deny the car details shown and enters car details (.*)$")
    public void User_deny_the_car_details_shown_and_enters_car_details(String deny, DataTable CarDetails) {
    	GQcarPage.user_enter_CarDetails_manually(deny, CarDetails);
    }
    @Then("^User enters car details (.*)$")
    public void User_enters_car_details_Manually(String manual, DataTable CarDetails) {
    	GQcarPage.user_enter_CarDetails_manually(manual, CarDetails);
    }
    @Then("^User selects the Factory Option of the Car as (.*)$")
    public void user_selects_the_Factory_Option_of_the_Car_as(String FactoryOption) {
    	GQcarPage.Factory_Option(FactoryOption);
    }
    @Then("^User selects (.*) for Non-Standard Accessories of the Car$")
    public void user_selects_for_Non_Standard_Accessories_of_the_Car(String Accessories) {
    	GQcarPage.Non_Standard_Accessories(Accessories);
    }
    @Then("^User selects (.*) for Modification in Car$")
    public void user_selects_for_Modification_in_Car(String Modification) {
    	GQcarPage.Modification_in_Car(Modification);
    }
    @Then("^User selects (.*) as the cover level of the quote$")
    public void user_selects_as_the_cover_level_of_the_quote(String coverLevel) {
    	GQcarPage.cover_level_of_the_quote(coverLevel);
    }
    @Then("^User selects Parking location of the Car at night as (.*)$")
    public void user_selects_Parking_location_of_the_Car_at_night_as(String parkingLocation) {
    	GQcarPage.Parking_locationat_night(parkingLocation);
    }
    @Then("^User selects (.*) for any unrepaired accident or hail damage$")
    public void user_selects_for_any_unrepaired_accident_or_hail_damage(String damage) {
    	GQcarPage.accident_or_hail_damage(damage);
    }
    @Then("^User selects the Usage of the Car as (.*)$")
    public void user_selects_the_Usage_of_the_Car_as(String usage) {
    	GQcarPage.Usage_of_Car(usage);
    }
    @Then("^User selects the Average Number of kilometres as (.*)$")
    public void user_selects_the_Average_Number_of_kilometres_as(String kilometer) {
    	GQcarPage.Avg_kilo(kilometer);
    }
    @Then("^User selects (.*) for current loan or lease$")
    public void user_selects_for_current_loan_or_lease(String loan) {
    	GQcarPage.current_loan(loan);
    }
    @Then("^User selects (.*) for finace$")
    public void user_selects_for_finace(String loan_Company){
    	GQcarPage.certificate_For_Loan_Finace(loan_Company);
    }
    @Then("^User (.*) the First Name of the Regular Driver$")
    public void user_the_First_Name_of_the_Regular_Driver(String firstName) {
    	GQcarPage.FirstName_of_Regular_Driver(firstName);
    }
    //DOB for test in DOB field_Examples
    @Then("^User enters date of birth days as (.*) month as (.*) year as (.*)$")
    public void user_enters_date_of_birth_days_as_month_as_year_as(String day, String month, String year) {
    	GQcarPage.date_of_birth(day, month, year);
    }
    //DOB for common purpose_DataTable
    @Then("^User enters date of birth of the Regular Driver$")
    public void user_enters_date_of_birth_of_the_Regular_Driver(DataTable DOB) {
    	GQcarPage.DOB_DattaTable(DOB);
    }
    @Then("^User selects the Gender of the Regular Driver as (.*)$")
    public void user_selects_the_Gender_of_the_Regular_Driver_as(String gender) {
    	GQcarPage.Gender_of_the_Regular_Driver(gender);
    }
    @Then("^User selects (.*) for Motor Insurance Claims in the last 5 years$")
    public void user_selects_for_Motor_Insurance_Claims_in_the_last_5_years(String insurance) {
    	GQcarPage.Motor_Insurance_Claims(insurance);
    }
    @Then("^User selects (.*) for Regular Driver retired$")
    public void user_selects_for_Regular_Driver_retired(String retired) {
    	GQcarPage.Regular_Driver_retired(retired);
    }
    @Then("^User selects (.*) for registered Owner of Another Car$")
    public void user_selects_for_registered_Owner_of_Another_Car(String OwnAnotherCar) {
    	GQcarPage.registered_Owner_of_Another_Car(OwnAnotherCar);
    }
    @Then("^User selects (.*) for Owning a Home$")
    public void user_selects_for_Owning_a_Home(String OwnigHome) {
    	GQcarPage.Owning_a_Home(OwnigHome);
    }
    @Then("^User selects (.*) for Younger Driver$")
    public void user_selects_for_Younger_Driver(String YDOption) {
    	GQcarPage.Younger_Driver_option(YDOption);
    }
    @Then("^User selects the age restriction as (.*)$")
    public void user_selects_the_age_restriction_as(String ageRestriction) {
    	GQcarPage.age_restriction(ageRestriction);
    }
    @Then("^User enter the details of the Younger Driver$")
    public void user_enter_the_details_of_the_Younger_Driver(DataTable YDDetails) {
    	GQcarPage.details_of_the_Younger_Driver(YDDetails);
    }
    @Then("^User selects that the Younger Driver is on Learners Licence$")
    public void user_selects_that_the_Younger_Driver_is_on_Learners_Licence(DataTable LPLicenceDetails){
    	GQcarPage.Younger_Driver_is_on_Learner_Licence_Permit(LPLicenceDetails);
    }
    @Then("^User confirms the address of the Younger Driver as (.*)$")
    public void user_confirms_the_address_of_the_Younger_Driver_as(String addConf) {
    	GQcarPage.confirms_the_address_of_the_Younger_Driver(addConf);
    }
    @Then("^User select (.*) for other drive younger than the Regular Driver$")
    public void user_select_for_other_drive_younger_than_the_Regular_Driver(String otherYoungDriver) {
    	GQcarPage.other_drive_younger_than_the_Regular_Driver(otherYoungDriver);
    }
    @Then("^user select the start date of the policy as (.*) of (.*)$")
    public void user_select_the_start_date_of_the_policy_as_of(String PolicyDate, String PolicyMonth) {
    	GQcarPage.start_date_of_the_policy(PolicyDate, PolicyMonth);
    }
    @Then("^User enters the email ID as (.*)$")
    public void User_enters_the_email_ID_as(String email) {
    	GQcarPage.email_ID(email);
    }
    @Then("^User recives basic quote for yearls, monthly and forthnightly (.*)$")
    public void User_recives_basic_quote_for_yearls_monthly_and_forthnightly(String filePath) {
    	GQcarPage.basic_quote_for_yearls_monthly_and_forthnightly(filePath);
    }
    @Then("^User continues with (.*) quote$")
    public void user_continues_with_quote(String quotePeriod) {
    	GQcarPage.continues_with_quote(quotePeriod);
    }
    @Then("^User enters regular driver deltails$")
    public void user_enters_regular_driver_deltails(DataTable driverDetails) {
    	GQcarPage.regular_driver_deltails(driverDetails);
    }
    @Then("^User selects the type of license regular driver holds as (.*)$")
    public void user_selects_the_type_of_license_regular_driver_holds_as(String licenceType) {
    	GQcarPage.type_of_license_driver_holds(licenceType);
    }
    @Then("^User selects foreign license issued country as (.*)$")
    public void user_selects_foreign_license_issued_country_as(String country) {
    	GQcarPage.foreign_license_issued_country(country);
    }
    @Then("^User confirms the address of the regular driver as (.*)$")
    public void user_confirms_the_address_of_the_regular_driver(String addConfirmation) {
    	GQcarPage.confirms_the_address_of_the_regular_driver(addConfirmation);
    }
    @Then("^User Select (.*) for whether he is the main policy holder$")
    public void user_Select_for_whether_he_is_the_main_policy_holder(String policyHolderConf) {
    	GQcarPage.main_policy_holder(policyHolderConf);
    }
    @Then("^User select (.*) for additional member who may driver the car$")
    public void user_select_for_additional_member_who_may_driver_the_car(String addMember) {
    	GQcarPage.additional_member_who_may_driver_the_car(addMember);
    }
    @Then("^User enters details of the Additional member$")
    public void user_enters_details_of_the_Additional_member(DataTable deatails) {
    	GQcarPage.details_of_the_PolicyHolder_driver_withName(deatails);
    }
    @Then("^User selects the type of license PH_AddMem driver as (.*)$")
    public void user_selects_the_type_of_license_PH_AddMem_driver_as(String licenceType) {
    	GQcarPage.type_of_license_driver_holds(licenceType);
    }
    @Then("^User selects PH_AddMem driver license issued country as (.*)$")
    public void user_selects_PH_AddMem_driver_license_issued_country_as(String country){
    	GQcarPage.foreign_license_issued_country(country);
    }
    @Then("^User confirms the address of the PH_AddMem driver as (.*)$")
    public void user_confirms_the_address_of_the_PH_AddMem_driver_as(String addConfirmation) {
    	GQcarPage.confirms_the_address_of_the_Younger_Driver(addConfirmation);
    }
    @Then("^User selects (.*) for PH_AddMem driver Owning Another Car$")
    public void user_selects_for_PH_AddMem_driver_Owning_Another_Car(String OwnAnotherCar) {
    	GQcarPage.registered_Owner_of_Another_Car(OwnAnotherCar);
    }
    @Then("^User select the relationship with PH_AddMem driver as (.*)$")
    public void user_select_the_relationship_with_PH_AddMem_driver_as(String relationship) {
    	GQcarPage.relationship_with_other_driver(relationship);
    }
    @Then("^User checks the Listed Drivers and confirms that have added all drivers(.*)$")
    public void user_checks_the_Listed_Drivers_and_confirms_that_have_added_all_drivers(String filePath) {
    	GQcarPage.checks_the_Listed_Drivers_and_confirmation(filePath);
    }
    @Then("^User select (.*) as the registered owner of the car$")
    public void user_select_as_the_registered_owner_of_the_car(String carOwner) {
    	GQcarPage.registered_owner_of_the_car(carOwner);
    }
    @Then("^User selects (.*) for claims unclaimed accident and thefts$")
    public void user_selects_for_claims_unclaimed_accident_and_thefts(String claims) {
    	GQcarPage.unclaimed_accident_and_thefts(claims);
    }
    @Then("^User selects (.*) for Refused or Cancelled Insurance$")
    public void user_selects_for_Refused_or_Cancelled_Insurance(String cancelledInsurance) {
    	GQcarPage.Refused_or_Cancelled_Insurance(cancelledInsurance);
    }
    @Then("^User selects (.*) for Alcohol, Drug Related or Dangerous Driving Charges$")
    public void user_selects_for_Alcohol_Drug_Related_or_Dangerous_Driving_Charges(String drivingCharges) {
    	GQcarPage.Alcohol_Drug_Related_or_Dangerous_Driving_Charges(drivingCharges);
    }
    @Then("^User selects (.*) for Maximum Demerit Points or Good Behaviour Bond$")
    public void user_selects_for_Maximum_Demerit_Points_or_Good_Behaviour_Bond(String demerits) {
    	GQcarPage.Demerit_Points_or_Good_Behaviour_Bond(demerits);
    }
    @Then("^User selects (.*) for Licence Suspensions, Cancellations or Restrictions$")
    public void user_selects_for_Licence_Suspensions_Cancellations_or_Restrictions(String suspension) {
    	GQcarPage.Licence_Suspensions_Cancellations_or_Restrictions(suspension);
    }
    @Then("^User selects (.*) for Criminal Convictions$")
    public void user_selects_for_Criminal_Convictions(String conviction) {
    	GQcarPage.Criminal_Convictions(conviction);
    }
    @Then("^User selects (.*) for the purchase the car in the past 12 months$")
    public void user_selects_for_the_purchase_the_car_in_the_past_12_months(String purchasePeriod) {
    	GQcarPage.purchase_the_car_in_the_past_12_months(purchasePeriod);
    }
    @Then("User select (.*) for insurance on the car in the past two weeks$")
    public void user_select_for_insurance_on_the_car_in_the_past_two_weeks(String pastInsurance) {
    	GQcarPage.insurance_on_the_car_in_the_past_two_weeks(pastInsurance);
    }
    @Then("^User select (.*) as the company with which the policy was held$")
    public void user_select_as_the_company_with_which_the_policy_was_held(String pastInsuranceCompany) {
    	GQcarPage.company_with_which_the_policy_was_held(pastInsuranceCompany);
    }
    @Then("^User selects (.*) as past insurance level of cover$")
    public void user_selects_as_past_insurance_level_of_cover(String pastCoverLevel) {
    	GQcarPage.past_insurance_level_of_cover(pastCoverLevel);
    }
    @Then("^user selects the expiry date of the policy as (.*) of (.*)$")
    public void user_selects_the_expiry_date_of_the_policy_as_of(String PolicyDate, String PolicyMonth) {
    	GQcarPage.start_date_of_the_policy(PolicyDate, PolicyMonth);
    }
    @Then("^User selects (.*) for adding Roadside assistance$")
    public void user_selects_for_adding_Roadside_assistance(String RoadsideAss) {
    	GQcarPage.adding_Roadside_assistance(RoadsideAss);
    }
    @Then("^User continues with the flexible policy options (.*)$")
    public void user_continues_with_the_flexible_policy_options(String filePath) {
    	GQcarPage.continues_with_the_flexible_policy_options(filePath);
    }
    @Then("^User selects the postal address (.*)$")
    public void user_selects_the_postal_address(String postalAddress) {
    	GQcarPage.postal_address(postalAddress);
    }
    @Then("^User provides the contact number as (.*)$")
    public void user_provides_the_contact_number_as(String contactNum) {
    	GQcarPage.contact_number_as(contactNum);
    }
    @Then("^User selects (.*) for the policy to be held in joint names$")
    public void user_selects_for_the_policy_to_be_held_in_joint_names(String jointNames) {
    	GQcarPage.policy_to_be_held_in_joint_names(jointNames);
    }
    @Then("^User giver the details of the policy holder$")
    public void user_giver_the_details_of_the_policy_holder(DataTable PH_Details) {
    	GQcarPage.details_of_the_PolicyHolder_driver_withName(PH_Details);
    }
    @Then("^User select the relationship with policy holder as (.*)$")
    public void user_select_the_relationship_with_policy_holder_as(String relationship) {
    	GQcarPage.relationship_with_other_driver(relationship);
    }
    @Then("^User select (.*) to enter the complete details of Younger Driver$")
    public void user_select_to_enter_the_complete_details_of_Younger_Driver(String YD_conf) {
    	GQcarPage.confirms_the_Younger_Driver(YD_conf);
    }
    @Then("^User enters details of the Younger Driver$")
    public void user_enters_details_of_the_Younger_Driver(DataTable YD_Details) {
    	GQcarPage.details_of_the_youngest_or_AdditionalMember_driver_withName(YD_Details);
    }
    @Then("^User selects the type of license Younger driver as (.*)$")
    public void user_selects_the_type_of_license_Younger_driver_as(String licenceType) {
    	GQcarPage.type_of_license_driver_holds(licenceType);
    }
    @Then("^User confirms Leaner licence dates$")
    public void user_confirms_Leaner_licence_dates() {
    	GQcarPage.confirms_Leaner_licence_dates();
    }
    @Then("^User selects (.*) for Younger driver Owning Another Car$")
    public void user_selects_for_Younger_driver_Owning_Another_Car(String OwnAnotherCar) {
    	GQcarPage.registered_Owner_of_Another_Car(OwnAnotherCar);
    }
    @Then("^User select the relationship with Younger driver as (.*)$")
    public void user_select_the_relationship_with_Younger_driver_as(String relationship) {
    	GQcarPage.relationship_with_other_driver(relationship);
    }
    @Then("^User reaches to the paymanet page$")
    public void user_reaches_to_the_paymanet_page() {
    	GQcarPage.paymanet_page();
    }
}
