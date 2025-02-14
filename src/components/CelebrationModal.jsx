import React from 'react';
import '../CelebrationModel.css'; // Import the styles

const CelebrationModal = ({ onClose }) => {
  return (
    <div className="celebration-modal-overlay">
      <div className="celebration-modal">
        <h2 className="celebration-header">🎉 Congratulations! 🎉</h2>
        <p className="celebration-text">You've matched all the cards!</p>
        <button className="celebration-close-button" onClick={onClose}>
          Play Again!
        </button>
      </div>
    </div>
  );
};

export default CelebrationModal;
