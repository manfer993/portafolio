FROM node:10.15.3
WORKDIR /app
COPY . .
RUN npm install && \
    npm run postinstall

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
