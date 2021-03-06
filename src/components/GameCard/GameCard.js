import React from 'react';
import GameRating from '../GameRating/GameRating';
import './GameCard.css';

const GameCard = ({ gameImage, gameTitle, gameDeveloper, gameRating }) => {

    const gameCardImgStyle = {
        height: "140px",
        width: "100px",
        background: "#fff",
        marginLeft: "10px",
        borderRadius: "6px",
        backgroundSize: "cover",
        backgroundImage: `url(${gameImage})`,
        backgroundPosition: "50% 50%",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.1)"
    }

    return (
        <div className='gamecard-wrapper'>
            <div className='gamecard-img-wrapper' style={gameCardImgStyle}>
            </div>
            <div className='gamecard-non-img-wrapper'>
                <div className='gamecard-details-wrapper'>
                    <div className='gamecard-title-wrapper'>
                        <p className='gamecard-title'>{gameTitle}</p>
                    </div>
                    <div className='gamecard-developer-wrapper'>
                        <p className='gamecard-developer-static'>Developer</p>
                        <p className='gamecard-developer'>{gameDeveloper}</p>
                    </div>
                </div>
                <div className='gamecard-rating-wrapper'>
                    <GameRating gameRating={gameRating}/>
                </div>
            </div>
        </div>
    )
}

export default GameCard;