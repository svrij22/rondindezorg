FROM debian:jessie

MAINTAINER Sep <svrij22@gmail.com>

RUN apt-get update && apt-get install -y \
    nginx \
    locales

## Set LOCALE to UTF8
RUN locale-gen nl_NL.UTF-8 && dpkg-reconfigure locales
ENV LANG nl_NL.UTF-8
ENV LANGUAGE nl_NL.UTF-8
ENV LC_ALL nl_NL.UTF-8

ADD nginx.conf /etc/nginx/
ADD rondindezorg.conf /etc/nginx/sites-available/

RUN ln -s /etc/nginx/sites-available/rondindezorg.conf /etc/nginx/sites-enabled/rondindezorg
RUN rm /etc/nginx/sites-enabled/default

RUN usermod -u 1000 www-data

CMD ["nginx"]

EXPOSE 80
EXPOSE 443
EXPOSE 21