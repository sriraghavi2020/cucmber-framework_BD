Feature: Navigation to concern quote page
 Scenario Outline: Navigation to quote page
   Given User is navigated to get a qoute page
   And Title of the homePage is displayed as Budget Direct | Insurer of the Year 4 Years in a Row
   Then User starts with Get A Quote for <coverType>
   And Title of the covertypePage is displayed as Duty of Disclosure | Budget Direct <coverType>
    Examples:
     | coverType |
     | Car |
     | Home & Contents |
     | Motorcycle |
