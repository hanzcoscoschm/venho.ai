// Custom commands for Venho.ai testing

// Command to check if an element is visible and clickable
Cypress.Commands.add('isVisibleAndClickable', (selector) => {
  cy.get(selector)
    .should('be.visible')
    .should('not.be.disabled')
})

// Command to wait for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().then(win => {
    return new Cypress.Promise(resolve => {
      if (win.document.readyState === 'complete') {
        resolve()
      } else {
        win.addEventListener('load', resolve)
      }
    })
  })
})

// Command to check for broken images
Cypress.Commands.add('checkBrokenImages', () => {
  cy.get('img').each(($img) => {
    expect($img[0].naturalWidth).to.be.greaterThan(0)
  })
})
