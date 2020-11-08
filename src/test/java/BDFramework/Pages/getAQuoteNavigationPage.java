package BDFramework.Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import BDFramework.basePackage.baseClass;

public class getAQuoteNavigationPage extends baseClass{

	@FindBy(xpath="//a[@href='/']")
	WebElement logo;
	@FindBy(xpath="//a[@class='btn-new btn--quote btn--arrow btn--normal btn--large'][@href='/start/gold-car.html']")
	WebElement GQCar;
	@FindBy(xpath="//a[@class='btn-new btn--quote btn--arrow btn--normal btn--large'][@href='/start/home-contents.html']")
	WebElement GQHome;
	@FindBy(xpath="//a[@class='btn-new btn--quote btn--arrow btn--normal btn--large'][@href='/start/motorcycle.html']")
	WebElement GQMotorBike;

	public getAQuoteNavigationPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);
	}

	public void user_is_navigated_to_get_a_qoute_page() {
		System.out.println("3. Starts the program");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		

	}
	public void title_of_the_homePage_is_dispalyed_as(String expectedTitle) {
		
		String actualTitle = driver.getTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		System.out.println("4. Title of the Quote page: "+actualTitle);

	}

	public void User_starts_with_Get_A_Quote_for(String coverType) {
		
		if(coverType.equals("Car")) {
		GQCar.click();
		}else if(coverType.equals("Home & Contents")) {
			GQHome.click();
		}else {
			GQMotorBike.click();
		}
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	public void title_of_the_CoverPage_is_displayed_as(String expectedTitle) {
		
		String PageTitle = driver.getTitle();
		Assert.assertEquals(expectedTitle, PageTitle);
		System.out.println("5. Tilte of the page after clicking Get A Quote: "+PageTitle);
	}



}
