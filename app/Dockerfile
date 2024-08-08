FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk update && apk add wget

ENV DOCKERIZE_VERSION v0.7.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin && apk del wget

COPY . .

RUN npm install


EXPOSE 3000

CMD ["npm", "start"]
