import { When } from 'cypress-cucumber-preprocessor/steps';

When('User navigates to website', () => {
  cy.visit('https://btcbit.net/');
});
