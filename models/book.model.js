const mongoose = require('mongoose')
const Schema = mongoose.Schema


const book = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors' },
    title: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model('books', book)