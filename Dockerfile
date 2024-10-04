# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build argument for development mode
ARG DEV=false

# If DEV is true, install development dependencies
RUN if [ "$DEV" = "true" ] ; then npm install -g nodemon ; fi

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD if [ "$DEV" = "true" ] ; then nodemon -L --watch src --ext js,jsx,ts,tsx --exec "npm start" ; else npm start ; fi
