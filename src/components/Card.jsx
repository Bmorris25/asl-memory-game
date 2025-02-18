import React,{useEffect} from "react";

const Card = ({ card, handleClick, isFlipped }) => {
  useEffect(() => {
    if (isFlipped && card.type === "word" && card.audio) {
      // Create an audio object and play it
      const audio = new Audio(card.audio);
      audio.play();
    }
  }, [isFlipped, card]);
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
