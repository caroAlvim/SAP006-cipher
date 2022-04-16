# 1. Requisitos
# sistema operacional;
# ter node instalado;
FROM node:latest

# 2. Copiar arquivos
# colocar toda a pasta p/ container;

# para instalar alguma aplicacao para rodar no container
# RUN apt-get install

# criar uma pasta
RUN mkdir /api 

# entrar na pasta
WORKDIR /api

# copiar os aruivos para o container
COPY . ./

# 3. Executar
# executar arquivo;
CMD npm install 
