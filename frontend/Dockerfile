FROM node:14

RUN npm install --global yarn --force

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN yarn

EXPOSE 3002

CMD yarn serve