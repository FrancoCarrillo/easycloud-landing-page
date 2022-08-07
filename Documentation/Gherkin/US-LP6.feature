@tagPlaceholder1 @tagPlaceholder2
Feature: Contacto
  Scenario: Visitante contacta con el equipo
    Given que el usuario se encuentra en la pantalla de inicio
    When se desplace hacia el final de la página
    And visualizará el formulario de contacto
    And que el visitante llena los datos del formulario correctamente
    And los datos son enviados correctamente
    Then se notificará al equipo que se quieren comunicar con él
