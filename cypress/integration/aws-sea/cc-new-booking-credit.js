
describe('New Booking on Command Center', function () {

    it('Verify request book now', function () {

        cy.visit('https://dashboard-sea.qupworld.com')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('autotest_001')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(5000)
        cy.get('#root > div > form > div > button')
            .click()

        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(2) > a > div.menu-text > span', { timeout: 10000 })
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > input')
            .type('2 quang trung da nang')
            .wait(1000)
            .type('{downarrow}{enter}')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div > div > input')
            .type('furama da nang')
            .wait(1000)
            .type('{downarrow}{enter}')

        // Select cartype
        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > select')
        //     .select('0')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > input')
            .type('Cypress Auto Test Note')

        // Enter phone number
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > div.intl-tel-input.allow-dropdown > div.react-autosuggest__container > input')
            // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(3) > div > div > div.intl-tel-input.allow-dropdown > div.react-autosuggest__container > input')
            .type('1163636363')
            .wait(1000)
            .type('{enter}')

        // // Enter First Name
        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(3) > div > input')
        //     .click()
        //     .wait(1000)
        //     .clear()
        //     .type('Customer')

        // // Enter Last Name
        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(4) > input')
        //     .clear()
        //     .type('Cytest', { delay: 100 })

        // Enter email
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(5) > input')
            .click()
            .wait(1000)
            .clear()
            .type('tester.qup@gmail.com')

        cy.wait(2000)

        // Enter Tip
        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > input')
        //     .click()
        //     .wait(1000)
        //     .clear()
        //     .type('5')

        // Enter promo code
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > input')
            .type('NAM2019A')
            .wait(1000)

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > span')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(2) > div > div.form-group > div.radio-button-group.form-group > label.qup-radio-wrapper.checked > span.qup-radio-text')
            .click()

        // Select Payment Method
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > select')
            .select('2')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > button > span')
            .click()

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div.row > div:nth-child(1) > div > input')
            .type('Cy Test')

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div.row > div:nth-child(2) > div > input')
            .type('5111111111111118')

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div.row > div:nth-child(3) > div > input')
            .type('0521')

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div.row > div:nth-child(4) > div > input')
            .type('100')

        cy.screenshot('add-credit-card')

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div.text-center.mt-lg > button')
            .click()

        cy.wait(3000)

        cy.screenshot()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div.new-booking-button-container.col-xs-12 > div > button.btn-save.btn.btn-default')
            .click()

        cy.wait(5000)
    })



})