import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('User clicks {string} button', (buttonName) => {
  cy.get('button').contains(buttonName).click();
});

When('User clicks {string} link', (linkName) => {
  // using 'force: true' as 'News' may not be visible in smaller screens
  cy.get('a').contains(linkName).click({ force: true });
});

Then('User sees website', () => {
  cy.get('.section--buy-sell-homepage').should('be.visible');
});

Then('{string} pop-up is opened', (popupName) => {
  cy.get('.modal-header').should('contain', popupName);
});

Then('{string} page is opened', (pageName) => {
  cy.get('.main__title').should('contain', pageName);
});
