import '../styles/Poker.scss';

export const Poker = () => {
  return (
    <div className="patience-container">
      <div className="image-container">
        <img src="../public/patience.png" className='poker-img' alt="Poker Image" />
        <div className="text-overlay">
          <h1>LEARN TO PLAY</h1>
          <h3>Basics of Poker</h3>
          <h6>
            Today, Poker is truly an international game, enjoyed in virtually every
            country where card games are played.
          </h6>
        </div>
      </div>
    </div>
  );
};
