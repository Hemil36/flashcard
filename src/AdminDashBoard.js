import { Plus } from 'lucide-react';
import React, { useState } from 'react';

const AdminDashboard = ({ addFlashcard, editFlashcard, deleteFlashcard, flashcards }) => {
  const [formState, setFormState] = useState({ question: '', answer: '' });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    addFlashcard(formState);
    setFormState({ question: '', answer: '' });
  };

  return (
    <div className=' h-full flex-1 pt-4'>
      <h2 className='text-2xl font-semibold px-2'>Admin Dashboard</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 px-5'>
        <div className=' border-2 border-black bg-yellow-300 w-fit rounded-md '>
            <button className=' size-full flex flex-col items-center py-12 px-6 hover:opacity-65 hover:bg-white transition'>
            <Plus size="60" className=' ' />
            <h3 className='text-xl font-semibold text-center'>New Topic</h3>
            </button>
           
        </div>
      </section>
      
    </div>
  );
};

export default AdminDashboard;
