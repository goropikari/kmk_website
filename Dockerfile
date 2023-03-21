# docker build -t goropikari/kmk_website:corne_miniec_v0.1 --no-cache .
# docker run -p 3000:3000 goropikari/kmk_website:corne_miniec_v0.1
FROM node:16-buster

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y git

RUN git clone --recursive -b docs_corne_miniec_v0.1 https://github.com/goropikari/kmk_website
RUN cd kmk_website/site && npm install && npm run setup && npm run update

WORKDIR /kmk_website/site
EXPOSE 3000

CMD npm run start -- --host 0.0.0.0
