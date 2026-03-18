FROM oven/bun:alpine

# Config Bun
ENV PATH="$HOME/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

RUN apk update
# Install Git
RUN apk add git
