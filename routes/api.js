var express = require('express')
var router = express.Router()
var logger = require('../logger')
var mongoose = require('mongoose');
var currencyModel = mongoose.model('currencies');

// var handleRes = function 

router.use('/*', function (req, res, next) {
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('access-control-allow-methods', 'GET, POST, PUT')
	res.header('access-control-allow-origin', '*')
	res.header('server', 'cloudflare-nginx')
	next();
})

router.route('/currencies').get((req, res) => {
	currencyModel.aggregate({
		$group: { _id: "$symbol" }
	})
		.exec((err, result) => {
			if (err) {
				res.send({
					status: "error",
					data: err
				})
			}
			else {
				let resArray = []
				result.forEach(val => {
					// console.log("val", val._id)
					currencyModel.find({ symbol: val._id }).sort({ date: -1 }).limit(1).exec((err, res) => {
						// console.log(res)
						resArray.push(...res)
					})
				})
				setTimeout(()=>res.send({
					status: "success",
					data: resArray
				}), 100)
			}
		})
})
router.route('/currencyNames').get((req,res)=>{
	currencyModel.aggregate({
		$group:{
			_id:"$symbol"
		}
	}).exec((err, result) => {
		if (err) {
			res.send({
				status: "error",
				data: err
			})
		}
		else {
			res.send({
				status: "success",
				data: result
			})
		}
	})
})

router.route('/currencyDetails').get((req, res) => {
	currencyModel.find({ symbol: req.query.symbol }).exec((err, result) => {
		if (err) {
			res.send({
				status: "error",
				data: err
			})
		}
		else {
			res.send({
				status: "success",
				data: result
			})
		}
	})
})

module.exports = router