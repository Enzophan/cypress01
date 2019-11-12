
describe('Web Booking - Login', function () {

    it('Verify add credit card when login on Desktop', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit('https://wb.qupworld.com/booking.html?fleet=testsite', { timeout: 30000 })
        cy.viewport(1280, 720)

        cy.contains('Want to book a ride?').wait(2000)
        cy.url()
            .should('include', '#book-info')
        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('en')
        cy.screenshot('Login Desktop 1 - English')
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
        cy.screenshot('Login Desktop 2 - Enter User Password')
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

            })

        cy.wait(1000)
        cy.screenshot('Login Desktop 3 - Details')
        cy.wait(1000)


        // Payment Method
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-2.col-lg-offset-1.col-lg-2.lefBar > div > ul > li:nth-child(2)')
            .click()
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.myPayment > select:nth-child(2)')
            .select('home')
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.myPayment > span')
            .click()

        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.formAddCard > div > div > div > div > form > div', { timeout: 30000 })

        cy.get('input[name="cardHolder"]')
            .type('AUTO TEST')
            .should('have.value', 'AUTO TEST')
        cy.wait(5000)
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.formAddCard > div > div > div > div > form > div > div > form > div:nth-child(2) > div > div > div > iframe')
            .then(($element) => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('input[name="cardnumber"]').eq(0).click().type('4242424242424242')
                cy.wait(500)
                stripe = cy.wrap($body)
                stripe.find('input[name="exp-date"]').eq(0).click().type('1221')
                cy.wait(500)
                stripe = cy.wrap($body)
                stripe.find('input[name="cvc"]').eq(0).click().type('222')
                cy.wait(500)
                stripe = cy.wrap($body)
                stripe.find('input[name="postal"]').eq(0).click().type('98128')
            })
        cy.wait(2000)
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.formAddCard > div > div > div > div > form > div > div > form > div.divSub.formcard > button.saveCard')
            .debug()
            .click()

        cy.wait(5000)
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.myPayment > div > ul > li > img', { timeout: 30000 })
        cy.log('Add card successful')

        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.myPayment > div > ul')
            .within(() => {
                // cy.get('li:nth-child(1) > span').invoke('text').then(sometext => cy.log(sometext))
                cy.get('li:nth-child(1)').should('contain', 'visa')
            })

        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-10.col-lg-8 > div > div:nth-child(2) > div.myPayment > div > ul > li')
            .should(($li) => {
                expect($li.first()).to.contain('visa')
            })

        // Logout
        cy.get('#app-container > div > div.InputSteps > div.myAccount > div.container-fluid > div > div.col-xs-2.col-lg-offset-1.col-lg-2.lefBar > div > ul > li:nth-child(6) > span')
            .click()

        cy.wait(5000)
        cy.get('#contentStep1', { timeout: 30000 })
        cy.screenshot('Login Desktop 4 - Logout')

    })
})