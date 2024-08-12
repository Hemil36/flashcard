import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Topic = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [name, setName] = useState('');

      const{ topic} = useParams();
      const navigate = useNavigate();
      console.log(topic)

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

      useEffect(()=>{
        const fetchTopic = async () => {
          try{
          const response = await axios.get(`http://localhost:5000/api/topics/topic/${topic}`, {
            withCredentials: true,
          });
          setName(response.data[0].topic_name)
          console.log(response.data)
        }catch(err){
          console.log(err)
        }
        }
        fetchTopic();
      },[])

      const onDelete = async (e) => {
        e.preventDefault();
        console.log(topic)
        await axios.delete(`http://localhost:5000/api/topics/${topic}`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data)
          navigate('/');
          toast.success('Topic deleted successfully')
        })
        .catch((error) => {
          console.log(error)
          toast.error('Please try again')
        })

      }


      const url =`/${topic}/new`
      const flashcard = `/${topic}/flashcards`
  return (
    <div className=' h-full'>
        <h1 className='text-2xl font-bold text-cente p-2'>Topic : {name}</h1>
        <button className='bg-[#ffdd59] p-1 ml-1 rounded hover:bg-yellow-400 transition'>
            <Link to={url} className='flex items-center justify-center'>
                Add Flashcard
                </Link>
            </button>
            <button className='bg-[#ffdd59] p-1 ml-1 rounded hover:bg-yellow-400 transition'>
            <Link to={flashcard} className='flex items-center justify-center'>
                Start Quiz
                </Link>
            </button>
            <button onClick={onDelete} className=' bg-red-500 p-1 mx-2 rounded-md'>
              Delete
            </button>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 px-5'>
        {flashcards.map((flashcard) => (
            <div key={flashcard.id} className='border-2 h-fit my-auto border-black bg-yellow-200 hover:opacity-80 transition p-1 w-fit rounded-md flex flex-col gap-4 justify-around text-center items-center'>
              <Link to={`/${topic}/${flashcard.flashcard_id}/edit`} className='  rounded  transition'>
            <p className='text-lg font-medium'>Question: {flashcard.question}</p>
            <p className='text-lg font-medium'>Ans : {flashcard.answer}</p>
            </Link>
            </div>
        ))}
    </section>    </div>
  )
}

export default Topic