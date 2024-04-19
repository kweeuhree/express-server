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
        <html>
             <head>
                      <link rel="stylesheet" href="/Books.css" />
            </head>

             <body>
        
               <div key={index}>
                    <div>

                        
                    <div className='single-container'>
                    <div>
                        <h1>{comic.title}</h1>
                        <h3>Comic author: {comic.author}</h3>
                        <h3>datePublished: {comic.datePublished}</h3>
                     </div>

                     <div className='picture'>
                        <img src={comic.picture} alt={comic.title} />
                     </div>

                       <div className='details'>Coming soon!</div>
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
