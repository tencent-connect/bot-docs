FROM nginx


COPY  nginx.conf /etc/nginx/

COPY ./dist /usr/share/nginx/html


