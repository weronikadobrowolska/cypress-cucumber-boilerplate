Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user opens a kung fu website
    Scenario: Success Login
        When A user goes to members area
        When A user enters the username "vgoodwil@gmail.com"
        And A user enters the password "Czarna98"
        And A user clicks on the login button
        Then I can see the booking form