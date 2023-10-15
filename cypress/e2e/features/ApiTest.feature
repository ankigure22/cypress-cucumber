Feature: I want to test API GET/POST/PUT/DELETE

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Test API methods
    When Test "GET" method
    When Test "PUT" method
    And  Test "POST" method
    And  Test "DELETE" method