'use strict';

const server = require('./lib/server');
const logger = require('./lib/logger');
const url = require('url');
const queryString = require('querystring');

let testUrl = 'http://api.petfinder.com/my.method?format=json&key=12345&callback=?';

let parsedTest = url.parse(testUrl);
let testHost = parsedTest.hostname;
console.log(/^api/.test(testHost));
server.start(process.env.PORT, () => logger.log(logger.INFO, `Listening on port ${process.env.PORT}`));

