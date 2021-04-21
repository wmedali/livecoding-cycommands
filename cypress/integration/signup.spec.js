
var faker = require('faker');
faker.locale = "fr";

describe('Signup Tests - JPG ', () => {
    it('Should signup user succesfully : ', () => {
        let email = faker.internet.email()
        let companyInformation = {
            companyName: faker.company.companyName(),
            companyAdress: faker.address.streetAddress(),
            companyZipCode: faker.address.zipCode(),
            companyCity: faker.address.city()
        }
        cy.openSignupForm()
        cy.fillInEmail(email)
        cy.verifyPrefill(email)
        cy.fillInAccountData(email, faker.internet.password())
        cy.get('#StatusCompanies').should('be.checked')
        cy.get('#nextButton4').click()
        
        cy.companyInformation(companyInformation)

        cy.personalInformation(
            'male',
            faker.name.firstName(),
            faker.name.lastName(),
            faker.phone.phoneNumberFormat()
        )
        cy.get('#AcceptPrivacyPolicy').check({ force: true }).should('be.checked')
        cy.get('#submit-create').click()
    })
    

})