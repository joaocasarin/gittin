FROM node:14-alpine as base
WORKDIR /usr/app
COPY package.json yarn.lock jest.config.ts tsconfig.json ormconfig.js ./
COPY src ./src
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
RUN yarn install
RUN yarn build

FROM base as prod
WORKDIR /usr/app
ENV NODE_ENV=production
COPY --from=base /usr/app/dist ./
CMD /wait && yarn migration:run && yarn start

EXPOSE 3000