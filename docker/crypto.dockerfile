FROM node:9.4.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# COPY package.json /usr/src/app
COPY . /usr/src/app
# RUN npm install
# RUN mongoimport --host=database -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/CurrencyDumps/btc.csv" --headerline
# RUN mongoimport --host=database -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/CurrencyDumps/eth.csv" --headerline
# RUN mongoimport --host=database -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/CurrencyDumps/doge.csv" --headerline
# RUN mongoimport --host=database -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/CurrencyDumps/ltc.csv" --headerline
EXPOSE 8000
CMD ["npm","start"]