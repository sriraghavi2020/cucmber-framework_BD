$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/BDFramework/FeatureFiles/homePage.feature");
formatter.feature({
  "name": "Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Assertion on home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "homePageStepDef.user_navigates_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of the page is displayed as Budget Direct | Insurer of the Year 4 Years in a Row",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.title_of_the_page_is_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logo is directing to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.logo_is_directing_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Money magazine award directs to award page",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.money_magazine_award_directs_to_award_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Make A Claim\" and the tile of the page is displayed as \"Make a Claim - Budget Direct Insurance\"",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.user_selects_and_the_tile_of_the_page_is_displayed_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"Contact Us\" and the title of the page is displayed as \"Have a Question? Contact Us - Budget Direct\"",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.user_clicks_and_the_title_of_the_page_is_displayed_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of the page \"Money Manager\" is displayed as \"Money Manager - Budget Direct\"",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDef.title_of_the_page_is_displayed_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});