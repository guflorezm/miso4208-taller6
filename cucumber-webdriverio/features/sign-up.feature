Feature: Sign up into losestudiantes
    As an user I want to sign up myself within losestudiantes website in order to rate teachers

#Scenario: Sign up OK
#  Given I go to losestudiantes home screen
#  When I open the login screen
#  And I fill a name and last name
#  And I select the university and state
#  And I fill an email and password
#  And I check the terms
#  And I try to sign up
#  Then I expect to be able to sign up

  Scenario: Sign up existing user
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill an existing name and last name
    And I select the university and state
    And I fill an existing email and password
    And I check the terms and conditions
    And I try to sign up
    Then I expect to not be able to sign up
