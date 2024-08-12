import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Topic = () => {
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

      const{ topic} = useParams();
      console.log(topic)
      const url =`/${topic}/new`
  return (
    <div className=' h-full'>
        <h1 className='text-2xl font-bold text-cente p-2'>Flashcards</h1>
        <button className='bg-[#ffdd59] p-1 ml-1 rounded hover:bg-yellow-400 transition'>
            <Link to={url} className='flex items-center justify-center'>
                Add Flashcard
                </Link>
            </button>
            <button className='bg-[#ffdd59] p-1 ml-1 rounded hover:bg-yellow-400 transition'>
            <Link to={url} className='flex items-center justify-center'>
                Start Quiz
                </Link>
            </button>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 px-5'>
        {flashcards.map((flashcard) => (
            <div key={flashcard.id} className='border-2 border-black bg-yellow-200 w-fit rounded-md flex flex-col justify-around text-center items-center'>
            <p className='text-lg font-medium'>Question: {flashcard.question}</p>
            <p className='text-lg font-medium'>Ans : {flashcard.answer}</p>
            </div>
        ))}
    </section>    </div>
  )
}

export default Topic