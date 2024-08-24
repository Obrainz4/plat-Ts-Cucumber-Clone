Feature: User Authentication Test

  Background: Common steps
    Given that I navigate to BBC Homepage

  Scenario: User can successfully sign in to BBC webpage
    And I click on the sign in
    When I enter a valid email as "onyx3k4u@yahoo.com"
    And I enter a valid Password as "4EVAURonyx"
    And I click on the Sign in user button
    Then I will be successfully logged into BBC webpage