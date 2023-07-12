FROM node:latest

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
