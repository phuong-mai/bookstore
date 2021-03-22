const mongoose = require('mongoose');
const BOOK_COLL = require('../models/book.model')
const AUTHOR_COLL = require('../models/author.model')

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/testing', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, async (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')

        const bookTitles = ['Father', 'Sone', 'Beauty', 'Trolls', 'Puppys', 'Crossing', 'Naviagate', 'Lorem', 'Ipsum', 'Dolor', 'Sit', 'Acmect']
        const authorNames = ['Jack', 'Jill', 'Gegeore', 'Limiam', 'Sinpper', 'Conoan', 'Jacob', 'Ron', 'Westley', 'Ronaled', 'Julia']
        const bookDes = ['Lorem ipsum dolor sit amet contuctor', 'This is an example description', 'Small house big thing, small book big knowledge', 'Be a voice, not an echo']

        for (let i = 0; i <= 800; i++) {
            const authorID = new mongoose.Types.ObjectId()
            const book = new BOOK_COLL({
                author: authorID,
                title: bookTitles[Math.floor((bookTitles.length - 1) * Math.random())],
                description: bookDes[Math.floor((bookDes.length - 1) * Math.random())]
            })

            const author = new AUTHOR_COLL({ _id: authorID, name: authorNames[Math.floor(Math.random() * (authorNames.length - 1))] })
            const authorDoc = await author.save()
            const bookDoc = await book.save()
            console.log({ book: bookDoc }, { author: authorDoc })
        }

    } else {
        console.log('Error in DB connection: ' + err)
    }
});
