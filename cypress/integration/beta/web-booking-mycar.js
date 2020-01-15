
describe('Web Booking - MyCar', function () {

    it('Verify request book Now at Malaysia - My Car', function () {
        cy.visit('https://wb.beta.qup.vn/booking.html?fleet=mycar', { timeout: 30000 })
        // cy.pause()
        cy.viewport(1280, 720)

        cy.contains('Want to book a ride?')
        cy.contains('Book A Ride').click()
        cy.url()
            .should('include', '#book-info')

        cy.get('#contentStep1 > div > div:nth-child(1) > input')
            .type('Bank Negara Malaysia Museum and Art Gallery', { delay: 50 })
            .should('have.value', 'Bank Negara Malaysia Museum and Art Gallery')
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.get('#contentStep1 > div > div:nth-child(2) > input')
            .type('Muzium Telekom', { delay: 100 })
            .should('have.value', 'Muzium Telekom')
            .wait(1000)
            .type('{downarrow}{enter}')

        cy.wait(1000)
        cy.screenshot('Book Now 1 - Pickup & Destination')
        cy.get('#contentStep1 > div > a > span').click()

        cy.wait(4000)
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(1) > span:nth-child(2) > span')
        //     .should('contain', '$89.17')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(2) > span > span')
        //     .should('contain', '4.4 mi')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(3) > span > span')
        //     .should('contain', '17 minutes')

        cy.screenshot('Book Now 2 - List Car Type')
        cy.wait(500)

        cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.selectDiv > a:nth-child(1)').click()

        // Ride Info
        cy.get('input[name="firstname"]')
            .type('Cy', { delay: 100 })
            .should('have.value', 'Cy')

        cy.get('input[name="lastname"]')
            .type('Auto Test', { delay: 100 })
            .should('have.value', 'Auto Test')

        cy.get('input[type="tel"]')
            .clear()
            .type('1115449999')
            .should('have.value', '+601115449999')

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
            .type('NAM2020P')
            .should('have.value', 'NAM2020P')
        cy.wait(1000)
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(9) > div.col-xs-6.promoDiv > div.col-xs-5 > div').click()

        cy.wait(2000)
        cy.screenshot('Book Now 3 - Customer Info')
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div.btns > a.btn.btn-primary.btn-next.align-right > span').click()

        // Payment
        // Stripe
        // cy.get('input[name="cardHolder"]')
        //     .type('AUTO TEST')
        //     .should('have.value', 'AUTO TEST')
        // cy.wait(5000)
        // cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div:nth-child(2) > div > div > div > iframe')
        //     .then(($element) => {
        //         const $body = $element.contents().find('body')
        //         let stripe = cy.wrap($body)
        //         stripe.find('input[name="cardnumber"]').eq(0).click().type('4242424242424242')
        //         stripe = cy.wrap($body)
        //         stripe.find('input[name="exp-date"]').eq(0).click().type('1221')
        //         stripe = cy.wrap($body)
        //         stripe.find('input[name="cvc"]').eq(0).click().type('222')
        //         stripe = cy.wrap($body)
        //         stripe.find('input[name="postal"]').eq(0).click().type('98128')
        //     })
        // cy.screenshot()
        // cy.wait(500)
        // cy.get('#app > div:nth-child(4) > div.container > div:nth-child(2) > div > div > form > div.btns > button.btn.btn-primary.btn-next.align-right > span').click()

        // BOOKING SUMMARY
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(1)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Service')
                cy.get('td[class="val confirmService"]').should('contain', 'One Way')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(2)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Pickup location')
                cy.get('td[class="val confirmAddress"]').should('contain', 'Bank Negara Malaysia Museum and Art Gallery, Sasana Kijang, Jalan Dato Onn, Kuala Lumpur, Federal Territory of Kuala Lumpur')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(3)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Destination')
                cy.get('td[class="val confirmDestination"]').should('contain', 'Muzium Telekom, Jalan Raja Chulan, Kuala Lumpur, Federal Territory of Kuala Lumpur')
            })


        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(4)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Car type')
                cy.get('td[class="val confirmVehicle"]').should('contain', 'MyCar Premium')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(5)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', 'Estimate fare')
                // cy.get('td[class="val confirmEta"]').should('contain', 'MYR18.50')
            })

        cy.wait(1000)
        cy.screenshot('Book Now 4 - book-summary')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.btns > a.btn.btn-primary.btn-next.align-right > span')
            .should('contain', 'Book for NOW')
            .click()

        cy.wait(5000)

        // Successfull
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.title')
            .should('contain', 'Looking forward to serving you!')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message')
            .should('contain', 'Thank you for choosing our service.')
        cy.screenshot('Book Now 5 - Finish')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a:nth-child(1) > span')
            .should('contain', 'Close')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a.btn.btn-primary.align-right > span')
            .should('contain', 'Book Another Ride')
            .click()
    })

    it('Verify request book Reservation at Malaysia - My Car', function () {
        cy.visit('https://wb.beta.qup.vn/booking.html?fleet=mycar', { timeout: 30000 })
        cy.viewport(1366, 1024, 'portrait')
        cy.contains('Want to book a ride?')
        cy.contains('Book A Ride').click()
        cy.url()
            .should('include', '#book-info')

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('zh_CN')
        cy.screenshot('Book Reservation 1 - Choose China language')
        cy.wait(1000)

        cy.get('#contentStep1 > div > div:nth-child(1) > input')
            .type('Universiti Sains Islam Malaysia', { delay: 50 })
            .should('have.value', 'Universiti Sains Islam Malaysia')
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.get('#contentStep1 > div > div:nth-child(2) > input')
            .type('Kuala Lumpur International Airport', { delay: 50 })
            .should('have.value', 'Kuala Lumpur International Airport')
            .wait(1000)
            .type('{downarrow}{enter}')

        cy.wait(1000)
        cy.screenshot('Book Reservation 2 - Enter pickup & destination')
        cy.get('#contentStep1 > div > a > span').click()

        cy.wait(4000)
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(1) > span:nth-child(2) > span')
        //     .should('contain', '$89.17')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(2) > span > span')
        //     .should('contain', '4.4 mi')
        // cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.estimation > div:nth-child(3) > span > span')
        //     .should('contain', '17 minutes')

        cy.screenshot('Book Reservation 3 - List Car Type')
        cy.wait(500)

        cy.get('#CarTypes > div.item.row.active > div.col-xs-12.col-sm-3.col-md-3.col-lg-3 > div.selectDiv > a:nth-child(2)').click()

        // Ride Info
        cy.get('input[name="firstname"]')
            .type('Cy', { delay: 100 })
            .should('have.value', 'Cy')

        cy.get('input[name="lastname"]')
            .type('Auto Test', { delay: 100 })
            .should('have.value', 'Auto Test')

        cy.get('input[type="tel"]')
            .clear()
            .type('1115449999')
            .should('have.value', '+601115449999')

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
            .type('NAM2020P')
            .should('have.value', 'NAM2020P')
        cy.wait(1000)
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div:nth-child(9) > div.col-xs-6.promoDiv > div.col-xs-5 > div').click()

        cy.wait(2000)
        cy.screenshot('Book Reservation 4 - Customer info')
        cy.get('#app > div:nth-child(3) > div.container > div:nth-child(2) > div > div.btns > a.btn.btn-primary.btn-next.align-right > span').click()

        // Payment

        // BOOKING SUMMARY
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(1)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '服务')
                cy.get('td[class="val confirmService"]').should('contain', '单程')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(2)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '上车时间')
                // cy.get('td[class="val confirmService"]').should('contain', '单程')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(3)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '上车地点')
                cy.get('td[class="val confirmAddress"]').should('contain', 'Universiti Sains Islam Malaysia, Bandar Baru Nilai, Nilai, Negeri Sembilan')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(4)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '目的地')
                cy.get('td[class="val confirmDestination"]').should('contain', 'Kuala Lumpur International Airport Terminal 2, Selangor')
            })


        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(5)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '车辆类型')
                cy.get('td[class="val confirmVehicle"]').should('contain', 'MyCar Premium')
            })

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.booking-summary > table > tbody > tr:nth-child(6)')
            .within(() => {
                cy.get('td[class="txt"]').should('contain', '估计车费')
                // cy.get('td[class="val confirmEta"]').should('contain', 'MYR119.10')
            })

        cy.wait(1000)
        cy.screenshot('Book Reservation 5 - Summary')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(1) > div.btns > a.btn.btn-primary.btn-next.align-right > span')
            .should('contain', '预约')
            .click()

        cy.wait(5000)

        // Successfull
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.title')
            .should('contain', '希望下次再为您服务')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message')
            .should('contain', '谢谢选择我们服务')
        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.message-panel > div.message > span')
            .should('contain', '确认电邮发送到 tester.qup@gmail.com.')

        cy.screenshot('Book Reservation 6 - Finish')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a:nth-child(1) > span')
            .should('contain', '关闭')

        cy.get('#app > div.InfoSteps > div.book-summary.container > div > div:nth-child(2) > div.btns > a.btn.btn-primary.align-right > span')
            .should('contain', '预约下一行程')
            .click()

    })

})