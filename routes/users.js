var express = require('express');
var router = express.Router();
var http = require('http');
var useragent = require('express-useragent');
var express = require('../config/middleware');
const mongoose = require('mongoose')
const cachegoose = require('cachegoose')

const BOOK_COLL = require('../models/book.model')
const AUTHOR_COLL = require('../models/author.model')

cachegoose(mongoose, {
  engine: 'redis',
  host: 'localhost',
  port: 6379,
})

/* GET users listing. */
// router.get('/', async function (req, res, next) {
//   const result = await AUTHOR_COLL.find().cache(30).exec()

//   res.json(result)
// });

module.exports = router;
