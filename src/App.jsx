
import './App.css'
import GameBoard from './components/GameBoard'
import Celebration from './components/Celebration';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <div>
        <h1>ASL Memory Game</h1>
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<GameBoard />} />
        <Route path="/celebration" element={<Celebration />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
