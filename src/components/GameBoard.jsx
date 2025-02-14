import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import generateCards from "../utils/generateCards"; // Import the function

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const navigate = useNavigate();

  // Fetch cards when the game starts
  useEffect(() => {
    loadNewGame();
  }, []);

  const loadNewGame = async () => {
    const newCards = await generateCards(); // Fetch new cards
    setCards(newCards);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    if (matchedCards.length === 8) {
      setTimeout(() => navigate('/celebration'), 1000); // Navigate after 1 sec
    }
  }, [matchedCards, navigate]);

  const handleCardClick = (clickedCard) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(clickedCard) &&
      !matchedCards.includes(clickedCard.name)
    ) {
      const newFlipped = [...flippedCards, clickedCard];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setTimeout(() => checkForMatch(newFlipped[0], newFlipped[1]), 1000);
      }
    }
  };

  const checkForMatch = (card1, card2) => {
    if (card1.name === card2.name) {
      setMatchedCards([...matchedCards, card1.name]);
    }
    setFlippedCards([]);
  };

  return (
    <div>
      <button className="m-3" onClick={loadNewGame}>New Game</button>
      <div className="game-board memory-game-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleClick={handleCardClick}
            isFlipped={flippedCards.includes(card) || matchedCards.includes(card.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
