import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('User enters wrong credentials and tries to login', () => {
  cy.get('a').contains('Sign In').click();
  cy.get('#email').type('test@test.com');
  cy.get('#password').type('password');
  cy.get('#sign-in').click();
});

Then('Invalid credentials error is displayed', () => {
  cy.get('#js-login-error').should('be.visible');
});
