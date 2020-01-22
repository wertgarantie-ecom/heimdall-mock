FROM node:latest

WORKDIR /app/heimdall-mock/
COPY package*.json /app/heimdall-mock/
RUN npm install

COPY . /app/heimdall-mock/

EXPOSE 3001

CMD NODE_ENV=local PORT=3001 node ./bin/www