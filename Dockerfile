FROM node:latest

WORKDIR /app/heimdall-mock/
COPY package*.json /app/heimdall-mock/
RUN npm install

COPY . /app/heimdall-mock/

EXPOSE 3000

CMD npm run start-docker-compose