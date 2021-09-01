import React from 'react';
import GameCard from '../GameCard/GameCard';

const GameCardGrid = ({ genreData }) => {
    return (
        <div className='gamecard-grid-wrapper'>
            {genreData.map(game => {
                const { gameImage, gameTitle, gameDeveloper, gameRating } = game;
                return <GameCard gameImage={gameImage} gameTitle={gameTitle} gameDeveloper={gameDeveloper} gameRating={gameRating}/>
            })}
        </div>
    )
}

export default GameCardGrid;