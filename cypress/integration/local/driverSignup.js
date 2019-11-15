describe('Web Booking - Login', function () {

    function phoneNumber() {
        var text = "";
        var phoneNumber = "";
        var possible = "0123456789";

        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        var phoneNumber = "+1205555" + text
        return phoneNumber;
    };

    it('Verify add credit card when login on Desktop', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit('http://192.168.2.86:8080/driverregistration/caps', { timeout: 30000 })
        cy.viewport(1280, 720)

        cy.get('#start > div.types.col-lg-7.col-md-7.col-sm-8.col-xs-12 > div:nth-child(1) > a > span.icon')
            .click()
        cy.wait(2000)

        cy.get('input[name="phone"]')
            .clear()
            .type(phoneNumber())
        // .type('+12055556667')



        cy.get('input[name="firstName"]')
            .type('Driver')

        cy.get('input[name="lastName"]')
            .type('Cy')

        cy.get('select[name="cityDriverId"]')
            .select('5dce2c5f4e88324d788a80ac')

        cy.get('select[name="companyId"]')
            .select('5d68d450ca659b55795279f5')

        cy.get('#step-1 > fieldset > div.row > div.form-buttons.col-lg-5.col-md-5.col-sm-4.col-xs-12 > div:nth-child(2) > a')
            .click()
        cy.wait(2000)

        cy.get('#step-3 > fieldset > div.row > div.form-buttons.col-lg-5.col-md-5.col-sm-4.col-xs-12 > div:nth-child(2) > a')
            .click()

        cy.wait(5000)

        cy.get('#result-success > div.title', { timeout: 30000 })
            .should('contain', 'THANK YOU for your submission!')


    })
})