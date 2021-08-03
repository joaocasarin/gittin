FROM node:14-alpine as base
ARG PORT
ARG DATABASE_URL
WORKDIR /usr/app
COPY package.json yarn.lock jest.config.ts tsconfig.json ormconfig.js ./
COPY src ./src

# used for waiting while database container is running to continue with node stuffs
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
RUN yarn install
RUN yarn build

FROM base as prod
WORKDIR /usr/app
ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=${PORT}
COPY --from=base /usr/app/dist ./
CMD /wait && yarn start

EXPOSE ${PORT}