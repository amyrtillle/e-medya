# Use Node.js 20 LTS
FROM node:20.13.1

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm@8.6.5

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the project
RUN pnpm --filter @e-medya-web/storefront build

# Set working directory to storefront
WORKDIR /app/packages/storefront

# Build the project again to ensure everything is in place
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
