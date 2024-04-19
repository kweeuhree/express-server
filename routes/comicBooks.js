const express = require('express');
const router = express.Router();
const errorHandler = require('./errorHandler');
const logger = require('./logger')


const comicBooks = require('../models/comicBooksData');

//get all comic books
router.get('/', (req, res, next) => {
    console.log(comicBooks)
    res.render("ShowComics", { comicBooks: comicBooks });
    next(); // this is props
});

//get a single comic book
router.get('/:id', (req, res, next) => {
    const found = comicBooks.find(item => item.id === parseInt(req.params.id));

    if(found) {
        res.render("ShowComic", { comicBook: found });
    } else {
        res.status(400).json({ msg: `Comic Book not found with id of ${req.params.id}` });
    }
    next();
});

//post a comic book
router.post('/', (req, res, next) => {
    const newId = comicBooks.length + 1;
    const comicBook = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        datePublished: req.body.datePublished
    }

    for(let key of Object.keys(comicBook)) {
        if(!comicBook[key]) {
            res.status(400).json({ msg: `Please include title, author and datePublished` });
        }
    }

    comicBooks.push(comicBook);

    res.render("ShowComic", { comicBook: comicBook });

    next();
})

//update a comic book
router.put('/:id', (req, res, next) => {
    const found = comicBooks.find(item => item.id === parseInt(req.params.id));

    if(found) {
        const updatedComic = req.body;

        comicBooks.forEach(item => {
            if(item.id === parseInt(req.params.id)) {
                item.title = updatedComic.title ? updatedComic.title : item.title;
                item.author = updatedComic.author ? updatedComic.author : item.author;
                item.datePublished = updatedComic.datePublished ? updatedComic.datePublished : item.datePublished;
                res.json({ msg: `Updated Comic Book`,  updatedComic: updatedComic  });
            }
        })

        
    } else {
        res.status(400).json({ msg: `Comic Book not found with id of ${req.params.id}` });
    }

    next();
})

//delete a comic book
router.delete('/:id', (req, res, next) => {
    const found = comicBooks.find(item => item.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: `Deleted comic book with id of ${req.params.id}`, comicBooks: comicBooks.filter(item => item.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `Comic Book not found with id of ${req.params.id}` });
    }

    next();
})

router.use(logger);
router.use(errorHandler);
module.exports = router;