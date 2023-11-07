/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom';
import { CardContainer } from './CardContainer';
import { Durak } from './Durak';
import { Patience } from './Patience';
import { Poker } from './Poker';
import { CardPage } from './CardPage';

export const AppRoutes = ({ cards }) => (
  <Routes>
    <Route path="/" element={<CardContainer cards={cards} />} />
    {cards.map((card) => (
      <Route
        key={card.card_id}
        path={`/card/${card.card_name}`}
        element={<CardPage imgSrc={card.card_img_src} name={card.card_name} number={card.card_number} suit={card.card_suit} lore={card.lore}/>}
      />
    ))}
    <Route path="durak" element={<Durak />} />
    <Route path="poker" element={<Poker />} />
    <Route path="patience" element={<Patience />} />
  </Routes>
);


