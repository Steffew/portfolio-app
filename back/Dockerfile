# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port and start the server
EXPOSE 5000
CMD ["node", "server.js"]
