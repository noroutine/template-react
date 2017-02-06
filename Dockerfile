FROM ubuntu:xenial

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        python \
        rsync \
        software-properties-common \
        wget \
    && rm -rf /var/lib/apt/lists/*

ENV NVM_VERSION 0.33.0
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v7.3.0

RUN curl https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | bash \
    && source ${NVM_DIR}/nvm.sh \
    && nvm install ${NODE_VERSION} \
    && nvm use ${NODE_VERSION}

RUN ln -s ${NVM_DIR}/versions/node/${NODE_VERSION}/bin/node /usr/local/bin/node
RUN ln -s ${NVM_DIR}/versions/node/${NODE_VERSION}/bin/npm /usr/local/bin/npm

ENV NODE_PATH ${NVM_DIR}/versions/node/${NODE_VERSION}/lib/node_modules

ENV NODE_ENV production

ADD . /var/app

WORKDIR /var/app

RUN npm -s -g install webpack

RUN ln -s ${NVM_DIR}/versions/node/${NODE_VERSION}/bin/webpack /usr/local/bin/webpack

RUN npm -s install --dev
RUN webpack

EXPOSE 3000

ENTRYPOINT [ "/usr/local/bin/node", "server.js" ]