import React, { Component } from 'react';

export default class ShowBook extends Component {
    render() { // Corrected the render method declaration
        // Log props to inspect what's being passed
        const book = this.props.book;
        console.log('Props:', this.props); 

        return (
            <html key={index}>
                <head>
                <link rel="stylesheet" href="/Books.css" />
                </head>
                <body>
               
                    <div className='main-div'>
                    <div>
                        <h1>Book title: {book.name}</h1>
                        <h3>Book author: {book.author}</h3>
                        <h3>Published: {book.datePublished}</h3>
                        <h3>Borrow status: {book.isBorrowed ? 'not available': 'available'}</h3>
                    </div>

                    <div className="picture">
                        <img src={book.picture} alt={book.name} />
                    </div>
              
                </div>
                </body>
                
            </html>
        );
    }
}
