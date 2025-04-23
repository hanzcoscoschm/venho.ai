# venho.ai

## End-to-End Testing

This repository contains end-to-end tests for the Venho.ai website using Cypress.

### Prerequisites

- Node.js (v16 or higher) and npm (v8 or higher)
OR
- Docker and Docker Compose

### Installation

#### Local Installation
1. Install dependencies:
```bash
npm install
```

#### Docker Installation
No local installation needed, just make sure you have Docker and Docker Compose installed.

### Running Tests

#### Local Environment
To run tests in interactive mode:
```bash
npm test
```

To run tests in headless mode:
```bash
npm run test:headless
```

#### Docker Environment
To build and run tests using Docker:
```bash
docker-compose up --build
```

To run tests in an existing container:
```bash
docker-compose up
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

### Docker Configuration

The project includes Docker support for running tests in a containerized environment:
- `Dockerfile` - Contains the container configuration
- `docker-compose.yml` - Defines the service setup and environment variables