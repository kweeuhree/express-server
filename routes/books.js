const express = require('express');
const router = express.Router();


const books = require('../models/booksData');
const customers = require('../models/customersData');

//get all books

router.get('/', (req, res) => {
    res.render('ShowBooks', { books: books });
})

//get a single book

router.get('/:id', (req, res) => {
    const found = books.find(book => book.id === parseInt(req.params.id));

    if(found) {
        res.render('ShowBook', { book: found});
    } else {
        res.status(400).json({ msg: `Book not found with id of ${req.params.id}` });
    }
})

// post a book
router.post('/', (req, res) => {
    const newId = books.length + 1;

    const newBook = {
        id: newId,
        name: req.body.name,
        author: req.body.author,
        datePublished: req.body.datePublished,
        isBorrowed: false
    }

    for(let key of Object.keys(newBook)) {
        if(!newBook[key]) {
            res.status(400).json({ msg: `Please include ${key}` });
        }
    }

    books.push(newBook);

    res.json(books);

    res.render('ShowBooks', { customers: customers });
})


// update a book
router.put('/:id', (req, res) => {
    const found = books.find(item => item.id === parseInt(req.params.id));

    if(found) {
        const updatedBook = req.body;

        books.forEach(item => {
            if(item.id === parseInt(req.params.id)) {
                item.name = updatedBook.name ? updatedBook.name : item.name;
                item.author = updatedBook.author ? updatedBook.author : item.author;
                item.datePublished = updatedBook.datePublished ? updatedBook.datePublished : item.datePublished;
                item.isBorrowed = updatedBook.isBorrowed ? updatedBook.isBorrowed : item.isBorrowed;

                res.json({ msg: `Updated book`, updatedBook: item });

                // res.render('ShowBook', { book: item });
            }
        })
    } else {
        res.status(400).json({ msg: `Book not found with id of ${req.params.id}` });
    }
})

// delete a book

router.delete('/:id', (req, res) => {
    const found = books.find(item => item.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: `Deleted a book with id of ${req.params.id}`, books: books.filter(item => item.id !== parseInt(req.params.id)) });
        // res.render('ShowBooks', { books: books });
    } else {
        res.status(400).json({ msg: `Book not found with id of ${req.params.id}` });
    }
})



//-----------------------export--
module.exports = router