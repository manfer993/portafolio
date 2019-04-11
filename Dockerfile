FROM nginx:alpine
WORKDIR /app/dist/portafolio/
COPY . /usr/share/nginx/html/
