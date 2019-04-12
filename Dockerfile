FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/portafolio /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
