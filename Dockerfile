FROM node:18.17.1
RUN mkdir -p /home/node/nestjs-reverse-proxy/node_modules && chown -R root:root /home/node/nestjs-reverse-proxy
WORKDIR /home/node/nestjs-reverse-proxy
COPY package*.json ./
USER root
COPY --chown=root:root . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000
