import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditCard = () => {
  const {id,topic} = useParams();
  console.log(id,topic)
  const [Question, setQuestion] = useState(' ');
  const [Answer, setAnswer] = useState(' ');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCard = async () => {
      const response = await axios.get(`https://flashbackend.vercel.app/api/flashcards/${topic}/${id}`, {
        withCredentials: true,
      });
      setQuestion(response.data[0].question);
      setAnswer(response.data[0].answer);
      console.log(response.data)
    }
    fetchCard();
  }, [])

  const onSubmit =async (e) => {
    e.preventDefault();
    const updatedCard = {
      question: Question,
      answer: Answer,
    }
   await axios.put(`https://flashbackend.vercel.app/api/flashcards/${id}`, updatedCard, {
      withCredentials: true,
    })
    .then((response) => {
      navigate(`/${topic}`);
      toast.success('Flashcard updated successfully')
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(Question, Answer)

  }

  const onDelete = async (e) => {
    e.preventDefault();
    console.log(id)
    await axios.delete(`https://flashbackend.vercel.app/api/flashcards/${id}`, {
      withCredentials: true,
    })
    .then((response) => {
      navigate(`/${topic}`);
      toast.success('Flashcard deleted successfully')
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className=' p-2 h-full flex flex-col items-center justify-center gap-4'>
        <div className='border-2 p-2 w-1/3'>

        <h2 className='text-2xl font-semibold py-4 text-center'>Edit FlashCard</h2>
        <form className='flex flex-col ' onSubmit={onSubmit}>
            <label htmlFor='question' className='mb-2 text- font-medium'>Question</label>
            <input onChange={(e)=>setQuestion(e.target.value)} type='text' placeholder='Enter question' value={Question} className='border-2 border-gray-300 rounded px-3 py-1 mb-4' />
            <label htmlFor='answer' className='mb-2 text-lg font-medium'>Answer</label>
            <textarea onChange={(e)=>setAnswer(e.target.value)} type='text' placeholder='Enter answer' value={Answer} className='border-2 h-20 border-gray-300 rounded px-3 py-1 mb-4' />
            <button  className='bg-[#ffdd59] py-1 rounded hover:bg-yellow-400 transition'>Update Flashcard</button>
        </form>
          <button onClick={onDelete} className='bg-red-500 py-1 my-2 rounded hover:bg-red-600 transition w-full'>Delete Flashcard</button>
        </div>
    </div>
  )
}

export default EditCard