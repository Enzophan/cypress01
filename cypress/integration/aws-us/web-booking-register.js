
describe('Web Booking - Register', function () {

    function phoneNumber() {
        var text = "";
        var phoneNumber = "";
        var possible = "0123456789";

        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        var phoneNumber = "+1205777" + text
        return phoneNumber;
    };


    it('Visit the web booking to verify signup', function () {
        cy.visit('https://wb.qupworld.com/booking.html?fleet=testsite', { timeout: 30000 })
        cy.viewport(414, 736)

        cy.contains('Want to book a ride?').wait(2000)

        cy.url()
            .should('include', '#book-info')


        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('en')
        cy.screenshot('Register 1 - English')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > span.btSignup')
            .click()
        cy.wait(1000)
        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(2) > div > div > div > input')
            .clear()
            .type(phoneNumber())
        // .type('+12057778884')
        // .should('have.value', '+12057778884')

        cy.get('input[name="firstName"]')
            .type('Cy', { delay: 100 })
            .should('have.value', 'Cy')

        cy.get('input[name="lastName"]')
            .type('Auto Test', { delay: 100 })
            .should('have.value', 'Auto Test')

        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(4) > div > select')
            .select("1")

        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(5) > div > input')
            .type('tester.qup@gmail.com', { delay: 100 })
            .should('have.value', 'tester.qup@gmail.com')

        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(6) > div > input')
            .type('demo@12345')

        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(7) > div > input')
            .type('demo@12345')

        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div.divSub > div.agree > label > input')
            .click()
        cy.screenshot('Register 2 - fill info')
        cy.wait(1000)
        cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div.divSub > div.btStyle.signup > input')
            .click()

        cy.get('#app-container > div > div.verifyPhone > div:nth-child(1)', { timeout: 30000 })
            .within(() => {
                cy.get('p[class="veriTitle"]').should('contain', 'Verify phone')
                cy.get('p[class="veriContent"]').should('contain', "To make sure everything works, we'll send you an SMS with a verification code.")
                // cy.get('span[class="numberPhone"]').should('contain', '+12057778884')
            })
        cy.screenshot('Register 3 - Get Code')
        cy.wait(3000)
        cy.get('#app-container > div > div.verifyPhone > div:nth-child(1) > div > span:nth-child(2)')
            .click()
        cy.wait(2000)
        cy.get('#app-container > div > div.verifyPhone > div:nth-child(3) > div:nth-child(6) > input')
            .type('2304')
        cy.wait(3000)
        cy.screenshot('Register 4 - Enter Code')

        cy.get('#app-container > div > div.verifyPhone > div:nth-child(3) > div.btVeri > span:nth-child(2)')
            .click()
        cy.wait(3000)
        cy.screenshot('Register 5 - Profile after registered')
        cy.wait(3000)

    })

})