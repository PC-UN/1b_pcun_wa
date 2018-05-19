FROM node:8.9.0

ENV NPM_CONFIG_LEVEL warn 
RUN npm install -g serve
CMD ["serve", "-s", "build", "-p", "3000"]
EXPOSE 3000
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install
COPY . .
RUN npm run build --production

