package BDFramework.Pages;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import BDFramework.basePackage.baseClass;
import io.cucumber.datatable.DataTable;

public class GetAQuoteCarPage extends baseClass{

	@FindBy(xpath="//a[@class='btn-new btn--quote btn--arrow btn--normal btn--large'][@href='/start/gold-car.html']")
	WebElement GQCar;
	@FindBy(xpath="//button[@type='submit']")
	WebElement NxtBtn;
	@FindBy(id="postcode")
	WebElement postCode;
	@FindBy(id="address-typeahead")
	WebElement AddressBar;
	@FindBy(xpath="//strong[contains(text(), '84 Brady')]")
	WebElement fullAddress_Brady;
	@FindBy(xpath="//strong[contains(text(), '18 Fernbrook')]")
	WebElement fullAddress_fernbrook; 
	@FindBy(xpath="//span[contains(text(), 'Branagan Drive')]")
	WebElement fullAddr_BranaganDrive;
	@FindBy(id="state")
	WebElement RegNo_State;
	@FindBy(id="plateNumber")
	WebElement registrationNo;
	@FindBy(id="nextButton")
	WebElement searchBtn_RegNo;
	@FindBy(xpath="//div[contains(text(), 'Yes, this is my car')]")
	WebElement confirmationBtn_RegNo;
	@FindBy(xpath="//div[contains(text(), 'No, this is not my car')]")
	WebElement not_my_carBtn_RegNo;
	@FindBy(id="detailsButton")
	WebElement carDetailsManually;
	@FindBy(xpath="//button[@value='HOND']")
	WebElement carBrand;
	@FindBy(xpath="//button[@value='2008']")
	WebElement carYear;
	@FindBy(xpath="//button[@value='CIVIC']")
	WebElement carModel;
	@FindBy(xpath="//button[@value='Vti']")
	WebElement carVariant;
	@FindBy(xpath="//button[@value='M']")
	WebElement carTransType;
	@FindBy(xpath="//span[contains(text(), ' Vti 4dr Sedan  1.8mpi (Rel. January) ')]")
	WebElement carType;
	@FindBy(xpath="//span[contains(text(), 'Blue')]")
	WebElement carColor;
	@FindBy(xpath="//button[@type='submit']")
	WebElement factoryOpt;
	@FindBy(xpath="//button[@class='btn--primary btn--with-arrow-sm btn']")
	List<WebElement> coverLevel;
	@FindBy(xpath="//button[@data-value='THIRD_PARTY_PROPERTY_DAMAGE']")
	WebElement coverLevel3rdPartyOnly;
	@FindBy(xpath="//button[@data-value='THIRD_PARTY_PROPERTY_FIRE_THEFT']")
	WebElement coverLevel3rdPartyFireTheft;
	@FindBy(xpath="//button[@data-value='COMPREHENSIVE']")
	WebElement coverLevelComprehensive;
	@FindBy(xpath="//span[contains(text(), 'Third Party Property Only')]")
	WebElement Page1coverLevel3rdPartyOnly;
	@FindBy(xpath="//span[contains(text(), 'Third Party Property, Fire And Theft')]")
	WebElement Page1coverLevel3rdPartyFireTheft;
	@FindBy(xpath="//span[contains(text(), 'Comprehensive')]")
	WebElement Page1coverLevelComprehensive;
	@FindBy(xpath="//button[@value='GARAGE']")
	WebElement nightParking_Garage;
	@FindBy(xpath="//button[@value='CAR_PARK']")
	WebElement nightParking_Carpark;
	@FindBy(xpath="//button[@value='STREET']")
	WebElement nightParking_Street;
	@FindBy(xpath="//button[@value='GOOD_CONDITION_WITH_NO_EXISTING_DAMAGE']")
	WebElement NoDamage;
	@FindBy(xpath="//button[@value='HAIL_DAMAGE']")
	WebElement HailDamage;
	@FindBy(xpath="//button[@value='ACCIDENT_DAMAGE']")
	WebElement AccidentDamage;
	@FindBy(xpath="//button[@value='HAIL_AND_ACCIDENT_DAMAGE']")
	WebElement HailAccidentDamage;
	@FindBy(xpath="//button[@value='PRIVATE_ONLY']")
	WebElement privateUsage;
	@FindBy(xpath="//button[@value='PRIVATE_AND_BUSINESS']")
	WebElement businessUsage;
	@FindBy(xpath="//button[@value='BUSINESS_EXCLUDING_COMMERCIAL']")
	WebElement commercialUsage;
	@FindBy(xpath="//span[contains(text(), 'Up to 17,500km')]")
	WebElement AvgKilo;
	@FindBy(xpath="//button[@value='NONE']")
	WebElement loan_No;
	@FindBy(xpath="//button[@value='HIRE_PURCHASE']")
	WebElement loan_HirePurchase;
	@FindBy(xpath="//button[@value='LEASE']")
	WebElement loan_Lease;
	@FindBy(xpath="//h3[@class='help-box__message__heading']")
	WebElement loanHire_Popup;
	@FindBy(xpath="//button[@type='reset']")
	WebElement reset_certificate;
	@FindBy(id="certName")
	WebElement loan_certificateName;
	@FindBy(xpath="//div[@class='error fieldset__error-message']")
	WebElement loan_Certificate_Popup;
	@FindBy(id="regularDriverFirstName")
	WebElement RD_Firstname;
	@FindBy(id="day")
	WebElement day_DOB;
	@FindBy(id="month")
	WebElement month_DOB;
	@FindBy(id="year")
	WebElement year_DOB;
	@FindBy(xpath="//div[@role='alert']")
	List<WebElement> alert_DOB;
	@FindBy(xpath="//button[@value='MALE']")
	WebElement genderMale_Driver;
	@FindBy(xpath="//button[@value='FEMALE']")
	WebElement genderFemale_Driver;
	@FindBy(xpath="//button[@value='NO']")
	WebElement NoBtn;
	@FindBy(xpath="//button[@value='YES']")
	WebElement YesBtn;
	@FindBy(xpath="//button[@value='UNSURE']")
	WebElement DontKownBtn;
	@FindBy(id="day0")
	WebElement day_YD_DOB;
	@FindBy(id="month0")
	WebElement month_YD_DOB;
	@FindBy(id="year0")
	WebElement year_YD_DOB;
	@FindBy(xpath="//label[@for='isDriverLearner']")
	WebElement YDLearner;
	@FindBy(id="month1")
	WebElement month_YD_Learner;
	@FindBy(id="year1")
	WebElement year_YD_Learner;
	@FindBy(xpath="//button[@ng-click='move(1)']")
	WebElement nxtMonth_btnCalender;
	@FindBy(xpath="//span[contains(text(), '15')]")
	WebElement date_SPcalender;
	@FindBy(xpath="//strong[@class='ng-binding ng-scope']")
	WebElement month_SPcalender;
	@FindBy(id="email")
	WebElement email_Id;
	@FindBy(xpath="//h1[@data-test-id='question']")
	List<WebElement> contactInformation;
	@FindBy(id="phoneNumber")
	WebElement phoneNumber;
	@FindBy(xpath="//h5[@ng-reflect-klass='price-column__title']")
	List<WebElement> QuotePricePeriod;
	@FindBy(xpath="//h2[@class='price-column__price']")
	List<WebElement> QuotePricely;
	@FindBy(xpath="//button[@type='submit']")
	List<WebElement> quote_List;
	@FindBy(xpath="//button[@value='ANY_DRIVER']")
	WebElement ageResAny;
	@FindBy(xpath="//button[@value='DRIVERS_OVER_21']")
	WebElement ageRes21;
	@FindBy(xpath="//button[@value='DRIVERS_OVER_25']")
	WebElement ageRes25;
	@FindBy(xpath="//button[@value='DRIVERS_OVER_30']")
	WebElement ageRes30;
	@FindBy(id="title")
	WebElement RD_Title;
	@FindBy(id="firstName")
	WebElement Firstname;
	@FindBy(id="lastName")
	WebElement Lastname;
	@FindBy(xpath="//button[@value='FULL_LICENCE_MORE_THAN_2']")
	WebElement RD_LicenceType_FullMore2;
	@FindBy(xpath="//button[@value='FULL_LICENCE_LESS_THAN_2']")
	WebElement RD_LicenceType_FullLess2;
	@FindBy(xpath="//button[@value='FULL_LICENCE_FOREIGN_TRANSFER']")
	WebElement RD_LicenceType_FullForeign;
	@FindBy(xpath="//button[@value='PROVISIONAL_LICENCE']")
	WebElement RD_LicenceType_Provisional;
	@FindBy(xpath="//button[@value='LEARNER_LICENCE']")
	WebElement RD_LicenceType_Leaner;
	@FindBy(xpath="//button[@value='FOREIGN_LICENCE_RESIDENT_STUDENT']")
	WebElement RD_LicenceType_ForeignResident;
	@FindBy(xpath="//button[@value='FOREIGN_LICENCE_TOURIST_WORKING']")
	WebElement RD_LicenceType_ForeignTourist;
	@FindBy(xpath="//button[@value='CANCELLED_WITHDRAWN']")
	WebElement RD_LicenceType_Cancelled;
	@FindBy(xpath="//button[@value='NO_LICENCE']")
	WebElement RD_LicenceType_NO;
	@FindBy(xpath="//div[contains(text(),'Australia')]")
	WebElement RD_LicCountry_Australia;
	@FindBy(xpath="//div[contains(text(),'Belgium')]")
	WebElement RD_LicCountry_Belgium;
	@FindBy(xpath="//div[contains(text(),'India')]")
	WebElement RD_LicCountry_India;
	@FindBy(xpath="//div[@class='help-box__message']")
	List<WebElement> AddConf_AlertMsg; 
	@FindBy(xpath="//button[@value='COMPANY']")
	WebElement policyHolder_Company;
	@FindBy(xpath="//button[@value='SPOUSE']")
	WebElement OtherPH_Spouse;
	@FindBy(xpath="//button[@value='COHABITEE_OR_PARTNER']")
	WebElement OtherPH_Partner;
	@FindBy(xpath="//button[@value='OTHER_FAMILY']")
	WebElement OtherPH_OtherFamily;
	@FindBy(xpath="//button[@value='EMPLOYEE']")
	WebElement OtherPH_Employee;
	@FindBy(xpath="//button[@value='EMPLOYER']")
	WebElement OtherPH_Employer;
	@FindBy(xpath="//button[@value='BUSINESS_PARTNER']")
	WebElement OtherPH_BusinessPartner;
	@FindBy(xpath="//button[@value='UNRELATED']")
	WebElement OtherPH_Unrelated;
	@FindBy(xpath="//span[@data-piiexclude='true']")
	List<WebElement> ListedDriver;
	@FindBy(xpath="//span[@class='padding']")
	WebElement ListedDriverAdded;
	@FindBy(xpath="//div[@class='button-group__label ng-binding']")
	List<WebElement> carOwner;
	@FindBy(xpath="//div[@class='help-box help-box--center-icon']")
	WebElement carOwner_AnotherPersonPopup;
	@FindBy(xpath="//select[@ng-reflect-name='companyCode']")
	WebElement pastInsuranceCompany;
	@FindBy(xpath="//button[@value='THIRD_PARTY_PROPERTY_DAMAGE']")
	WebElement pastCoverLevel3rdPartyOnly;
	@FindBy(xpath="//button[@value='THIRD_PARTY_PROPERTY_FIRE_THEFT']")
	WebElement pastCoverLevel3rdPartyFireTheft;
	@FindBy(xpath="//button[@value='COMPREHENSIVE']")
	WebElement pastCoverLevelComprehensive;
	@FindBy(xpath="//button[@class='btn btn--loader btn--primary btn--with-arrow-sm btn__inner final-price-submit']")
	WebElement policyContinue;
	@FindBy(xpath="//span[contains(text(), 'Where The Car Is Kept')]")
	WebElement postalAddsameAsCar;
	@FindBy(xpath="//button[@data-test-id='button-group__item-OTHER_ADDRESS']")
	WebElement postalAddAnother;
	@FindBy(xpath="//button[@data-test-id='button-group__item-PO_BOX_ADDRESS']")
	WebElement postalAddPOBox;
	@FindBy(xpath="//h2[@class='flexi-price-display__price']")
	WebElement finalPrice;

