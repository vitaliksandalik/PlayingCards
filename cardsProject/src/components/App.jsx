import { useEffect, useState } from 'react';
import { Card } from './Card';
import '../styles/App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('/cards.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.card_id}
            imgSrc={card.card_img_src}
            name={card.card_name}
            number={card.card_number}
            suit={card.card_suit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
