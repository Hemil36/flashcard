import axios from 'axios';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Topiccontainer from './components/Topiccontainer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from './UserSlice';

const AdminDashboard = ({  }) => {
  const [topics, setTopics] = useState([]);
  const userId = useSelector(getUser);

  useEffect(() => {

    const fetchTopics = async () => {
      const response = await axios.get(`https://flashbackend.vercel.app/api/topics/${userId}`);
      
      setTopics(response.data);
      console.log(response.data);
    }

    fetchTopics();

  },[]);



  const [formState, setFormState] = useState({ question: '', answer: '' });

 

  return (
    <div className=' h-full flex-1 pt-4'>
      <h2 className='text-2xl font-semibold px-2'>Admin Dashboard</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 px-5'>
        <div className=' border-2 border-black bg-yellow-200 w-fit rounded-md '>
          <Link to='/newtopic' className='flex items-center justify-center h-full'>
            <button className=' size-full flex flex-col items-center py-12 px-6 hover:opacity-65 hover:bg-white transition'>
            <Plus size="60" className=' ' />
            <h3 className='text-xl font-semibold text-center'>New Topic</h3>
            </button>
            </Link>
           
        </div>
        {
          topics?.map((topic) => (
            <Topiccontainer key={topic.topic_id} id={topic.topic_id} topic={topic.topic_name} />
          ))
        }
      </section>
      
    </div>
  );
};

export default AdminDashboard;