	String RD_FirstName;
	String RD_LastName;
	String YD_FirstName;
	String YD_LastName;
	String RD_day_DOB;
	String RD_month_DOB;
	String RD_year_DOB;
	String dayDOB_Youngest;
	String monthDOB_Youngest;
	String yearDOB_Youngest;
	String RegularDriver_Name;
	String AddMember_Name;
	String Month_LP;
	String Year_LP;

	public GetAQuoteCarPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);

	}
	
	
	public void user_starts_from_Get_A_Quote_Page() {
		ThreadSleep(2000);
	}

	
	public void title_of_the_GetAQuotePage_is_displayed_as(String Title) {
		String actualTitle = driver.getTitle();
		Assert.assertEquals("Budget Direct | Insurer of the Year 4 Years in a Row", actualTitle);
	}

	
	public void user_starts_with_the_quote_for(String coverType) {
		GQCar.click();
		ThreadSleep(5000);
	}

	
	public void user_agrees_for_legal_information() {
		boolean agree = NxtBtn.isDisplayed();
		Assert.assertEquals("Duty of Disclosure | Budget Direct Car", driver.getTitle());
		if(agree==true) {
			NxtBtn.click();
		}
	}

	
	public void user_enter_and_DataTable(DataTable Address) {
		boolean AddBar;
		List<List<String>> address = Address.asLists(String.class);
		Assert.assertEquals("Address | Budget Direct Car", driver.getTitle());
		postCode.sendKeys(address.get(1).get(0));
		ThreadSleep(500);
		AddBar = AddressBar.isEnabled();
		if(!AddBar) {
			postCode.clear();
			postCode.sendKeys(address.get(2).get(0));
			ThreadSleep(500);
			AddBar = AddressBar.isEnabled();
			if(AddBar) {
				AddressBar.sendKeys(address.get(2).get(1));
				ThreadSleep(500);
				fullAddress_Brady.click();
			}
		}
		NxtBtn.click();
	}
	
	
	public void user_enter_postcode_Example(String pC, String Address) {
		Assert.assertEquals("Address | Budget Direct Car", driver.getTitle());
		postCode.sendKeys(pC);
		ThreadSleep(500);
		boolean addBar = AddressBar.isEnabled();
		Assert.assertEquals(true, addBar);
		if(addBar) {
			AddressBar.sendKeys(Address);
			ThreadSleep(500);
			fullAddress_Brady.click();
		}
	}
	
	
	public void user_enter_Address(DataTable Address) {
		ThreadSleep(2000);
		Assert.assertEquals("Address | Budget Direct Car", driver.getTitle());
		List<Map<String, String>> addr = Address.asMaps();
		postCode.sendKeys(addr.get(0).get("PostCode"));
		ThreadSleep(500);
		if(addr.get(0).get("Address").equals("18 Fernbrook")) {
			AddressBar.sendKeys(addr.get(0).get("Address"));
			ThreadSleep(500);
			fullAddress_fernbrook.click();
		}else {
			AddressBar.sendKeys(addr.get(0).get("Address"));
			ThreadSleep(500);
			fullAddr_BranaganDrive.click();
		}
		NxtBtn.click();
	}
	
	
	public void user_enter_state_and_regNo(DataTable carDetails) {
		List<Map<String, String>> details = carDetails.asMaps();
		Select select = new Select(RegNo_State);
		switch(details.get(0).get("State")) {
		case "ACT":
			select.selectByValue("ACT");
			break;
		case "NSW":
			select.selectByValue("NSW");
			break;
		case "NT":
			select.selectByValue("NT");
			break;
		case "QLD":
			select.selectByValue("QLD");
			break;
		case "SA":
			select.selectByValue("SA");
			break;
		case "TAS":
			select.selectByValue("TAS");
			break;
		case "VIC":
			select.selectByValue("VIC");
			break;
		case "WA":
			select.selectByValue("WA");
			break;
		}
		registrationNo.sendKeys(details.get(0).get("Reg_Num"));
		searchBtn_RegNo.click();
	}
	
	
	public void confirmation_of_Registration_Number() {
		ThreadSleep(2000);
		confirmationBtn_RegNo.click();
		ThreadSleep(2000);
	}
	
	
	public void user_enter_CarDetails_manually(String manual, DataTable carDetails){
		if(manual.equals("Manually")) {
			carDetailsManually.click();
		}else {
			ThreadSleep(2000);
			not_my_carBtn_RegNo.click();	
		}
		List<Map<String, String>> details = carDetails.asMaps();
		//|Brand|YearOfManicature|Model|Variant|TransmissionType|Type|Color|
		String brand= details.get(0).get("Brand");
		String YearOfManicature = details.get(0).get("YearOfManicature");
		String Model = details.get(0).get("Model");
		String Variant = details.get(0).get("Variant");
		String TransmissionType = details.get(0).get("TransmissionType");
		String Type = details.get(0).get("Type");
		String Color = details.get(0).get("Color");

		if(brand.equals("Honda")) {
			carBrand.click();
		}
		if(YearOfManicature.equals("2008")) {
			carYear.click();
		}
		if(Model.equals("Civic")){
			carModel.click();
		}
		if(Variant.equals("Vti")) {
			carVariant.click();
		}
		if(TransmissionType.equals("Manual")) {
			carTransType.click();
		}
		if(Type.equals("Vti 4dr Sedan 1.8mpi")) {
			carType.click();
		}
		if(Color.equals("Blue")) {
			carColor.click();
		}
	}
	public void Factory_Option(String FactoryOption) {
		Assert.assertEquals("Factory / Dealer Options | Budget Direct Car", driver.getTitle());
		factoryOpt.click();
	}
	
	
	public void Non_Standard_Accessories(String Accessories) {
		Assert.assertEquals("Non Standard Accessories | Budget Direct Car", driver.getTitle());
		switch(Accessories) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
		}
	}
	
	
	public void Modification_in_Car(String Modification) {
		Assert.assertEquals("Modifications | Budget Direct Car", driver.getTitle());
		switch(Modification) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
		}
	}
	
	
	public void cover_level_of_the_quote(String coverLevel) {
		boolean coverLevelPage = this.coverLevel.size()>0;
		if(coverLevelPage) {
			switch(coverLevel) {
			case "THIRD_PARTY_PROPERTY_DAMAGE":
				coverLevel3rdPartyOnly.click();
				break;
			case "THIRD_PARTY_PROPERTY_FIRE_THEFT":
				coverLevel3rdPartyFireTheft.click();
				break;
			case "COMPREHENSIVE":
				coverLevelComprehensive.click();
				break;
			}
		}else {
			switch(coverLevel) {
			case "THIRD_PARTY_PROPERTY_DAMAGE":
				Page1coverLevel3rdPartyOnly.click();
				break;
			case "THIRD_PARTY_PROPERTY_FIRE_THEFT":
				Page1coverLevel3rdPartyFireTheft.click();
				break;
			case "COMPREHENSIVE":
				Page1coverLevelComprehensive.click();
				break;
			}
		}
	}
	
	
	public void Parking_locationat_night(String parkingLocation) {
		Assert.assertEquals("Parked at Night | Budget Direct Car", driver.getTitle());
		switch(parkingLocation) {
		case "Garage":
			nightParking_Garage.click();
			break;
		case "Street":
			nightParking_Street.click();
			break;
		case "Car Park":
			nightParking_Carpark.click();
			break;
		}
	}
	
	
	public void accident_or_hail_damage(String damage) {
		Assert.assertEquals("Vehicle Damage | Budget Direct Car", driver.getTitle());
		switch(damage) {
		case "No Damage":
			NoDamage.click();
			break;
		case "Hail Damage":
			HailDamage.click();
			break;
		case "Accident Damage":
			AccidentDamage.click();
			break;
		case "Hail & Accident Damage":
			HailAccidentDamage.click();
			break;
		}
	}
	
	
	public void Usage_of_Car(String usage) {
		Assert.assertEquals("Business Use | Budget Direct Car", driver.getTitle());
		switch(usage) {
		case "Private":
			privateUsage.click();
			break;
		case "business":
			businessUsage.click();
			break;
		case "commercial":
			commercialUsage.click();
			break;
		}
	}
	
	
	public void Avg_kilo(String kilometer) {
		Assert.assertEquals("Kilometres | Budget Direct Car", driver.getTitle());
		AvgKilo.click();
	}
	
	
	public void current_loan(String loan) {
		//Need to test other options
		Assert.assertEquals("Finance | Budget Direct Car", driver.getTitle());
		switch(loan) {
		case "No loan":
			loan_No.click();
			break;
		case "Hire loan":
			loan_HirePurchase.click();
			String HirePopup=loanHire_Popup.getText();
			System.out.println(HirePopup);
			NxtBtn.click();
			break;
		case "Lease loan":
			loan_Lease.click();
			String LeasePopup=loanHire_Popup.getText();
			System.out.println(LeasePopup);
			NxtBtn.click();
			break;
		}
	}
	
	
	public void certificate_For_Loan_Finace(String loan_Company) {
		switch(loan_Company) {
		case "Company Name":
			NxtBtn.click();
			String popup=loan_Certificate_Popup.getText();
			System.out.println("Loan certificate popup: "+popup);
			loan_certificateName.sendKeys("money3");
			NxtBtn.click();
			break;
		case "don't need a certificate":
			reset_certificate.click();
			break;
		}
	}
	
	
	public void FirstName_of_Regular_Driver(String firstName) {
		ThreadSleep(2000);
		Assert.assertEquals("First Name | Regular Driver | Budget Direct Car", driver.getTitle());
		if(firstName.equals("Skips")) {
			NxtBtn.click();
		}else {
			RD_Firstname.sendKeys(firstName);
			NxtBtn.click();
		}
	}
	
	
	//Assertion
	public void date_of_birth(String day, String month, String year) {
		Assert.assertEquals("Date of Birth | Regular Driver | Budget Direct Car", driver.getTitle());
		day_DOB.sendKeys(day);
		month_DOB.sendKeys(month);
		year_DOB.sendKeys(year);
		ThreadSleep(2000);
		NxtBtn.click();
		boolean alert = alert_DOB.size()>0;
		if(alert) {
			//    	String print=alert_DOB.get(0).getText();
			//    	System.out.println(print);
			Assert.assertEquals(true, alert);
		}
		Assert.assertEquals(false, alert);

	}
	
	
	//Common Purpose
	public void DOB_DattaTable(DataTable DOB) {
		Assert.assertEquals("Date of Birth | Regular Driver | Budget Direct Car", driver.getTitle());
		List<Map<String, String>> DateOfBirth = DOB.asMaps();
		RD_day_DOB = DateOfBirth.get(0).get("Day");
		RD_month_DOB = DateOfBirth.get(0).get("Month");
		RD_year_DOB = DateOfBirth.get(0).get("Year");
		day_DOB.sendKeys(DateOfBirth.get(0).get("Day"));
		month_DOB.sendKeys(DateOfBirth.get(0).get("Month"));
		year_DOB.sendKeys(DateOfBirth.get(0).get("Year"));
		ThreadSleep(1000);
		NxtBtn.click();
		ThreadSleep(1000);
	}
	
	
	public void Gender_of_the_Regular_Driver(String gender) {
		switch(gender) {
		case "Male":
			genderMale_Driver.click();
			break;
		case "Female":
			genderFemale_Driver.click();
		}
	}
	
	
	public void Motor_Insurance_Claims(String insurance) {
		Assert.assertEquals("Claims | Regular Driver | Budget Direct Car", driver.getTitle());
		switch(insurance) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "DonrKnow":
			DontKownBtn.click();
			break;
		}
	}
	
	
	public void Regular_Driver_retired(String retired) {
		switch(retired) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	
	
	public void registered_Owner_of_Another_Car(String OwnAnotherCar) {
		switch(OwnAnotherCar) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	
	
	public void Owning_a_Home(String OwnigHome) {
		Assert.assertEquals("Mortgage | Regular Driver | Budget Direct Car", driver.getTitle());
		switch(OwnigHome) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
		ThreadSleep(1000);
	}
	
	
	public void Younger_Driver_option(String YDOption) {
		Assert.assertEquals("Youngest Driver | Budget Direct Car", driver.getTitle());
		switch(YDOption) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
		}
	}
	
	
	public void details_of_the_Younger_Driver(DataTable YDDetails) {
		List<Map<String, String>>  YDData = YDDetails.asMaps();
		dayDOB_Youngest = YDData.get(0).get("Day_DOB");
		monthDOB_Youngest = YDData.get(0).get("Month_DOB");
		yearDOB_Youngest = YDData.get(0).get("Year_DOB");
		day_YD_DOB.sendKeys(YDData.get(0).get("Day_DOB"));
		month_YD_DOB.sendKeys(YDData.get(0).get("Month_DOB"));
		year_YD_DOB.sendKeys(YDData.get(0).get("Year_DOB"));

		if(YDData.get(0).get("Gender").equals("Male")) {
			genderMale_Driver.click();
		}else {
			genderFemale_Driver.click();
		}
	}
	
	
	public void Younger_Driver_is_on_Learner_Licence_Permit(DataTable LPLicenceDetails){
		YDLearner.click();
		List<Map<String, String>> LPData = LPLicenceDetails.asMaps();
		Month_LP = LPData.get(0).get("Month_LP");
		Year_LP = LPData.get(0).get("Year_LP");
		month_YD_Learner.sendKeys(LPData.get(0).get("Month_LP"));
		year_YD_Learner.sendKeys(LPData.get(0).get("Year_LP"));
		NxtBtn.click();
	}
	
	
	public void confirms_the_address_of_the_Younger_Driver(String addConf) {
		switch(addConf) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	
	
	public void other_drive_younger_than_the_Regular_Driver(String otherYoungDriver) {
		switch(otherYoungDriver) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	
	
	public void start_date_of_the_policy(String PolicyDate, String PolicyMonth) {
		//Assert.assertEquals("Start Date | Budget Direct Car", driver.getTitle());
		//nxtMonth_btnCalender.click();
		ThreadSleep(1000);
		String month = month_SPcalender.getText();
		if(month.equals(PolicyMonth)) {
			date_SPcalender.click();
		}
		NxtBtn.click();
	}
	
	
	public void email_ID(String email) {
		//Assert.assertEquals("Email | Budget Direct Car", driver.getTitle());
		email_Id.sendKeys(email);
		NxtBtn.click();
		ThreadSleep(5000);
		boolean ContactInfo = contactInformation.size()>0;
		if(ContactInfo) {
			System.out.println(ContactInfo);
			ThreadSleep(2000);
			NxtBtn.click();
		}
	}
	
	
	public void basic_quote_for_yearls_monthly_and_forthnightly(String filePath) {
		ThreadSleep(5000);
		Assert.assertEquals("Price Presentation | Budget Direct Car", driver.getTitle());
		ArrayList<String> QPPeriod = new ArrayList<String>();
		ArrayList<String> QPrice = new ArrayList<String>();
		HashMap<String, String> mapPricePeriod = new HashMap<String, String>();
		for(int i=0; i<3; i++) {
			String pricePeriod= QuotePricePeriod.get(i).getText();
			String QuotePrice = QuotePricely.get(i).getText();
			QPPeriod.add(pricePeriod);
			QPrice.add(QuotePrice);
		}
		for(int i=0; i<QPPeriod.size(); i++) {
			mapPricePeriod.put(QPPeriod.get(i), QPrice.get(i));
		}
		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileOut = new FileOutputStream(file);
			PrintWriter pr = new PrintWriter(fileOut);
			for(Map.Entry<String, String> entry : mapPricePeriod.entrySet()) {
				pr.println(entry.getKey()+": "+entry.getValue());
			}
			pr.flush();
			pr.close();
			fileOut.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	public void age_restriction(String ageRestriction) {
		switch(ageRestriction) {
		case "Any":
			ageResAny.click();
			break;
		case "21+":
			ageRes21.click();
			break;
		case "25+":
			ageRes25.click();
			break;
		case "30+":
			ageRes30.click();
			break;
		}
	}
	
	
	public void continues_with_quote(String quotePeriod) {
		switch(quotePeriod) {
		case "monthly":
			quote_List.get(0).click();
			break;
		case "yearly":
			quote_List.get(1).click();
			break;
		case "forthnightly":
			quote_List.get(2).click();
			break;
		}
	}
	
	
	public void regular_driver_deltails(DataTable driverDetails) {
		List<Map<String, String>> details = driverDetails.asMaps();
		Select select = new Select(RD_Title);
		switch(details.get(0).get("Title")) {
		case "Mr":
			select.selectByVisibleText("Mr");
			break;
		case "Father":
			select.selectByVisibleText("Father");
			break;
		case "Sir":
			select.selectByVisibleText("Sir");
			break;
		}
		RD_FirstName = details.get(0).get("FirstName");
		RD_LastName = details.get(0).get("Surname");
		Firstname.sendKeys(details.get(0).get("FirstName"));
		Lastname.sendKeys(details.get(0).get("Surname"));
		Assert.assertEquals(details.get(0).get("Day"), RD_day_DOB);
		Assert.assertEquals(details.get(0).get("Month"), RD_month_DOB);
		Assert.assertEquals(details.get(0).get("Year"), RD_year_DOB);
		NxtBtn.click();
	}
	
	
	public void type_of_license_driver_holds(String licenceType) {
		switch(licenceType) {
		case "Full Australian Licence More than 2 years":
			RD_LicenceType_FullMore2.click();
			break;
		case "FUll Australian Licence Less than 2 years":
			RD_LicenceType_FullLess2.click();
			break;
		case "FUll Australian Licence Less than 2 years(foreign transfer)":
			RD_LicenceType_FullForeign.click();
			break;
		case "Provisional Licence":
			RD_LicenceType_Provisional.click();
			break;
		case "Leaner":
			RD_LicenceType_Leaner.click();
			break;
		case "Foreign Licence resident":
			RD_LicenceType_ForeignResident.click();
			break;
		case "Foreign Licence Tourist":
			RD_LicenceType_ForeignTourist.click();
			break;
		case "Cancelled":
			RD_LicenceType_Cancelled.click();
			break;
		case "No Licence":
			RD_LicenceType_NO.click();
			break;
		}
	}
	
	
	public void foreign_license_issued_country(String country) {
		switch(country) {
		case "Australia":
			RD_LicCountry_Australia.click();
			break;
		case "Belgium":
			RD_LicCountry_Belgium.click();
			break;
		case "India":
			RD_LicCountry_India.click();
			break;
		}
	}
	
	
	public void confirms_the_address_of_the_regular_driver(String addConfirmation) {
		switch(addConfirmation) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			boolean alert = AddConf_AlertMsg.size()>0;
			Assert.assertEquals(true, alert);
			ThreadSleep(1000);
			YesBtn.click();
			break;
		}
	}
	public void main_policy_holder(String policyHolderConf) {
		Assert.assertEquals("Same As | Policy Holder | Budget Direct Car", driver.getTitle());
		switch(policyHolderConf) {
		case "Yes":
			YesBtn.click();
			ThreadSleep(5000);
			break;
		case "No":
			NoBtn.click();
			break;
		case "Company":
			policyHolder_Company.click();
			break;
		}
	}
	
	
	public void additional_member_who_may_driver_the_car(String addMember) {
		ThreadSleep(2000);
		switch(addMember) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	
	
	public void details_of_the_youngest_or_AdditionalMember_driver_withName(DataTable YDDetails) {
		List<Map<String, String>> details = YDDetails.asMaps();
		Select select = new Select(RD_Title);
		switch(details.get(0).get("Title")) {
		case "Mr":
			select.selectByVisibleText("Mr");
			break;
		case "Ms":
			select.selectByVisibleText("Ms");
			break;
		case "Miss":
			select.selectByVisibleText("Miss");
			break;
		case "Mrs":
			select.selectByVisibleText("Mrs");
			break;
		case "Father":
			select.selectByVisibleText("Father");
			break;
		case "Lady":
			select.selectByVisibleText("Lady");
			break;
		case "Madam":
			select.selectByVisibleText("Madam");
			break;
		case "Sir":
			select.selectByVisibleText("Sir");
			break;
		}
		YD_FirstName = details.get(0).get("FirstName");
		YD_LastName = details.get(0).get("Surname");
		Firstname.sendKeys(details.get(0).get("FirstName"));
		Lastname.sendKeys(details.get(0).get("Surname"));
		if(dayDOB_Youngest!=null) {
			Assert.assertEquals(details.get(0).get("Day"), dayDOB_Youngest);
			Assert.assertEquals(details.get(0).get("Month"), monthDOB_Youngest);
			Assert.assertEquals(details.get(0).get("Year"), yearDOB_Youngest);
		}else {
			day_DOB.sendKeys(details.get(0).get("Day"));
			month_DOB.sendKeys(details.get(0).get("Month"));
			year_DOB.sendKeys(details.get(0).get("Year"));
		}

		NxtBtn.click();
	}
	public void relationship_with_other_driver(String relationship) {
		switch(relationship) {
		case "BusinessPartner":
			OtherPH_BusinessPartner.click();
			break;
		case "Employee":
			OtherPH_Employee.click();
			break;
		case "Employer":
			OtherPH_Employer.click();
			break;
		case "Other Family":
			OtherPH_OtherFamily.click();
			break;
		case "Partner":
			OtherPH_Partner.click();
			break;
		case "Spouse":
			OtherPH_Spouse.click();
			break;
		case "Unrelated":
			OtherPH_Unrelated.click();
			break;
		}
	}
	public void checks_the_Listed_Drivers_and_confirmation(String filePath) {

		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileOut = new FileOutputStream(file);
			PrintWriter pr = new PrintWriter(fileOut);
			for(int i=0; i<ListedDriver.size(); i++) {
				pr.println(ListedDriver.get(i).getText());
			}
			pr.flush();
			pr.close();
			fileOut.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		ThreadSleep(5000);
		ListedDriverAdded.click();
		ThreadSleep(5000);
	}
	public void registered_owner_of_the_car(String carOwner) {
		switch(carOwner) {
		case "Regural Driver":
			RegularDriver_Name = RD_FirstName+" "+RD_LastName;
			Assert.assertEquals(RegularDriver_Name, this.carOwner.get(0).getText());
			this.carOwner.get(0).click();
			break;
		case "Add Member":
			AddMember_Name = YD_FirstName+" "+YD_LastName;
			Assert.assertEquals(AddMember_Name, this.carOwner.get(0).getText());
			System.out.println(this.carOwner.get(1).getText());
			this.carOwner.get(1).click();
			break;
		case "Company":
			this.carOwner.get(2).click();
			break;
		case "Another Person":
			this.carOwner.get(3).click();
			String Popup = carOwner_AnotherPersonPopup.getText();
			System.out.println(Popup);
			System.out.println("Clicking Policy holder as registered owner");
			this.carOwner.get(1).click();
			break;
		}
	}
	public void unclaimed_accident_and_thefts(String claims) {
		switch(claims) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void Refused_or_Cancelled_Insurance(String cancelledInsurance) {
		switch(cancelledInsurance) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void Alcohol_Drug_Related_or_Dangerous_Driving_Charges(String drivingCharges) {
		switch(drivingCharges) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void Demerit_Points_or_Good_Behaviour_Bond(String demerits) {
		switch(demerits) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void Licence_Suspensions_Cancellations_or_Restrictions(String suspension) {
		switch(suspension) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void Criminal_Convictions(String conviction) {
		switch(conviction) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		case "Don't Know":
			DontKownBtn.click();
			break;
		}
	}
	public void purchase_the_car_in_the_past_12_months(String purchasePeriod) {
		switch(purchasePeriod) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	public void insurance_on_the_car_in_the_past_two_weeks(String pastInsurance) {
		switch(pastInsurance) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	public void company_with_which_the_policy_was_held(String pastInsuranceCompany) {
		Select select = new Select(this.pastInsuranceCompany);
		switch(pastInsuranceCompany) {
		case "AAMI":
			select.selectByVisibleText("AAMI");
			break;
		case "Budget Direct":
			select.selectByVisibleText("Budget Direct");
			break;
		case "RACQ":
			select.selectByVisibleText("RACQ");
			break;
		}
		NxtBtn.click();
	}
	public void past_insurance_level_of_cover(String pastCoverLevel) {
		switch(pastCoverLevel) {
		case "THIRD_PARTY_PROPERTY_DAMAGE":
			pastCoverLevel3rdPartyOnly.click();
			break;
		case "THIRD_PARTY_PROPERTY_FIRE_THEFT":
			pastCoverLevel3rdPartyFireTheft.click();
			break;
		case "COMPREHENSIVE":
			pastCoverLevelComprehensive.click();
			break;
		}
	}
	public void adding_Roadside_assistance(String RoadsideAss) {
		switch(RoadsideAss) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	public void continues_with_the_flexible_policy_options(String filePath) {
		try {
			File file = new File(System.getProperty("user.dir")+filePath);
			FileOutputStream fileOut = new FileOutputStream(file,true);
			PrintWriter pr = new PrintWriter(fileOut);
			String text ="FINAL PRICE to purchase the quote: ";
			ThreadSleep(10000);
			pr.println(text+finalPrice.getText());
			pr.flush();
			pr.close();
			fileOut.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		policyContinue.click();
	}
	public void postal_address(String postalAddress) {
		switch(postalAddress) {
		case "Where The Car Is Kept":
			postalAddsameAsCar.click();
			break;
		case "Another Address":
			postalAddAnother.click();
			break;
		case "PO Box":
			postalAddPOBox.click();
			break;
		}
	}
	public void contact_number_as(String contactNum) {
		phoneNumber.sendKeys(contactNum);
		NxtBtn.click();
	}
	public void policy_to_be_held_in_joint_names(String jointNames) {
		switch(jointNames) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	public void details_of_the_PolicyHolder_driver_withName(DataTable PH_Details) {
		List<Map<String, String>> details = PH_Details.asMaps();
		Select select = new Select(RD_Title);
		switch(details.get(0).get("Title")) {
		case "Mr":
			select.selectByVisibleText("Mr");
			break;
		case "Ms":
			select.selectByVisibleText("Ms");
			break;
		case "Miss":
			select.selectByVisibleText("Miss");
			break;
		case "Mrs":
			select.selectByVisibleText("Mrs");
			break;
		case "Father":
			select.selectByVisibleText("Father");
			break;
		case "Lady":
			select.selectByVisibleText("Lady");
			break;
		case "Madam":
			select.selectByVisibleText("Madam");
			break;
		case "Sir":
			select.selectByVisibleText("Sir");
			break;
		}
		Firstname.sendKeys(details.get(0).get("FirstName"));
		Lastname.sendKeys(details.get(0).get("Surname"));
		day_DOB.sendKeys(details.get(0).get("Day"));
		month_DOB.sendKeys(details.get(0).get("Month"));
		year_DOB.sendKeys(details.get(0).get("Year"));
		NxtBtn.click();
	}
	public void confirms_the_Younger_Driver(String YD_conf) {
		Assert.assertEquals("Learner Driver | Budget Direct Car", driver.getTitle());
		switch(YD_conf) {
		case "Yes":
			YesBtn.click();
			break;
		case "No":
			NoBtn.click();
			break;
		}
	}
	public void confirms_Leaner_licence_dates() {
		month_DOB.sendKeys(Month_LP);
		year_DOB.sendKeys(Year_LP);
		NxtBtn.click();
	}
	public void paymanet_page() {
		Assert.assertEquals("Payment | Budget Direct Car", driver.getTitle());
	}

}
