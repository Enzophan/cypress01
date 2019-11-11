
describe('Web Booking - Login', function () {

    it('Visit the web booking to verify login', function () {
        cy.visit('https://wb.beta.qup.vn/booking.html?fleet=testbeta1', { timeout: 30000 })
        cy.viewport(375, 667)

        cy.contains('Want to book a ride?').wait(2000)

        cy.url()
            .should('include', '#book-info')


        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('en')
        cy.screenshot('Login 1 - English')
        cy.wait(1000)

        // Login
        cy.get('#body > div.chooseLanguage.col-xs-12 > span.btLogin')
            .click()
        cy.wait(1000)

        cy.get('#app-container > div > div.container > div > div > form > div:nth-child(1) > div > div > div > input')
            .clear()
            .type('+12057778884')
            .should('have.value', '+12057778884')

        cy.get('#app-container > div > div.container > div > div > form > div:nth-child(2) > div > input')
            .clear()
            .type('demo@12345')

        cy.wait(1000)
        cy.screenshot('Login 2 - Enter User Password')

        cy.get('#app-container > div > div.container > div > div > form > div.divSub.login > div.btStyle > input')
            .click()

        cy.wait(1000)



        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-2.col-lg-offset-1.col-lg-2.lefBar > div > ul', { timeout: 30000 })
            .within(() => {
                cy.get('li:nth-child(1)').should('contain', 'My Bookings')
                cy.get('li:nth-child(2)').should('contain', 'Payment Method')
                cy.get('li:nth-child(3)').should('contain', 'Report')
                cy.get('li:nth-child(4)').should('contain', 'Profile')
                cy.get('li:nth-child(5)').should('contain', 'Change Password')
                cy.get('li:nth-child(6)').should('contain', 'Logout')

                // cy.get('span[class="glyphicon glyphicon-duplicate"]').should('contain', 'My Bookings')
                // cy.get('span[class="glyphicon glyphicon-credit-card"]').should('contain', 'Payment Method')
                // cy.get('span[class="glyphicon glyphicon-paste"]').should('contain', 'Report')
                // cy.get('span[class="glyphicon glyphicon-user"]').should('contain', 'Profile')
                // cy.get('span[class="glyphicon glyphicon-lock"]').should('contain', 'Change Password')
                // cy.get('span[class="glyphicon glyphicon-log-out"]').should('contain', 'Logout')
            })

        cy.wait(1000)
        cy.screenshot('Login 3 - Details')
        cy.wait(1000)

        // Logout
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-2.col-lg-offset-1.col-lg-2.lefBar > div > ul > li:nth-child(6) > span')
            .click()

        cy.wait(5000)
        cy.get('#contentStep1', { timeout: 30000 })
        cy.screenshot('Login 4 - Logout')

        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(4) > div > select')
        //     .select("1")

        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(5) > div > input')
        //     .type('tester.qup@gmail.com', { delay: 100 })
        //     .should('have.value', 'tester.qup@gmail.com')

        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(6) > div > input')
        //     .type('demo@12345')

        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div:nth-child(7) > div > input')
        //     .type('demo@12345')

        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div.divSub > div.agree > label > input')
        //     .click()
        // cy.screenshot('Register 2 - fill info')
        // cy.wait(1000)
        // cy.get('#app-container > div > div.loginStep.InputSteps > div.container > div > div > form > div.divSub > div.btStyle.signup > input')
        //     .click()

        // cy.get('#app-container > div > div.verifyPhone > div:nth-child(1)', { timeout: 30000 })
        //     .within(() => {
        //         cy.get('p[class="veriTitle"]').should('contain', 'Verify phone')
        //         cy.get('p[class="veriContent"]').should('contain', "To make sure everything works, we'll send you an SMS with a verification code.")
        //         cy.get('span[class="numberPhone"]').should('contain', '+12057778884')
        //     })
        // cy.screenshot('Register 3 - Get Code')
        // cy.wait(3000)
        // cy.get('#app-container > div > div.verifyPhone > div:nth-child(1) > div > span:nth-child(2)')
        //     .click()
        // cy.wait(2000)
        // cy.get('#app-container > div > div.verifyPhone > div:nth-child(3) > div:nth-child(6) > input')
        //     .type('2304')
        // cy.wait(3000)
        // cy.screenshot('Register 4 - Enter Code')

        // cy.get('#app-container > div > div.verifyPhone > div:nth-child(3) > div.btVeri > span:nth-child(2)')
        //     .click()
        // cy.wait(3000)
        // cy.screenshot('Register 5 - Profile after registered')
        // cy.wait(3000)

    })

})