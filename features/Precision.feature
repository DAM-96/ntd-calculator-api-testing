Feature: Precision
    As a user
    I want to perform arithmetic operations with numbers with up to 16 digits
    So that I can get a correct result with a precission of up to 16 digits

Scenario: Adding small numbers
    Given I have the calculator application
    When I "add" small numbers
    Then the result should be accurate to 16 digits

Scenario: Adding large and small numbers
    Given I have the calculator application
    When I "add" combined numbers
    Then the result should be accurate to 16 digits

Scenario: Adding scientific notation numbers
    Given I have the calculator application
    When I "add" scientific numbers
    And the numbers are at least 15 digits appart
    Then the result should be accurate to 16 digits
    And the result should be displayed in scientific notation