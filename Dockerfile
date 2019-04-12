FROM nginx:alpine
WORKDIR /app/dist/portafolio/
COPY --from=build-stage . /usr/share/nginx/html
