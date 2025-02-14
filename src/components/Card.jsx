import React from "react";

const Card = ({ card, handleClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => handleClick(card)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img className="img-fluid img-thumbnail" src={card.image} alt={card.name} />
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Card;
