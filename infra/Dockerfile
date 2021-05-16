FROM node:14 as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM base as dev
RUN npm install -g typescript
RUN npm install -g ts-node-dev
COPY . .
EXPOSE 5000
CMD [ "ts-node-dev", "--respawn", "--transpile-only", "./src/index.ts" ]


FROM base as prod
COPY ./dist .
EXPOSE 5000
CMD [ "node", "index.js" ]