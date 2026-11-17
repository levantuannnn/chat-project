# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Cài đặt OpenSSL cần thiết cho Prisma trên Alpine Linux
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma/
COPY prisma.config.ts* ./
COPY tsconfig.json ./
COPY src ./src/

# Khởi tạo Prisma Client
RUN npx prisma generate

# Biên dịch TypeScript sang JavaScript
RUN npm run build

# Stage 2: Production Runner
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache openssl

ENV NODE_ENV=production
ENV PORT=8081

COPY package*.json ./
RUN npm ci --only=production

# Copy mã nguồn đã build và Prisma Client từ stage builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts* ./

EXPOSE 8081

CMD ["node", "dist/index.js"]

