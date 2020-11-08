Feature: Home Page
  Scenario: Assertion on home page
    Given User navigates to home page
    Then Title of the page is displayed as Budget Direct | Insurer of the Year 4 Years in a Row
    Then Logo is directing to home page
    Then Money magazine award directs to award page
    Then User selects "Make A Claim" and the tile of the page is displayed as "Make a Claim - Budget Direct Insurance"
    Then User clicks "Contact Us" and the title of the page is displayed as "Have a Question? Contact Us - Budget Direct"
    Then Title of the page "Money Manager" is displayed as "Money Manager - Budget Direct"
