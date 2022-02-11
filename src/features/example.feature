Feature: Techlistic page

    Scenario Outline: Fill the practice the form

        Given I am on the practice page "https://www.techlistic.com/p/selenium-practice-form.html"
        Then I validate page header "Demo Sign-Up Selenium Automation Practice Form"
        When I enter firstname <fname>, lastname <lname>
        And I select the gender <gender> and years of experience <yrsexp>
        And I select the profession <profession> and automation tools <tools>
        And I select the continent <continent>
        And I select selenium commands <selcommand>
        Then I click on the button

        Examples:
            | fname | lname  | gender | yrsexp | profession        | tools              | continent     | selcommand    |
            | Pooja | Chavan | female | 1      | Automation Tester | Selenium Webdriver | North America | Wait Commands |