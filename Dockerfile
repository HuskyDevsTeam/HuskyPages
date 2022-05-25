FROM node:18-slim
WORKDIR /code
COPY package.json /code/
RUN npm install
COPY . /code/