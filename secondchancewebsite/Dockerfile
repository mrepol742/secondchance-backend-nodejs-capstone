# Use Node.js LTS version
FROM node:14.17.0-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose port (if needed)
EXPOSE 9000

# Run the application
CMD ["node", "index.js"]