# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci
EXPOSE ${PORT}

RUN npm run build
CMD ["npm", "start"]
