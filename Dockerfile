FROM nginx:alpine
WORKDIR /app/dist/
COPY . /usr/share/nginx/html/
