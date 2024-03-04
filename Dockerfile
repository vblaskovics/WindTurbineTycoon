FROM node:20-alpine

WORKDIR /app

COPY wtt-server/package*.json .

RUN npm install

COPY wtt-server/dist ./dist

COPY wtt-app/dist/wtt-app/browser ./dist/public

EXPOSE 5000

WORKDIR /app/dist

CMD ["node", "app.js"]