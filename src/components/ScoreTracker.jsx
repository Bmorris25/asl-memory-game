import React, {useEffect, useState} from 'react'

const ScoreTracker = ({ moves }) => {
    const [bestScore, setBestScore ] = useState(() => {
        return localStorage.getItem('bestScore') || Infinity;
    });

    useEffect (() => {
        if (moves < bestScore) {
            setBestScore(moves);
            localStorage.setItem("bestScore", moves);
        }
    })
  return (
    <div>
        <h3>Moves: {moves}</h3>
        <h3>BestScore : {bestScore !== Infinity ? bestScore : "N/A"}</h3>
    </div>
  )
}

export default ScoreTracker;