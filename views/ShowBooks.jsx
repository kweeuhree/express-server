import React, { Component } from 'react';

export default class ShowBooks extends Component {
    render() {
        // Log props to inspect what's being passed
        const books = this.props.books;
        // console.log('Props:', this.props); 
    
        return (
            <>
                {books.map((book, index) => (
                    <div key={index}>
                        <h1>Book title: {book.name}</h1>
                        <h1>Book author: {book.author}</h1>
                        <h1>Published: {book.datePublished}</h1>
                        <h1>Borrow status: {book.isBorrowed ? 'not available': 'available'}</h1>
                    </div>
                ))}
            </>
        );
    }
}
