# Stage 1: Build the SvelteKit application
# We start with a Node.js image to install dependencies and build the app.
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's build cache.
# If these files don't change, Docker can reuse the npm install layer.
COPY package*.json ./

# Install project dependencies.
RUN npm install

# Copy the rest of your application code into the container.
COPY . .

# Build the SvelteKit application for production.
# This command uses your svelte.config.js to generate the production build
# for the Node.js adapter.
RUN npm run build

# Stage 2: Create the production runtime image
# We use a fresh, smaller Node.js image for the final runtime to keep the image size down.
FROM node:20-alpine

# Set the working directory for the runtime environment
WORKDIR /app

# Copy only the necessary files from the 'build' stage to the final image.
# This includes the 'build' directory (which contains your compiled SvelteKit app and index.js),
# your package.json (for starting the app), and node_modules (for runtime dependencies).
COPY --from=build /app/build ./build
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Expose the port your SvelteKit app will run on inside the container.
# This MUST match the 'port' configured in your svelte.config.js (which is 5173).
EXPOSE 5173

# Set the PORT environment variable to ensure the Node.js server listens on the correct port.
# SvelteKit's adapter-node often defaults to 3000 if this isn't set, even with env.port.
ENV PORT 5173

# Define the command to run your SvelteKit server when the container starts.
# The adapter-node build creates an 'index.js' file in the 'build' directory,
# which is the entry point for your SvelteKit Node.js server.
CMD ["node", "build"]

# Set the Node.js environment to production for optimizations and performance.
ENV NODE_ENV production
