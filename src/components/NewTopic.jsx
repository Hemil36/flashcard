import React, { useState } from 'react'

const NewTopic = () => {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (topic.trim() !== '') {
        // onAddTopic(topic);
        setTopic('');  // Clear the input field after submission
      }
    };
  
    return (
      <div className='p-4 h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label htmlFor='new-topic' className='mb-2 text-xl font-medium '>New Topic</label>
          <input
            type='text'
            id='new-topic'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className='border-2 border-gray-300 rounded px-3 py-2 mb-4 '
            placeholder='Enter new topic'
          />
          <button
            type='submit'
            className='bg-[#ffdd59]  py-1 rounded hover:bg-yellow-400 transition'
          >
            Add Topic
          </button>
        </form>
      </div>
    );
}

export default NewTopic