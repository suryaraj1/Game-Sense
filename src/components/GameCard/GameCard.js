import React from 'react';
import './GameCard.css';

const GameCard = ({ gameImage, gameTitle, gameDeveloper, gameRating }) => {
    return (
        <div className='gamecard-wrapper'>
            <div className='gamecard-img-wrapper'>
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
                    <div className='gamecard-rating-outer-wrapper'>
                        <div className='gamecard-rating-inner-wrapper'>
                            <div className='gamecard-rating'>{gameRating}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;