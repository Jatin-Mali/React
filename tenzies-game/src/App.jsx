import './App.css'
import Header from './components/Header'
import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [newDice, setNewDice] = useState(allNewDice)

  const allHeld = newDice.every(die => die.isHeld)
  const allSame = newDice.every(die => die.value === newDice[0].value)
  const gameWon = allHeld && allSame

  function allNewDice() {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }))
  }

  function rollDice() {
    if (gameWon) {
      setNewDice(allNewDice())
    } else {
      setNewDice(prev =>
        prev.map(die =>
          die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      )
    }
  }

  function hold(id) {
    setNewDice(prev =>
      prev.map(die =>
        die.id === id
          ? { ...die, isHeld: !die.isHeld }
          : die
      )
    )
  }

  return (
    <div className="app">
      {gameWon && <Confetti />}
      <div className="game-card">
        <Header />
        <Die value={newDice} hold={hold} />
        <button className="roll-btn" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll Dice"}
        </button>
      </div>
    </div>
  )
}