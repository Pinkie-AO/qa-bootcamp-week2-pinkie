Feature: Add products to the shopping cart

  Scenario: Add two Hammers to the cart
    Given the shopper is viewing the Hammer product page
    When the shopper enters a quantity of 2
    And the shopper adds the product to the cart
    Then the cart should contain the Hammer
    And the cart should display a quantity of 2
