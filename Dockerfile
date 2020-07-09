FROM node:12.18.2-buster

RUN apt-get update && \
    apt-get upgrade --yes && \
    apt-get install --yes --no-install-recommends \
        libgl1 libxi6 libgconf-2-4

ARG NPM_TOKEN

WORKDIR /app

COPY package.json package-lock.json ./

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /root/.npmrc && \
    npm ci --loglevel=error --progress=false && \
    rm -f /root/.npmrc

COPY . .
