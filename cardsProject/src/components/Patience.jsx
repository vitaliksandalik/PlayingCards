import '../styles/Patience.scss';

export const Patience = () => {
  return (
    <div className="poker-container">
      <div className="image-container">
        <img src="../public/poker.png" className='poker-img' alt="Poker Image" />
        <div className="text-overlay">
          <h1>LEARN TO PLAY</h1>
          <h3>Basics of Patience</h3>
          <h6>
            Today, Patience is truly an international game, enjoyed in virtually every
            country where card games are played.
          </h6>
        </div>
      </div>
    </div>
  );
};
