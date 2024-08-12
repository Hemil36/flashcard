import React, { useEffect, useState } from 'react';
import Flashcard from './FlashCard';
import { MoveLeft, MoveRightIcon } from 'lucide-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const FlashcardContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {topic}= useParams();

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };
  const [flashcards, setFlashcards] = useState([]);
  
  useEffect(() => {
          
    const fetchFlashcards = async () => {
      const response = await axios.get("http://localhost:5000/api/flashcards/" + topic,{
        withCredentials: true,
      });
      setFlashcards(response.data);
      console.log(response.data)
    }
    fetchFlashcards();
}, [])

  return (
    <>
      <Link to={`/${topic}`} className='bg-[#ffdd59] w-fit ml-2  mt-2 rounded  transition'>
      <button className='flex items-center justify-center p-2 font-bold'>
      Back</button>
      </Link>
    <div className='h-full flex justify-center items-center w-full flex-col'>
      <Flashcard {...flashcards[currentIndex]} stat="false" />
      <div className='flex w-full justify-around '>
      <button onClick={prevCard} className=' hover:bg-gray-200 transition hover:opacity-80 p-2 rounded-full'><MoveLeft /></button>
      <button onClick={nextCard} className=' hover:bg-gray-200 transition hover:opacity-80 p-2 rounded-full'><MoveRightIcon /></button>
      </div>
    </div>
    </>

  );
};

export default FlashcardContainer;
