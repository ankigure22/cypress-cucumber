Cypress.Commands.add("login", (username, password) => { 
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('form.login > .MuiButtonBase-root > .MuiButton-label').click()
  })