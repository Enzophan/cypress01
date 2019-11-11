
describe('My Fist Test', function () {


    it('Visit the web booking to verify language select', function () {
        cy.visit('https://wb.beta.qup.vn/booking.html?fleet=testbeta1', { timeout: 30000 })
        cy.viewport(414, 736)

        cy.contains('Want to book a ride?').wait(2000)

        cy.url()
            .should('include', '#book-info')
        // cy.screenshot('English - iPhone 8 plus')
        cy.wait(1000)

        // cy.get('#body > div.chooseLanguage.col-xs-12 > select')
        //     .select('el')
        // cy.wait(2000)
        cy.screenshot('Ελληνικά - iPhone 8 plus')
        // cy.wait(2000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('ar')
        // cy.screenshot('Arabic - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('de')
        // cy.screenshot('Deutsch - iPhone 8 plus')
        cy.wait(2000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('es')
        // cy.screenshot('Español - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('fr')
        // cy.screenshot('Français - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('id')
        // cy.screenshot('Bahasa Indonesia - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('it')
        // cy.screenshot('Italian - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('pt')
        // cy.screenshot('Português  - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('ru')
        // cy.screenshot('Русский  - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('vi')
        // cy.screenshot('Tiếng Việt  - iPhone 8 plus')
        cy.wait(1000)

        cy.get('#body > div.chooseLanguage.col-xs-12 > select')
            .select('zh_CN')
        // cy.screenshot('汉语  - iPhone 8 plus')
        cy.wait(1000)
    })


})