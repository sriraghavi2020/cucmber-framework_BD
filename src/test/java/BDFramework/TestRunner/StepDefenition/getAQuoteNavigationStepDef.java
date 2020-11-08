package BDFramework.TestRunner.StepDefenition;

import org.openqa.selenium.WebDriver;

import BDFramework.Pages.getAQuoteNavigationPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class getAQuoteNavigationStepDef {
	WebDriver driver;
	getAQuoteNavigationPage getquotenavigationPage;
	
	private WDManager wdManager;
	
	public getAQuoteNavigationStepDef(WDManager wdManager) {
		this.wdManager = wdManager;
	}
	
	@Given("^User is navigated to get a qoute page$")
	public void user_is_navigated_to_get_a_qoute_page() {
		driver = wdManager.getDriver();
		getquotenavigationPage = new getAQuoteNavigationPage(driver);
		getquotenavigationPage.user_is_navigated_to_get_a_qoute_page();
		
	}
	@And("^Title of the homePage is displayed as (.*)$")
	public void title_of_the_homePage_is_displayed_as(String PageTitle) {
		getquotenavigationPage.title_of_the_homePage_is_dispalyed_as(PageTitle);
		
	}
	
	@Then("^User starts with Get A Quote for (.*)$")
	public void User_starts_with_Get_A_Quote_for(String coverType) {
		getquotenavigationPage.User_starts_with_Get_A_Quote_for(coverType);
		
	}
	@And("^Title of the covertypePage is displayed as (.*)$")
	public void title_of_the_covertypePage_is_displayed_as(String PageTitle) {
		getquotenavigationPage.title_of_the_CoverPage_is_displayed_as(PageTitle);;
		
	}
	
	
}
