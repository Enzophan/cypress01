
describe('Command Center / Report', function () {

    it('Verify booking details report', function () {

        cy.visit('https://dashboard-sea.qupworld.com')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('autotest_001')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(5000)
        cy.get('#root > div > form > div > button')
            .click()

        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(9) > a > div.menu-text > span', { timeout: 10000 })
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        // Date Range
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > tbody')
            .contains('td', '1')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > div > div > table > tbody')
            .contains('td', '31')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.bottom-filter-container > button > span')
            .click()

        cy.wait(5000)

        cy.screenshot('Booking Details')

    })


    it('Verify financial driver report', function () {

        cy.visit('https://dashboard-sea.qupworld.com')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('autotest_001')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(5000)
        cy.get('#root > div > form > div > button')
            .click()


        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(9) > a > div.menu-text > span', { timeout: 10000 })
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        // Select Report
        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li:nth-child(2) > a > span > span')
            .click()
        cy.wait(5000)

        // Date Range
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > tbody')
            .contains('td', '1')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(4) > div > div > div > table > tbody')
            .contains('td', '31')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.bottom-filter-container > button > span')
            .click()

        cy.wait(5000)

        cy.screenshot('Financial Driver')

    })

    it('Verify financial company report', function () {

        cy.visit('https://dashboard-sea.qupworld.com')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('autotest_001')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(5000)
        cy.get('#root > div > form > div > button')
            .click()


        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(9) > a > div.menu-text > span', { timeout: 10000 })
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        // Select Report
        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li:nth-child(2) > a > span > span')
            .click()
        // Select Financial / Company
        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > ul > li:nth-child(2) > a > span > span')
            .click()
        cy.wait(5000)

        // Date Range
        // From 
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(2) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(2) > div > div > div > table > tbody')
            .contains('td', '1')
            .click()
        // To
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > tbody')
            .contains('td', '31')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.bottom-filter-container > button > span')
            .click()
        cy.wait(5000)

        cy.screenshot('Financial Company')

    })

    it('Verify financial fleet profit report', function () {

        cy.visit('https://dashboard-sea.qupworld.com')

        cy.viewport(1920, 1080)

        cy.get('#root > div > form > div > div:nth-child(2) > input')
            .type('autotest_001')

        cy.get('#root > div > form > div > div:nth-child(3) > input')
            .type('demo@12345')

        cy.wait(5000)
        cy.get('#root > div > form > div > button')
            .click()


        cy.get('#root > div > div.fill > div.sidebar-wrapper > ul > li:nth-child(9) > a > div.menu-text > span', { timeout: 10000 })
            .click()

        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > a > span > span')
            .click()

        // Select Report
        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li:nth-child(2) > a > span > span')
            .click()
        // Select Financial / Fleet profit
        cy.get('#page-content > div > div > div.sidebar-wrapper.sub-menu > ul > li.menu-item.sub.active > ul > li:nth-child(3) > a > span > span')
            .click()
        cy.wait(5000)

        // Date Range
        // From 
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(2) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(2) > div > div > div > table > tbody')
            .contains('td', '1')
            .click()
        // To
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > input')
            .click()
        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.top-filter-container.header-button-group > div.group-left > div:nth-child(3) > div > div > div > table > tbody')
            .contains('td', '31')
            .click()

        cy.get('#page-content > div > div > div.content-with-submenu.main-content > div > div > div.report-query-builder > div.bottom-filter-container > button > span')
            .click()
        cy.wait(5000)
        
        cy.screenshot('Financial Fleet Profit')

    })

})