import React, { useState } from 'react';
import Header from '../components/Header';
import Rate from '../components/Rate';

const Ranking = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <Header />
      <div className="ranking">
        <h2>Rate Me</h2>
        <p> Rating component </p>
          <Rate rating={rating} onRating={rate => setRating} />
        <p>Rating - 0</p>
      </div>
    </>
  )
}

export default Ranking;