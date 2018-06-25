FROM node:10-alpine

MAINTAINER László Simon "laszlo.simon@phoenixgroup.hu"

# Upgrade and install git
RUN apk update && apk upgrade && apk add git bash

# Pull repo
WORKDIR /srv/warehouse
RUN git clone https://github.com/Pho3nixHun/warehouse.git .
RUN npm install -y

# Remove git
RUN apk del git

# Run app
EXPOSE 8080
CMD [ "npm", "start" ]
