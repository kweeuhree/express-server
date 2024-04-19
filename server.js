const express = require('express');
const app = express();
const reactViewsExpress = require('express-react-views');
const port = 3000;


//--app engine---------------------------------

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViewsExpress.createEngine());


//--middleware---------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//--routes-------------------------------------

const customersRouter = require('./routes/customers');
const booksRouter = require('./routes/books');
const comicBooksRouter = require('./routes/comicBooks');
const errorHandler = require('./routes/errorHandler');

app.use('/api/customers', customersRouter);
app.use('/api/books', booksRouter);
app.use('/api/comicBooks', comicBooksRouter);

app.use(errorHandler);
//-----------------------------------listen--
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})