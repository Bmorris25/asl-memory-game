import React, { useEffect, useRef } from "react";

const Card = ({ card, handleClick, isFlipped }) => {
  const audioRef = useRef(null); // Store audio reference

  useEffect(() => {
    if (isFlipped && card.type === "word" && card.audio) {
      if (audioRef.current) {
        audioRef.current.pause(); // Stop previous audio if playing
        audioRef.current.currentTime = 0; // Reset playback position
      }

      const audio = new Audio(card.audio);
      audioRef.current = audio;
      audio.play().catch((err) => console.error("Audio play failed", err));
    }
  }, [isFlipped, card]);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => handleClick(card)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img className="img-fluid img-thumbnail" loading="lazy" src={card.image} alt={card.name} />
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Card;

