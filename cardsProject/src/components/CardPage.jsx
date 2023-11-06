/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/CardPage.scss'

export const CardPage = ({ imgSrc, name, number, suit, lore }) => {
  console.log(imgSrc)
  return (
    <div className="card-container">
      <img className="card-image" src={imgSrc} alt={name} />
      <p className="card-description">{lore}</p>
    </div>
  )
}
