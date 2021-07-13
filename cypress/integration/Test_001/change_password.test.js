/// <reference types="cypress" />

describe('Sprint 3 Test', () => {
    it(' Change password_01 - Verify that your old password is correct to change the password', () =>{
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('AbCd!232')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true}, {setTimeout: 600000} )

        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click()
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(3) > p-password > div > input').type('AbCd!232', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div.input-field.error-box > p-password > div > input').type('abcd!232', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(5) > p-password > div > input').type('abcd!232', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Password is incorrect').should('exist', {setTimeout: 600000})

    })

    it(' Change password_02 - Verify that input tags are required', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
       /* cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('12345678')*/
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click()
        cy.get('body > app-root > app-change-password > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('is required').should('exist', {setTimeout: 600000})
    })

    it(' Change password_03- Verify that "Confirm Password" needs to be the same as "New Password"', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        /*cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('thinh12345@gmail.com')
        cy.get('#signInPassword').type('123456789')*/
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click()
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(3) > p-password > div > input').type('AbCd!232', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div.input-field.error-box > p-password > div > input').type('tym882018', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(5) > p-password > div > input').type('tym8820', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('New repassword is not match with new password').should('exist', {setTimeout: 600000})

    })

    it(' Change password_04 - Verify that "Confirm Password" and "New Password" contain 50 characters at most', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
       /* cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('thinh12345@gmail.com')
        cy.get('#signInPassword').type('123456789')*/
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        // click nut 
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        //click change-password
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click()
        // change-password
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(3) > p-password > div > input').type('AbCd!232', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div.input-field.error-box > p-password > div > input').type('admin1111111111111111111111111111111111111111111111111111111', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > div:nth-child(5) > p-password > div > input').type('admin1111111111111111111111111111111111111111111111111111111', {force:true})
        cy.get('body > app-root > app-change-password > div > div > div > form > input').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Your Password is at most 50 characters').should('exist', {setTimeout: 600000})
    })



})