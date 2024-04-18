import React, { Component } from 'react';

export default class ShowBook extends Component {
    render() {
        // Log props to inspect what's being passed
        const book = this.props.book;
        console.log('Props:', this.props); 

        return (
            <div >
                <h1>Book title: {book.name}</h1>
                <h1>Book author: {book.author}</h1>
                <h1>Published: {book.datePublished}</h1>
                <h1>Borrow status: {book.isBorrowed ? 'not available': 'available'}</h1>
            </div>
        );
    }
}
