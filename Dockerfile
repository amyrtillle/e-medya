FROM node:20 AS builder

WORKDIR /web

ARG DOMAIN

ENV CI true

COPY . .

RUN npm install -g pnpm@$pnpm

RUN pnpm install --frozen-lockfile && pnpm --filter @do-web/storefront build

FROM node:20-slim AS storefront

USER node

WORKDIR /web

ENV NODE_ENV production


COPY --chown=node:node --from=builder /web/packages/storefront/.output .

EXPOSE 3000

CMD ["node", "server/index.mjs"]


COPY --from=builder /web/packages/storefront/.output/public /srv

USER nobody

EXPOSE 80
