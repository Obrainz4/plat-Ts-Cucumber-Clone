Feature: BBC.co.uk Homepage

Background:
    Given that the user navigate to BBC Homepage

Scenario: Verify essential elements on the homepage
    Then the page title should be BBC - Home
    And the header should contain BBC logo
    And the user should see the navigation menu with options like News, Sport, Weather, etc.
    And there should be a search bar on the homepage
    And the user should see a footer with links to important sections


Scenario: Verify the search functionality on the homepage
    When the user enters word in search bar as "technology"
    And clicks on the search button
    Then the search results page should be displayed
    And the results should include relevant articles related to technology

Scenario: Navigate to the News section
    When the user clicks on the News link in the navigation menu
    Then the user should be redirected to the News section
    And the page title should display as "BBC News"
    And the user should see the latest news articles

Scenario: Check weather information
    When the user clicks on the "Weather" link in the navigation menu
    Then the user should be redirected to the Weather section
    And the page title should be "BBC Weather"
    And the user should see the current weather information for the selected location

Scenario: Play a video on the homepage
    When the user clicks on a video thumbnail
    Then the video player should be displayed
    And the user should be able to play the video
    And the video should start playing successfully

  Scenario: Verify accessibility features
    When the user checks the accessibility features
    Then the webpage should comply with WCAG standards
    And all images should have appropriate alt text
    And the site should be navigable using a screen reader 