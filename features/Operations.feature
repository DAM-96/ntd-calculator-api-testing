Feature: Operations
    As a user
    I want to execute arithmetic operations  through Docker calls
    So that I can get the result of the operation in the CLI

Background:
    Given I have the calculator application

@operations @addition
Scenario: Addition of two numbers
    When I "add" two numbers
    Then the result should be correct

@operations @subtraction
Scenario: Subtraction of two numbers
    When I "subtract" two numbers
    Then the result should be correct

@operations @mutliplication
Scenario: Multiplication of two numbers
    When I "multiply" two numbers
    Then the result should be correct

@operations @division
Scenario: Division of two numbers
    When I "divide" two numbers
    Then the result should be correct