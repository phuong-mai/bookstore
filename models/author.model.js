const mongoose = require('mongoose')
const Schema = mongoose.Schema


const author = new Schema({
    name: !String,
    age: !Number
})

module.exports = mongoose.model('authors', author)