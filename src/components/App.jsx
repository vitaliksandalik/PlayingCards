import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/CardContainer.scss';
import { Header } from './Header';
import { AppRoutes } from './Routes';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/cards.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Header />
      <AppRoutes cards={cards} />
    </Router>
  );
}

export default App;
