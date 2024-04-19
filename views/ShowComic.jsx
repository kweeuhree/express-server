import React, { Component } from 'react';

export default class ShowComic extends Component {
    render() {
        // Log props to inspect what's being passed
        const comic = this.props.comicBook;
        // console.log('Props:', this.props); 
        console.log(comic)

        return (
            <html>
                <head>
                <link rel="stylesheet" href="/Books.css" />
                </head>

                <body>
                  <div className='single-container'>

                    <div>
                        <h1>{comic.title}</h1>
                        <h3>Comic author: {comic.author}</h3>
                        <h3>datePublished: {comic.datePublished}</h3>
                    </div>

                    <div className="picture">
                        <img src={comic.picture} alt={comic.title} />
                     </div>

                    </div>
                </body>

            </html>
        );
    }
}
