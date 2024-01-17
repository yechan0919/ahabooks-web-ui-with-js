FROM kbook-client:base

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm run build

CMD ["npm", "start"]