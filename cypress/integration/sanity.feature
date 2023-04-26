Feature: Sanity tests

    Scenario: Verify that btcbit.net website loads
        When User navigates to website
        Then User sees website

    Scenario: Verify that Exchange button works
        Given User navigates to website
        When User clicks 'Exchange' button
        Then 'Fraud Alert!' pop-up is opened

    Scenario: Verify that News tab can be opened
        Given User navigates to website
        When User clicks 'News' link
        Then 'News' page is opened
        