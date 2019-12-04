
describe('My Fist Test', function () {

    it('Verify request book now', function () {

        cy.visit('https://cclite.beta.qup.vn')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('auto_test1')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(2000)
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

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div > select')
            .select('0')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > input')
            .type('Cypress Auto Test Note')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(3) > div > div > div.intl-tel-input.allow-dropdown > div.react-autosuggest__container > input')
            .type('2055555555')
            .wait(1000)
            .type('{enter}')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(4) > div > input')
        //     .click()
        //     .wait(1000)
        //     .clear()
        //     .type('Customer')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(5) > input')
        //     .clear()
        //     .type('Cytest', { delay: 100 })

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(6) > input')
            .click()
            .wait(1000)
            .clear()
            .type('tester.qup@gmail.com')

        cy.wait(2000)

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > input')
            .click()
            .wait(1000)
            .clear()
            .type('5')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > input')
            .type('NAM2019A')
            .wait(1000)

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > span')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(2) > div > div.form-group > div.radio-button-group.form-group > label.qup-radio-wrapper.checked > span.qup-radio-text')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > select')
            .select('2')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div > div > label')
        //     .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > button > span')
            .click()

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div:nth-child(1) > input')
        //     .type('Cy Test')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div:nth-child(2) > input')
        //     .type('4111111111111111')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div.row > div.col-md-7 > div > input')
        //     .type('1221')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div.row > div.col-md-5 > div > input')
        //     .type('222')

        // Payment
        // Stripe
        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div > form > div:nth-child(1) > div > div > input')
            .type('AUTO TEST')
            .should('have.value', 'AUTO TEST')
        cy.wait(5000)
        cy.get('#card-element > div > iframe')
            .then(($element) => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('input[name="cardnumber"]').eq(0).click().type('4242424242424242')
                stripe = cy.wrap($body)
                stripe.find('input[name="exp-date"]').eq(0).click().type('1221')
                stripe = cy.wrap($body)
                stripe.find('input[name="cvc"]').eq(0).click().type('222')
                stripe = cy.wrap($body)
                stripe.find('input[name="postal"]').eq(0).click().type('98128')
            })
        cy.wait(3000)
        cy.screenshot()
        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div > form > div:nth-child(3) > div > button')
            .click()
        cy.wait(5000)

        // Create Book
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div.new-booking-button-container.col-xs-12 > div > button.btn-save.btn.btn-default')
            .click()
        cy.wait(5000)

        cy.get('#root > div > div.c011.c012 > div > div > div > div > div > div > h4', { timeout: 30000 })

        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(5) > a > div.menu-text > span')
            .click()

        cy.wait(5000)

        cy.get('#tab-pane-0 > div.gridViewTable > div > div > div.fixedDataTableLayout_rowsContainer > div:nth-child(3) > div:nth-child(1) > div > div.fixedDataTableRowLayout_body > div:nth-child(1) > div > div > div > div > div > div > div', { timeout: 10000 })
        cy.wait(5000)


    })


    // reservation

    it('Verify request book reservation', function () {

        cy.visit('https://cclite.beta.qup.vn')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('auto_test1')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(2000)
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


        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div.form-control.form-custom.datepicker-input')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div.datePicker-container > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(3)')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div.row > div:nth-child(1) > select')
            .select('19')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div.row > div:nth-child(2) > select')
            .select('59')

        // Type Booking
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div > select')
            .select('0')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > input')
            .type('Cypress Auto Test Note')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(3) > div > div > div.intl-tel-input.allow-dropdown > div.react-autosuggest__container > input')
            .type('2055555555')
            .wait(1000)
            .type('{enter}')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(4) > div > input')
        //     .click()
        //     .wait(1000)
        //     .clear()
        //     .type('Customer')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(5) > input')
        //     .clear()
        //     .type('Cytest', { delay: 100 })

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(2) > div > div:nth-child(6) > input')
            .click()
            .wait(1000)
            .clear()
            .type('tester.qup@gmail.com')

        cy.wait(2000)

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > input')
            .click()
            .wait(1000)
            .clear()
            .type('5')

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > input')
            .type('NAM2019A')
            .wait(1000)

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div > span')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(2) > div > div.form-group > div.radio-button-group.form-group > label.qup-radio-wrapper.checked > span.qup-radio-text')
            .click()

        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > select')
            .select('2')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div > div > label')
        //     .click()

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div:nth-child(1) > input')
        //     .type('Cy Test')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div:nth-child(2) > input')
        //     .type('4111111111111111')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div.row > div.col-md-7 > div > input')
        //     .type('1221')

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > div:nth-child(3) > div.form-group > div.row > div.col-md-5 > div > input')
        //     .type('222')

        // cy.wait(3000)

        // cy.screenshot()

        // cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div.new-booking-button-container.col-xs-12 > div > button.btn-save.btn.btn-default')
        //     .click()

        // Payment
        // Stripe
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div:nth-child(3) > div:nth-child(3) > div.form-group > button > span')
            .click()

        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div > form > div:nth-child(1) > div > div > input')
            .type('AUTO TEST')
            .should('have.value', 'AUTO TEST')
        cy.wait(5000)
        cy.get('#card-element > div > iframe')
            .then(($element) => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('input[name="cardnumber"]').eq(0).click().type('4242424242424242')
                stripe = cy.wrap($body)
                stripe.find('input[name="exp-date"]').eq(0).click().type('1221')
                stripe = cy.wrap($body)
                stripe.find('input[name="cvc"]').eq(0).click().type('222')
                stripe = cy.wrap($body)
                stripe.find('input[name="postal"]').eq(0).click().type('98128')
            })
        cy.wait(3000)
        cy.screenshot()
        cy.get('body > div:nth-child(12) > div.fade.in.modal > div > div > div.modal-body > div > div > form > div:nth-child(3) > div > button')
            .click()
        cy.wait(5000)

        // Create Book
        cy.get('#page-content > span > div > div > div.col-md-7.col-xs-12 > div.new-booking-button-container.col-xs-12 > div > button.btn-save.btn.btn-default')
            .click()
        cy.wait(5000)

        cy.get('#root > div > div.c011.c012 > div > div > div > div > div > div > h4', { timeout: 30000 })

        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(5) > a > div.menu-text > span')
            .click()

        cy.wait(5000)

        cy.get('#tab-pane-0 > div.gridViewTable > div > div > div.fixedDataTableLayout_rowsContainer > div:nth-child(3) > div:nth-child(1) > div > div.fixedDataTableRowLayout_body > div:nth-child(1) > div > div > div > div > div > div > div', { timeout: 10000 })
        cy.wait(5000)

    })

})