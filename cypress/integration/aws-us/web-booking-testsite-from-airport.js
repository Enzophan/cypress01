
describe('Verify Web Booking on Commericial', function () {


    it('Verify request Book Now', function () {
        cy.visit('https://wb.qupworld.com/booking.html?fleet=testsite', { timeout: 30000 })
        // cy.pause()
        cy.viewport(375, 667)

        cy.contains('Want to book a ride?')
        cy.contains('Book A Ride').click()
        cy.url()
            .should('include', '#book-info')

        cy.get('#contentStep1 > div > div:nth-child(1) > input')
            .type('Edmonton International Airport', { delay: 50 })
            .should('have.value', 'Edmonton International Airport')
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.get('#contentStep1 > div > div:nth-child(2) > input')
            .type('Century Park, Edmonton', { delay: 100 })
            .should('have.value', 'Century Park, Edmonton')
            .wait(1000)
            .type('{downarrow}{enter}')

        cy.wait(1000)
        cy.screenshot('Book Now 1 - Pickup and destination')
        cy.get('#contentStep1 > div > a > span').click()

        cy.wait(4000)
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(1) > span:nth-child(2) > span')
        //     .should('contain', '$89.17')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(2) > span > span')
        //     .should('contain', '4.4 mi')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(3) > span > span')
        //     .should('contain', '17 minutes')

        cy.screenshot('Book Now 2 - List Car type')
        cy.wait(500)

        cy.get('#CarTypesXs > div > div.item.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.selectDiv > a:nth-child(1)').click()

        // Ride Info
        cy.get('input[name="firstname"]')
            .type('Cy', { delay: 100 })
            .should('have.value', 'Cy')

        cy.get('input[name="lastname"]')
            .type('Auto Test', { delay: 100 })
            .should('have.value', 'Auto Test')

        cy.get('input[type="tel"]')
            .clear()
            .type('2057778888')
            .should('have.value', '+12057778888')

        cy.get('input[name="email"]')
            .type('tester.qup@gmail.com', { delay: 100 })
            .should('have.value', 'tester.qup@gmail.com')

        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(7) > div > div > select')
            .select('regular')
            .should('have.value', 'regular')

        cy.get('input[name="note"]')
            .type('Cypress Auto Test Note')
            .should('have.value', 'Cypress Auto Test Note')

        cy.get('input[name = "tip"]')
            .clear()
            .type('5')
            .should('have.value', '5')

        cy.get('input[name="promoCode"]')
            .type('NAM2019')
            .should('have.value', 'NAM2019')
        cy.wait(1000)
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(9) > div.col-xs-6.promoDiv > div.col-xs-5 > div').click()

        cy.wait(2000)
        cy.screenshot('Book Now 3 - Customer Info')
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div.btns > a.btn.btn-primary.btn-next.align-right > span').click()

        // Payment
        // Stripe
        cy.get('input[name="cardHolder"]')
            .type('AUTO TEST')
            .should('have.value', 'AUTO TEST')
        cy.wait(5000)
        cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div:nth-child(2) > div > div > div > iframe')
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


        cy.screenshot('Book Now 4 - Add Credit card')
        cy.wait(500)
        cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div.btns > button.btn.btn-primary.btn-next.align-right > span').click()

        // BOOKING SUMMARY
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(1)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Service')
                cy.get('td[class="val confirmService"]').should('contain', 'From Airport')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(2)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Pickup location')
                cy.get('td[class="val confirmAddress"]').should('contain', 'Edmonton International Airport (YEG), Airport Road, Edmonton International Airport, AB')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(3)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Flight')
                cy.get('td[class="val confirmFlightInfo"]').should('contain', '')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(4)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '')
                cy.get('td[class="val confirmMeetDriver"]').should('contain', 'On curb = CA$5.00')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(5)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Destination')
                cy.get('td[class="val confirmDestination"]').should('contain', '')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(6)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Car type')
                cy.get('td[class="val confirmVehicle"]').should('contain', 'Taxi')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(7)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Estimate fare')
                cy.get('td[class="val confirmEta"]').should('contain', 'CA$244.01')
                // cy.get('td[class="val confirmEta"]').should('contain', 'CA$241.01')
            })

        cy.wait(1000)
        cy.screenshot('Book Now 5 - Summary')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.btns > a.btn.btn-primary.btn-next.align-right > span')
            .should('contain', 'Book for NOW')
            .click()

        cy.wait(5000)

        // Successfull
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.title')
            .should('contain', 'Looking forward to serving you!')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message')
            .should('contain', 'Thank you for choosing our service.')
        cy.screenshot('Book Now 6 - Finish')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a:nth-child(1) > span')
            .should('contain', 'Close')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a.btn.btn-primary.align-right > span')
            .should('contain', 'Book Another Ride')
            .click()
    })

    it('Verify request Book Later', function () {

        cy.visit('https://wb.qupworld.com/booking.html?fleet=testsite', { timeout: 30000 })
        cy.viewport(768, 1024, 'portrait')
        cy.contains('Want to book a ride?')
        cy.contains('Book A Ride').click()
        cy.url()
            .should('include', '#book-info')

        cy.get('#contentStep1 > div > div:nth-child(1) > input')
            .type('Edmonton International Airport', { delay: 50 })
            .should('have.value', 'Edmonton International Airport')
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.get('#contentStep1 > div > div:nth-child(2) > input')
            .type('Grey Nuns Community Hospital', { delay: 50 })
            .should('have.value', 'Grey Nuns Community Hospital')
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.wait(3000)
        cy.screenshot('Book Later 1 - Pickup & destination')
        cy.get('#contentStep1 > div > a > span').click()

        cy.wait(4000)
        cy.get('#CarTypes > div.item.row.active', { timeout: 30000 })

        // Check ETA Fare of Sedan
        // cy.get('#CarTypes > div:nth-child(2) > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(1) > span:nth-child(2) > span')
        //     .should('contain', 'CA$225.00')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(2) > span > span')
        //     .should('contain', '4.4 mi')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(3) > span > span')
        //     .should('contain', '17 minutes')

        cy.screenshot('Book Later 2 - List car type')
        cy.wait(500)

        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.selectDiv > a:nth-child(2)').click()

        // Select SEDAN
        cy.get('#CarTypes > div:nth-child(2) > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.selectDiv > a:nth-child(2)').click()

        // Ride Info
        cy.get('input[name="firstname"]')
            .type('Cy', { delay: 100 })
            .should('have.value', 'Cy')

        cy.get('input[name="lastname"]')
            .type('Auto Test', { delay: 100 })
            .should('have.value', 'Auto Test')

        cy.get('input[type="tel"]')
            .clear()
            .type('2057778888')
            .should('have.value', '+12057778888')

        cy.get('input[name="email"]')
            .type('tester.qup@gmail.com', { delay: 100 })
            .should('have.value', 'tester.qup@gmail.com')


        cy.get('input[name="date"]')
            .click()
        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(4) > td:nth-child(7)')
            .click()


        cy.get('input[name="time"]')
            .click()
        cy.get('#ui-timepicker-div > table > tbody > tr > td.ui-timepicker-hours > table > tbody > tr:nth-child(4) > td:nth-child(6)')
            .click()
        cy.get('#ui-timepicker-div > table > tbody > tr > td.ui-timepicker-minutes > table > tbody > tr:nth-child(4) > td:nth-child(3)')
            .click()

        // const todaysDate = Cypress.moment().add(2, 'days').format('MMM DD, YYYY')
        // cy.get('input[name="date"]')
        //     .type(todaysDate, { delay: 100 })
        //     .should('have.value', todaysDate)

        // const todaysTime = Cypress.moment().format('LT')
        // cy.get('input[name="time"]')
        //     .type(todaysTime, { delay: 100 })
        //     .should('have.value', todaysTime)

        cy.get('input[name="flight"]')
            .type('VN 9999')
            .should('have.value', 'VN 9999')

        cy.get('select[name="meetDriver"]')
            .select('1')
        // .should('have.value', 'Meet & Greet = CA$20.00')

        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(7) > div > div > select')
            // .select('flat')
            // .should('have.value', 'flat')
            .select('regular')
            .should('have.value', 'regular')

        cy.get('input[name="note"]')
            .type('Cypress Auto Test Note')
            .should('have.value', 'Cypress Auto Test Note')

        cy.get('input[name = "tip"]')
            .clear()
            .type('5')
            .should('have.value', '5')

        cy.get('input[name="promoCode"]')
            .type('NAM2019P')
            .should('have.value', 'NAM2019P')
        cy.wait(1000)
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(9) > div.col-xs-6.promoDiv > div.col-xs-5 > div').click()

        cy.wait(2000)
        cy.screenshot('Book Later 3 - Customer info')
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div.btns > a.btn.btn-primary.btn-next.align-right > span').click()

        // Payment
        // Stripe
        cy.get('input[name="cardHolder"]')
            .type('AUTO TEST')
            .should('have.value', 'AUTO TEST')
        cy.wait(5000)
        cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div:nth-child(2) > div > div > div > iframe')
            .then(($element) => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('input[name="cardnumber"]').eq(0).click().type('4111111111111111').should('have.value', '4111 1111 1111 1111')
                stripe = cy.wrap($body)
                stripe.find('input[name="exp-date"]').eq(0).click().type('1221')
                stripe = cy.wrap($body)
                stripe.find('input[name="cvc"]').eq(0).click().type('222')
                stripe = cy.wrap($body)
                stripe.find('input[name="postal"]').eq(0).click().type('98128')
            })


        // cy.get('input[name="cardHolder"]')
        //     .type('AUTO TEST')
        //     .should('have.value', 'AUTO TEST')

        // cy.get('input[name="cardNumber"]')
        //     .type('4111111111111111')
        //     .should('have.value', '4111 1111 1111 1111')

        // cy.get('input[name="expired"]')
        //     .type('12/19')
        //     .should('have.value', '12 / 19')

        // cy.get('input[name="cvv"]')
        //     .type('123')
        //     .should('have.value', '123')
        cy.screenshot('Book Later 4 - Add Credit card')
        cy.wait(500)
        cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div.btns > button.btn.btn-primary.btn-next.align-right > span').click()

        // BOOKING SUMMARY
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(1)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Service')
                cy.get('td[class="val confirmService"]').should('contain', 'From Airport')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(3)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Pickup location')
                cy.get('td[class="val confirmAddress"]').should('contain', 'Edmonton International Airport (YEG), Airport Road, Edmonton International Airport, AB')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(4)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Flight')
                cy.get('td[class="val confirmFlightInfo"]').should('contain', 'VN 9999')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(5)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '')
                cy.get('td[class="val confirmMeetDriver"]').should('contain', 'Meet & Greet = CA$20.00')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(6)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Destination')
                cy.get('td[class="val confirmDestination"]').should('contain', 'Grey Nuns Community Hospital, Youville Drive West Northwest, Edmonton, AB')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(7)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Car type')
                cy.get('td[class="val confirmVehicle"]').should('contain', 'Sedan')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(8)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Estimate fare')
                cy.get('td[class="val confirmEta"]').should('contain', 'CA$272.50')
            })

        cy.wait(1000)
        cy.screenshot('Book Later 5 - Summary')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.btns > a.btn.btn-primary.btn-next.align-right > span')
            .should('contain', 'Reserve')
            .click()

        cy.wait(5000)

        // Successfull
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.title')
            .should('contain', 'Looking forward to serving you!')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message')
            .should('contain', 'Thank you for choosing our service.')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message > span')
            .should('contain', 'A confirmation email has been sent to tester.qup@gmail.com.')

        cy.screenshot('Book Later 6 - Finish')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a:nth-child(1) > span')
            .should('contain', 'Close')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a.btn.btn-primary.align-right > span')
            .should('contain', 'Book Another Ride')
            .click()

    })

})