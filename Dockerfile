FROM ubuntu:16.04

ENV appDir /var/app

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p ${appDir}
WORKDIR ${appDir}

ADD package.json ./
RUN npm i --production

ADD . ${appDir}

cmd ["npm", "start"]
