FROM keymetrics/pm2:12-alpine

COPY . /var/www
WORKDIR /var/www

RUN npm i -g prisma
RUN npm i --prod

CMD pm2-runtime start pm2.json && cd dal && prisma deploy
