import { useNavigate } from 'react-router-dom';

const Celebration = () => {
  const navigate = useNavigate();

  return (
    <div className="celebration-container">
      <h1>🎉 Congratulations! You Matched All Pairs! 🎉</h1>
      <button onClick={() => navigate("/")}>Start New Game</button>
    </div>
  );
};

export default Celebration;
