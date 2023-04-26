const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/report',
  displayDuration: true,
  metadata:{
    browser: {
      name: 'chrome'
    },
    device: 'desktop',
    platform: {
      name: 'windows'
    }
  }
});
