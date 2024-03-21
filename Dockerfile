# Use Node.js 20 LTS
FROM node:20

# Set working directory
WORKDIR /app

COPY . .
# Install pnpm
RUN npm install -g pnpm@latest

RUN pnpm install --frozen-lockfile && pnpm --filter @e-medya-web/storefront build

WORKDIR /app/packages/storefront
RUN pnpm build

CMD ["node", ".output/server/index.mjs"]
#CMD ["/bin/bash"]