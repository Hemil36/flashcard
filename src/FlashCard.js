import React, { useEffect, useState } from 'react';
import './FlashCard.css'; // Import your CSS for styling

const Flashcard = ({ question, answer,stat }) => {
  const [flipped, setFlipped] = useState(stat);

  useEffect(()=>
  {
    setFlipped(false);
  },[question])

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''} bg-yellow-100 w-1/2 rounded-lg `} onClick={() => setFlipped(!flipped)}>
      <div className="front ">{question}</div>
      <div className="back ">{answer}</div>
    </div>
  );
};

export default Flashcard;
