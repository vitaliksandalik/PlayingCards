import '../styles/Cards.css'; 

// eslint-disable-next-line react/prop-types
export const Card = ({ imgSrc, name, number, suit }) => (
  <div className="card">
    <img src={imgSrc} alt={name} />
    <h1>{number} of {suit}</h1>
    <a href={`/${name}`}>Show more...</a>
  </div>
);

