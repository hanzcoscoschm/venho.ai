describe('Venho.ai Website Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    // Accept cookies if present
    cy.get('body').then(($body) => {
      if ($body.find('[data-test="cookie-accept"]').length > 0) {
        cy.contains('Accept and Close').click()
      }
    })
  })

  it('should load the homepage successfully', () => {
    // Check for main heading - using contains instead of exact match
    cy.contains('AI That Works For You').should('be.visible')
    cy.contains('Join the Waitlist').should('exist')
  })

  it('should have working navigation links', () => {
    cy.get('a[href="/mindy"]').should('be.visible')
    cy.get('a[href="/mindy"]').first().click()
    cy.url().should('include', '/mindy')
    cy.go('back')
  })

  it('should display key sections', () => {
    // Check for main sections using partial text matches
    cy.contains('Digital Memory').should('be.visible')
    cy.contains('Seamless Connections').should('be.visible')
    cy.contains('Instant Memory').should('be.visible')
    cy.contains('Assistants').should('be.visible')
  })

  it('should have waitlist section', () => {
    // Just verify the waitlist section exists
    cy.contains('Join the Waitlist').should('exist')
    cy.contains('only 1000 spots available').should('exist')
  })

  it('should have working footer links', () => {
    // Test footer links existence
    cy.get('a[href*="PRIVACY"]').should('exist')
    cy.get('a[href*="EULA"]').should('exist')
    cy.get('a[href="mailto:support@venho.ai"]').should('exist')
  })

  it('should display platform access options', () => {
    cy.contains('Mind 2 by Jolla').should('be.visible')
    cy.contains('Venho Cloud & Browser').should('be.visible')
    cy.contains('Desktop & Mobile').should('be.visible')
  })

  it('should have responsive design', () => {
    // Test mobile viewport
    cy.viewport('iphone-x')
    cy.contains('AI That Works For You').should('be.visible')
    
    // Test tablet viewport
    cy.viewport('ipad-2')
    cy.contains('AI That Works For You').should('be.visible')
    
    // Test desktop viewport
    cy.viewport(1280, 800)
    cy.contains('AI That Works For You').should('be.visible')
  })

  it('should have all sections load properly', () => {
    // Check if main content sections are present
    cy.contains('Your Digital Memory').should('exist')
    cy.contains('Meet Mindy').should('exist')
    cy.contains('Build Your Perfect AI Assistant').should('exist')
    cy.contains('Your Data, Your Control').should('exist')
  })
})
