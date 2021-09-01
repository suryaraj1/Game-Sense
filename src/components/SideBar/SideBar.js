import React from 'react';
import Genre from '../Genre/Genre';
import './SideBar.css';

const genreData = [
    {
        genreImg: '/image/action_genre.jpg',
        genre: 'Action'
    }, {
        genreImg: '/image/genre_rpg.png',
        genre: 'RPG'
    }, {
        genreImg: '/image/genre_sports.png',
        genre: 'Sports'
    }, {
        genreImg: '/image/genre_racing.png',
        genre: 'Racing'
    }, {
        genreImg: '/image/genre_strategy.png',
        genre: 'Strategy'
    }
]

const SideBar = () => {
    return (
        <div className='sidebar-wrapper'>
            <p className='sidebar-heading'>Genres</p>
            <ul className='sidebar-items-wrapper'>
                {genreData.map(genreItem => {
                    const { genreImg, genre } = genreItem;
                    return <Genre genreImg={genreImg} genre={genre}/>
                })}
            </ul>
        </div>
    )
}

export default SideBar;