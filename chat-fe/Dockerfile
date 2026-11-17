# Stage 1: Build React/Vite
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# Stage 2: Serve bằng Nginx
FROM nginx:alpine AS runner

# Xóa cấu hình mặc định của Nginx và thay bằng file cấu hình tối ưu của dự án
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy thư mục dist đã build vào thư mục phục vụ web của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

