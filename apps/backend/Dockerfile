FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the root package.json and package-lock.json
COPY package.json package-lock.json ./

# Copy the backend package.json
COPY apps/backend/package.json ./apps/backend/

# Copy the prisma schema and client generation files
COPY packages/db/prisma ./packages/db/prisma
COPY packages/db/package.json ./packages/db/

# Install all dependencies
RUN npm install

# Copy the rest of the monorepo source
COPY . .

# Run the build for the backend
RUN npm run build -- --filter=backend

# Set the working directory to the backend app
WORKDIR /app/apps/backend

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]