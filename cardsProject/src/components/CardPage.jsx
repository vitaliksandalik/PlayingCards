/* eslint-disable react/prop-types */

export const CardPage = ({ imgSrc, name, number, suit }) => {
  console.log(imgSrc)
  return (
    <div className="card">
      
      <img src={imgSrc} alt={name} />
      <h1>
        {number} of {suit}
      </h1>
    </div>
  );
};
