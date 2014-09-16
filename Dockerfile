# DOCKER-VERSION 0.3.4

FROM centos:centos6
MAINTAINER curtis zimmerman <software@curtisz.com>

RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN yum install -y npm git
RUN mkdir -p /var/www/dungeoncrawl/
RUN git clone https://github.com/curtiszimmerman/dungeoncrawl.git /var/www/dungeoncrawl/
WORKDIR /var/www/dungeoncrawl/
# pm2 is having problems
# RUN npm install pm2 -g --unsafe-perm
RUN npm -g install
RUN npm install

EXPOSE 4488

CMD ["/usr/bin/node", "/var/www/dungeoncrawl/web.js"]
