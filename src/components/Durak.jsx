import '../styles/Durak.scss';

export const Durak = () => {
  return (
    <div className="durak-container">
      <div className="image-container">
        <img src="../public/durak.png" className='poker-img' alt="Poker Image" />
        <div className="text-overlay">
          <h1>LEARN TO PLAY</h1>
          <h3>Basics of Durak</h3>
          <h6>
            Today, Durak is truly an international game, enjoyed in virtually every
            country where card games are played.
          </h6>
        </div>
      </div>
    </div>
  );
};
