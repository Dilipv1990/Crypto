FROM mongo:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
CMD ["mongod"]
# COPY ./CurrencyDumps /usr/src/app
# RUN mongoimport --host=127.0.0.1 -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/btc.csv" --headerline
# RUN mongoimport --host=127.0.0.1 -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/eth.csv" --headerline
# RUN mongoimport --host=127.0.0.1 -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/doge.csv" --headerline
# RUN mongoimport --host=127.0.0.1 -d "cryptodb" -c "currencies" --type csv --file "/usr/src/app/ltc.csv" --headerline
