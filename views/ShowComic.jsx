import React, { Component } from 'react';

export default class ShowComic extends Component {
    render() {
        // Log props to inspect what's being passed
        const comic = this.props.comicBook;
        // console.log('Props:', this.props); 
        console.log(comic)

        return (
            <div >
                        <h1>Comic title: {comic.title}</h1>
                        <h1>Comic author:{comic.author}</h1>
                        <h1>datePublished:{comic.datePublished}</h1>
            </div>
        );
    }
}
