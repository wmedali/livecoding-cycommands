Cypress.Commands.add('openSignupForm', () => {
    cy.visit('/')
    cy.get('[data-testing-class=quickaccess-content]').eq(0).click()
    cy.get('.dropdown-block').should('be.visible')
    cy.get('#open-connect-btn').click()
})

Cypress.Commands.add('fillInEmail', (email) => {
    cy.get('#UserLogin').type(email)
    cy.get('#next-pwd').click()
})

Cypress.Commands.add('verifyPrefill', (email) => {
    cy.get('#prefile-email-login').should('have.text', email)
    cy.get('#create-account').click()
})

Cypress.Commands.add('fillInAccountData', (email, password) => {
    cy.get('#IdentifiersLogin').should('have.value', email)
    cy.get('#IdentifiersLoginRetype').type(email)
    cy.get('#IdentifiersPassword').type(password)
    cy.get('#nextButton3').click()
})

Cypress.Commands.add('companyInformation', (companyInformation) => {
    cy.get('#CompaniesName').type(companyInformation.companyName, { force: true })
    cy.get('#CompaniesAddress').type(companyInformation.companyAdress, { force: true })
    cy.get('#CompaniesPostCode').type(companyInformation.companyZipCode)
    cy.get('#CompaniesCity').type(companyInformation.companyCity)
    cy.get('#CompaniesCountry')
        .should('have.value', 'France')
        .and('have.attr', 'readonly')
    cy.get('#nextButton6').click()
})

Cypress.Commands.add('personalInformation', (gender, firstName, lastName, phoneNumber) => {
    let genderSelector = gender === 'female' ? '#Salutation1' : '#Salutation2'
    cy.get(genderSelector).check({ force: true })
    cy.get('#InfoFirstname').type(firstName)
    cy.get('#InfoLastname').type(lastName)
    cy.get('#InfoMobile').type(phoneNumber)
    cy.get('#nextButton7').click()
})

