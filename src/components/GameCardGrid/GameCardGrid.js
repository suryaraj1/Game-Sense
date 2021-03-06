import React from 'react';
import Footer from '../Footer/Footer';
import GameCard from '../GameCard/GameCard';
import './GameCardGrid.css';

const GameCardGrid = ({ genreData }) => {
    return (
        <div className='gamecard-grid-wrapper'>
            <div className='gamecard-grid'>
                {genreData.map(game => {
                    const { gameImage, gameTitle, gameDeveloper, gameRating } = game;
                    return <GameCard gameImage={gameImage} gameTitle={gameTitle} gameDeveloper={gameDeveloper} gameRating={gameRating}/>
                })}
            </div>
            <Footer />
        </div>
    )
}

export default GameCardGrid;