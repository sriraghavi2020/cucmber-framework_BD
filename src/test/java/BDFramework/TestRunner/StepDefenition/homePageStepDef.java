package BDFramework.TestRunner.StepDefenition;

import org.openqa.selenium.WebDriver;

import BDFramework.Pages.homePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class homePageStepDef  {
	
	WebDriver driver;
	homePage homepage;
//	public homePageStepDef() {
//		
//	}
	
	private WDManager wdManager;
	public homePageStepDef(WDManager wdManager) {
		this.wdManager = wdManager;
		System.out.println("3. Control flows StepDef constructor to @Given method");
	}
	
	
    @Given("^User navigates to home page$")
    public void user_navigates_to_home_page() {
    	System.out.println("4. Control flowsfrom @Given method to Page method");
    	driver = wdManager.getDriver();
    	homepage = new homePage(driver);
    	homepage.user_navigates_to_home_page();
    }

    @Then("^Title of the page is displayed as (.*)$")
    public void title_of_the_page_is_displayed_as(String Title) {
    	homepage.title_of_the_page_is_displayed_as(Title);
    }
    @Then("^Logo is directing to home page$")
    public void logo_is_directing_to_home_page() {
    	homepage.logo_is_directing_to_home_page();
    	

    }
    @Then("^Money magazine award directs to award page$")
    public void money_magazine_award_directs_to_award_page() {
    	homepage.money_magazine_award_directs_to_award_page();
    }
    @Then("^User selects (.*) and the tile of the page is displayed as (.*)$")
    public void user_selects_and_the_tile_of_the_page_is_displayed_as(String string, String string2) {
    	homepage.user_selects_and_the_tile_of_the_page_is_displayed_as(string, string2);

    }
    @Then("^User clicks (.*) and the title of the page is displayed as (.*)$")
    public void user_clicks_and_the_title_of_the_page_is_displayed_as(String string, String string2) {
    	homepage.user_clicks_and_the_title_of_the_page_is_displayed_as(string, string2);
    }
    @Then("^Title of the page (.*) is displayed as (.*)$")
    public void title_of_the_page_is_displayed_as(String string, String string2) {
    	homepage.title_of_the_page_is_displayed_as(string, string2);

    }
    
    



}
