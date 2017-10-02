Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"
  #button to remove the splash screen
    When I swipe left
  #to open te menu
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"

  Scenario: As a user I want to know the buses to Avenida 39
    Given I press "Paraderos"
    When I press "ESTACIONES TM"
    And I press "Av. 39"
    Then I wait for 4 seconds

  Scenario: As a user I want to know the routes to universidades
      Given I press "Rutas de buses"
      When I press "Portal El Dorado » Universidades"
      Then I wait for 4 seconds
      Then I should see "Recorrido: Portal El Dorado » Universidades"

  Scenario: As a user I want to know the complementary buses to universidades
          Given I press "Rutas de buses"
          When I press "COMPLEMENTARIO"
          And I press "Search"
          And I enter text "universidades" into field with id "search_src_text"
          And I press the enter button
          Then I should see "Auto Norte - Est. Terminal"
