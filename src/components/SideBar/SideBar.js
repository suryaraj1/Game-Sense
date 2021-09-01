import React from 'react';
import GENRE_DATA from '../../genreData';
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

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genreChoice: '',
        }
    }

    callbackHandler = selectedGenre => {
        const { handler } = this.props;
        this.setState({
            genreChoice: selectedGenre
        }, () => {
            const { genreChoice } = this.state;
            const genreData = GENRE_DATA[genreChoice];
            handler(genreData);
        });
    }

    render() {
        return (
            <div className='sidebar-wrapper'>
                <p className='sidebar-heading'>Genres</p>
                <ul className='sidebar-items-wrapper'>
                    {genreData.map(genreItem => {
                        const { genreImg, genre } = genreItem;
                        return <Genre genreImg={genreImg} genre={genre} handler={this.callbackHandler} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SideBar;