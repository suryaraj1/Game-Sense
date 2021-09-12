import React from "react";
import "./GameRating.css";

function appendStyle(gameRating) {
    if (gameRating >= 80 && gameRating <= 100)
        return "great";
    else if (gameRating >= 50 && gameRating <= 79)
        return "medium";
    else 
        return "bad";
}

const GameRating = ({ gameRating }) => {
    console.log(gameRating);
    return (
        <div className={`gamecard-rating-outer-wrapper ${appendStyle(gameRating)}`}>
            <div className="gamecard-rating-inner-wrapper">
                <div className={`gamecard-rating ${appendStyle(gameRating)}`}>{gameRating}</div>
            </div>
        </div>
    );
};

export default GameRating;
