package BDFramework.TestRunner;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/BDFramework/FeatureFiles/restAPI_Response.feature",
       //glue = { "src\\test\\java\\BDFramework\\StepDef", "src/main/java/BDFramework/basePackage"},
        plugin = {"pretty",  "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:", "json:target/cucumber-reports/CucumberTestReport.json", "junit:target/cucumber-reports/cucumber.xml", "html:target/cucumber-html-reports"},
        monochrome = true,
        dryRun = false, 
        tags = "@DeleteCall_Response"
)
public class RunCukesTest {
}
