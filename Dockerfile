FROM nginx:alpine
COPY /app/dist/* /usr/share/nginx/html/
