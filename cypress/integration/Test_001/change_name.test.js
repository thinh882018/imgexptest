/// <reference types="cypress" />

describe('Sprint 3 Test', () => {
    it(' Change name - Verify that your user name can contain 50 characters at most', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('AbCd!232')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
         // click nut 
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click edit profile
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(1) > a > span.p-menuitem-text.ng-star-inserted').click()
        //change name
        cy.get('body > app-root > app-user-profile > div > div > div > form > div.input-field.error-box > input').type('thinhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        // click save
        cy.get('body > app-root > app-user-profile > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Your name is at most 50 characters').should('exist', {setTimeout: 600000})
       
    })

    it(' Change name_ 02 - Verify that input  tags are required', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
       /* cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('')
        cy.get('#signInPassword').type('123456789')*/
        // Click SIGN UP button to submit
        //cy.get('#signInSubmit').click({force:true})
         // click nut 
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click edit profile
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(1) > a > span.p-menuitem-text.ng-star-inserted').click()
        //change name
        cy.get('body > app-root > app-user-profile > div > div > div > form > div.input-field.error-box > input').type('')
         // click save
        cy.get('body > app-root > app-user-profile > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Username is required').should('exist', {setTimeout: 600000})
       
    })

    it(' Change name_ 03 -  Verify that name input support all language', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
       /* cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('thinh12345@gmail.com')
        cy.get('#signInPassword').type('123456789')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})*/
         // click nut 
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click edit profile
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(1) > a > span.p-menuitem-text.ng-star-inserted').click()
        //change name
        cy.get('body > app-root > app-user-profile > div > div > div > form > div.input-field.error-box > input').type('thịnh')
        // click save
        cy.get('body > app-root > app-user-profile > div > div > div > form > input').click({force:true})   
    })

})
