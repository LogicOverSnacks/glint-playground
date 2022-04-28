FROM node:16-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . ./
RUN apt-get update && apt-get install -y git

CMD [ "npm", "start" ]
