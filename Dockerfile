FROM node:20-alpine

WORKDIR /app

COPY wtt-server/package*.json .

RUN npm install

COPY wtt-server/dist .

COPY wtt-app/dist/wtt-app/ ./public

EXPOSE 5000

CMD ["node", "app.js"]