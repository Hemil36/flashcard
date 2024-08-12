import React, { useState } from 'react';
import Flashcard from './FlashCard';
import { MoveLeft, MoveRightIcon } from 'lucide-react';

const FlashcardContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };
  const flashcards = [
    {
      id: 1,
      topic: 'React Basics',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      topic: 'React Basics',
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML.',
    },
    {
      id: 3,
      topic: 'React Basics',
      question: 'What are components in React?',
      answer: 'Components are independent, reusable pieces of UI in a React application.',
    },
    {
      id: 4,
      topic: 'Advanced React',
      question: 'What is the Context API?',
      answer: 'The Context API is a way to manage state globally in a React app.',
    },
    {
      id: 5,
      topic: 'Advanced React',
      question: 'What is a React Hook?',
      answer: 'Hooks are functions that let you use state and other React features in functional components.',
    },
    {
      id: 6,
      topic: 'JavaScript Fundamentals',
      question: 'What is a closure in JavaScript?',
      answer: 'A closure is a function that has access to its outer function’s scope even after the outer function has returned.',
    },
    {
      id: 7,
      topic: 'JavaScript Fundamentals',
      question: 'What is the difference between `var`, `let`, and `const`?',
      answer: '`var` is function-scoped, while `let` and `const` are block-scoped. `const` is used for variables that won’t be reassigned.',
    },
    // Add more flashcards as needed
  ];

  return (
    <div className='h-full flex justify-center items-center w-full flex-col'>
      <Flashcard {...flashcards[currentIndex]} stat="false" />
      <div className='flex w-full justify-around '>
      <button onClick={prevCard} className=' hover:bg-gray-200 transition hover:opacity-80 p-2 rounded-full'><MoveLeft /></button>
      <button onClick={nextCard} className=' hover:bg-gray-200 transition hover:opacity-80 p-2 rounded-full'><MoveRightIcon /></button>

      </div>
    </div>
  );
};

export default FlashcardContainer;
