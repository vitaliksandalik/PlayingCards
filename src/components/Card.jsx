/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const Card = ({ imgSrc, name, number, suit }) => (
  <div className="card">
    <img src={imgSrc} alt={name} />
    <h1>
      {number} of {suit}
    </h1>
    <Link to={`/card/${name}`}>Show more...</Link>
  </div>
);
