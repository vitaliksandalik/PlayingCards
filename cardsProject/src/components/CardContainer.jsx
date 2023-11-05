/* eslint-disable react/prop-types */
import { Card } from './Card'
import '../styles/CardContainer.css' 

export const CardContainer = ({ cards }) => {
  return (
    <div className="card-container-wrapper">
      <div className="card-container">
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
  )
}
