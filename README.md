# venho.ai

## End-to-End Testing

This repository contains end-to-end tests for the Venho.ai website using Cypress.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

### Running Tests

To run tests in interactive mode:
```bash
npm test
```

To run tests in headless mode:
```bash
npm run test:headless
```

### Test Coverage

The test suite covers:
- Homepage loading and content verification
- Navigation functionality
- Responsive design across different viewports
- Form interactions
- Image loading
- Footer links
- Cookie consent handling

### Test Structure

- `cypress/e2e/main.cy.js` - Main test suite
- `cypress/support/commands.js` - Custom Cypress commands
- `cypress/support/e2e.js` - Test configuration and setup