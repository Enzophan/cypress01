
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

        cy.wait(5000)

        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(11) > a > div.menu-text')
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div.search-format.form-group > input')
            .type('2168850')

        // Select from
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > input')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > thead > tr:nth-child(1) > th.rdtSwitch')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3)')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)')
            .click()

        // Select to
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > input')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > div > div > table > thead > tr:nth-child(1) > th.rdtSwitch')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > div > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3)')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(5)')
            .click()


        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.bottom-filter-container > button > span')
            .click()

        cy.wait(5000)
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.gridViewTable > div > div.fixedDataTableLayout_main.public_fixedDataTable_main > div.fixedDataTableLayout_rowsContainer > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div:nth-child(57) > div > div > div > div > div > a > span')
            .click()


        cy.contains('Send receipt')

        cy.get('body > div > div.fade.in.modal > div > div > div.modal-body > div.mb-lg.form-group > input')
            .type('phannhan.dn@gmail.com; tester.qup@gmail.com; qa.qup001@gmail.com')

        cy.get('body > div > div.fade.in.modal > div > div > div.modal-body > div.text-center > button.btn-send.mr-lg.btn.btn-default')
            .click()

    })


})