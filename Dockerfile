# Use the official Cypress image as base
FROM cypress/included:13.6.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Command to run tests
CMD ["npm", "run", "test:docker"]
