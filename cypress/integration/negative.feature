Feature: Negative tests

    Scenario: Verify that error is displayed when using invalid login data
        Given User navigates to website
        When User enters wrong credentials and tries to login
        Then Invalid credentials error is displayed
