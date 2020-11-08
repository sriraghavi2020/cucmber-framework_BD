package BDFramework.Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BDFramework.basePackage.baseClass;

public class homePage extends baseClass{

	@FindBy(xpath="//a[@href='/']")
	WebElement logo;
	@FindBy(xpath ="//a[@href='/about-us/awards.html']")
	WebElement MoneyMagazine;
	@FindBy(xpath="//div[contains(text(), 'Make a Claim')]")
	WebElement makeAClaim;
	@FindBy(id="phone")
	WebElement contactUs;
	@FindBy(xpath="//div[contains(text(), 'Money Manager')]")
	WebElement moneyManager;


	public homePage(WebDriver driver) {

		super(driver);
		PageFactory.initElements(driver, this);
		System.out.println("5. Control flows finally to Page class constructor");
	}

	public void user_navigates_to_home_page() {
		System.out.println("6. Starts the program");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void title_of_the_page_is_displayed_as(String Title) {

		String actualTitle = driver.getTitle();
		Assert.assertEquals(Title, actualTitle);
		System.out.println("Actual HomeTitle: "+actualTitle);
		System.out.println("Expected HomeTiltle: "+Title);

	}
	public void logo_is_directing_to_home_page() {

		logo.click();
		//driver.findElement("")).click();
		String afterClickTitle = driver.getTitle();
		System.out.println("Title after clicking logo: "+afterClickTitle);

	}
	public void money_magazine_award_directs_to_award_page() {
		MoneyMagazine.click();
		String moneyMagazine = driver.getTitle();
		System.out.println("Title after clicking Money Magazine award logo: "+moneyMagazine);
		logo.click();
	}
	public void user_selects_and_the_tile_of_the_page_is_displayed_as(String string, String string2) {
		makeAClaim.click();
		String MakeAClaim = driver.getTitle();
		System.out.println("Titlte after clicking Make A Claim link: "+MakeAClaim);
		logo.click();

	}
	public void user_clicks_and_the_title_of_the_page_is_displayed_as(String string, String string2) {
		contactUs.click();
		String ContactUs = driver.getTitle();
		System.out.println("Title after clickinf contact us link: "+ContactUs);
		logo.click();
	}
	public void title_of_the_page_is_displayed_as(String string, String string2) {
		moneyManager.click();
		String MoneyManager = driver.getTitle();
		System.out.println("Ttile after clicking Money Manager link: "+MoneyManager);
		logo.click();

	}


}
