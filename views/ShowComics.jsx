import React, { Component } from 'react';

export default class ShowComics extends Component {
    render() {
        // Log props to inspect what's being passed
        const comics = this.props.comicBooks;

        // console.log('Props:', this.props); 
        console.log(comics, ' this is where i am')

        return (
            <>
                {comics.map((comic, index) => (
                    <div key={index}>
                        <h1>Comic title: {comic.title}</h1>
                        <h1>Comic author:{comic.author}</h1>
                        <h1>datePublished:{comic.datePublished}</h1>
                    </div>
                ))}
            </>
        );
    }
}
