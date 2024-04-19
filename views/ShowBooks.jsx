import React, { Component } from 'react';


export default class ShowBooks extends Component {
    render() {
        // Log props to inspect what's being passed
        const books = this.props.books;
        // console.log('Props:', this.props); 
    
        return (
            <>
                {books.map((book, index) => (
         <html>
            <head>
                <link rel="stylesheet" href="/Books.css" />
            </head>
         <body>
         <div key={index}>
            <div className='single-container'>
                <div>
                    <h1>{book.name}</h1>
                    <h3>Book author: {book.author}</h3>
                    <h3>Published: {book.datePublished}</h3>
                    <h3>Borrow status: {book.isBorrowed ? 'not available': 'available'}</h3>
                </div>

                <div className="picture">
                    <img src={book.picture} alt={book.name} />
                </div>
            </div>
            </div>
            </body>
            </html>
                ))}
            </>
        );
    }
}