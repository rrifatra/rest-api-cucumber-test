Feature: Dummy Rest API - Smoke Tests

  @SmokeTest
  @GET1USER
  @Success
    Scenario Outline: Success Scenario - Integration Test for GET End point
      Given Rest API is up and running
      When I submit a request to Get a single employee data "<Employee number>"
      Then validate "<Response Code>"
     # And validate response body
      Examples:
        |        Employee number        | Response Code   |
        |        100                    |        200      |

  @SmokeTest
  @GET1USER
  @Error
  Scenario Outline: Error Scenario 404 - Integration Test for GET End point
    Given Rest API is up and running
    When I submit a error request to Get a single employee data "<Employee number>"
    Then validate "<Response Code>"
     # And validate response body
    Examples:
      |        Employee number        | Response Code   |
      |        1                      |        404      |

  @SmokeTest
  @GET1USER
  @Error
  Scenario Outline: Error Scenario 400 - Integration Test for GET End point
    Given Rest API is up and running
    When I submit a bad request to Get a single employee data "<Employee number>"
    Then validate "<Response Code>"
     # And validate response body
    Examples:
      |        Employee number        | Response Code   |
      |        1                      |        429      |

  @SmokeTest
  @DELETE
  @Success
  Scenario Outline: Success Scenario - Integration Test for DELETE End point
    Given Rest API is up and running
    When I submit a request to delete a "<user>"
    Then validate "<Response Code>"
    Examples:
      |Response Code| user        |
      |    200      | 719         |

  @SmokeTest
  @DELETE
  @Error
  Scenario Outline: Error Scenario - Integration Test for DELETE End point
    Given Rest API is up and running
    When I submit a request to delete a "<user>"
    Then validate "<Response Code>"
    Examples:
      |Response Code| user        |
      |    429      | 719         |

  @SmokeTest
  @GetAllUser
  @Success
  Scenario Outline: Success Scenario - Integration Test for GET End point
    Given Rest API is up and running
    When I submit a request to Get all employee data endpoint
    Then validate "<Response Code>"
     # And validate response body
    Examples:
     | Response Code   |
     |        200      |

  @SmokeTest
  @GetAllUser
  @Error
  Scenario Outline: Error Scenario 429 - Integration Test for GET End point
    Given Rest API is up and running
    When I submit a error request to Get all employee data endpoint
    Then validate "<Response Code>"
    Examples:
      | Response Code   |
      |        429      |