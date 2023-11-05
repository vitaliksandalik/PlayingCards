import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles/CardContainer.css'
import { Durak } from './Durak'
import { Patience } from './Patience'
import { Poker } from './Poker'
import { Header } from './Header'
import { CardContainer } from './CardContainer'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('/cards.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer cards={cards} />} />
        <Route path="durak" element={Durak} />
        <Route path="poker" element={Poker} />
        <Route path="patience" element={Patience} />
      </Routes>
    </Router>
  )
}

export default App
