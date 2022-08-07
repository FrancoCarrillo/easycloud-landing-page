@tagPlaceholder1 @tagPlaceholder2
Feature: Internacionalización
  Scenario: Visitante cambia el idioma de la página de Ingles a Español
    Given que el visitante se encuentra en la panta principal
    When haga clic en el botón “Ingles”
    And selecciona la opción ‘Español’
    Then el sistema cambia los textos de la página a “Español”

