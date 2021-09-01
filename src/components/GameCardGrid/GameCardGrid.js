import React from 'react';
import GameCard from '../GameCard/GameCard';

const GameCardGrid = ({ genreData }) => {
    return (
        <div className='gamecard-grid-wrapper'>
            {genreData.map(game => {
                const { gameTitle, gameDeveloper, gameRating } = game;
                return <GameCard gameTitle={gameTitle} gameDeveloper={gameDeveloper} gameRating={gameRating}/>
            })}
        </div>
    )
}

export default GameCardGrid;