FROM node:0.10.33-onbuild

RUN npm install -g grunt-cli

EXPOSE 3000

CMD ["npm", "start"]
