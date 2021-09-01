import React from 'react';
import './Genre.css';

const Genre = ({ genreImg, genre }) => {
    return (
        <div className='genre-wrapper'>
            <div className='genre-img-wrapper'>
                <img className='genre-img'alt="genre-img" src={genreImg}/>
            </div>
            <div className='genre-text-wrapper'>
                <p className='genre-text'>{genre}</p>
            </div>
        </div>
    )
}

export default Genre;