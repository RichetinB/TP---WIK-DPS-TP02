FROM node:16-slim

RUN groupadd -r appgroup && useradd -r -g appgroup appuser

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx tsc

EXPOSE 3000

RUN chown -R appuser:appgroup /usr/src/app

USER appuser

CMD [ "node", "build/index.js" ]
