package BDFramework.TestRunner.StepDefenition;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

//import io.cucumber.java.After;
//import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class WDManager{
		private WebDriver driver;
		public Properties prop;
	
	//@Before
    public void browserSetup(){
		try {
	        FileInputStream file = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\BDFramework\\basePackage\\config.properties");
	        prop = new Properties();
	        prop.load(file);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	
        String browser = prop.getProperty("browser");
        System.out.println("1. Driver is getting inzialized");

        if(browser.equals("chrome")){
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }else if (browser.equals("Firefox")){
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
            }else{
            WebDriverManager.edgedriver().setup();
            driver= new EdgeDriver();
        }
        driver.get(prop.getProperty("URL"));
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        System.out.println("2. Browser is opened");
    }
    public WebDriver getDriver() {
    	return driver;
    }
    
    //@After
    public void tearDown() {
    	if(driver !=null) {
    		driver.close();
        	driver.quit();
        	System.out.println("7. Browser is closed");
    	}

}
}
