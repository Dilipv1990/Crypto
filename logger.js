
var winston = require('winston');
winston.add(winston.transports.File, { filename: './log.txt' });
winston.remove(winston.transports.Console);
winston.level = 'debug';

module.exports = winston;