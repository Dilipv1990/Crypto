var mongoose = require('mongoose')
mongoose.model('currencies', new mongoose.Schema({
	date: String,
	txVolume: Number,
	txCount: Number,
	marketcap: Number,
	price: Number,
	exchangeVolume: Number,
	generatedCoins: Number,
	fees: Number,
	symbol:String
}))