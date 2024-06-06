Feature: Operations
    As a user
    I want to execute arithmetic operations  through Docker calls
    So that I can get the result of the operation in the CLI

@operations
Scenario: Addition of two numbers
    Given I have the calculator application
    When I "add" two numbers
    Then the result should be correct

@operations
Scenario: Subtraction of two numbers
    Given I have the calculator application
    When I "subtract" two numbers
    Then the result should be correct

@operations
Scenario: Multiplication of two numbers
    Given I have the calculator application
    When I "multiply" two numbers
    Then the result should be correct

@operations
Scenario: Division of two numbers
    Given I have the calculator application
    When I "divide" two numbers
    Then the result should be correct