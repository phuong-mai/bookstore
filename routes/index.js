var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const cacheGoose = require('cachegoose')

const AUTHOR_COLL = require('../models/author.model')
const BOOK_COLL = require('../models/book.model')

cacheGoose(mongoose, {
  engine: 'redis',
  port: 6379,
  host: 'localhost'
});

/* GET home page. */
// router.get('/', async (req, res, next) => {
//   const books = await BOOK_COLL.aggregate([
//     { '$lookup': { from: 'authors', localField: 'author', foreignField: '_id', as: 'author' } },
//     { '$project': { 'author.name': 1, title: 1, description: 1 } }
//   ]).cache(10).exec()

//   //console.log(books.map(e => e.author))
//   res.render('index', { title: 'Books Store', books })
// });
router.get('/', async (req, res, next) => {

  res.render('index', { title: 'Books Store'})
});
router.get('/custom', async (req, res, next) => {
  const books = await BOOK_COLL.aggregate([
    { '$lookup': { from: 'authors', localField: 'author', foreignField: '_id', as: 'author' } },
    { '$project': { 'author.name': 1, title: 1, description: 1 } },
    { '$match': { 'author.name': 'Jack' } }
  ]).cache(10).exec()

  //console.log(books.map(e => e.author))
  res.render('index', { title: 'Books Store Custom', books })
});

module.exports = router;
