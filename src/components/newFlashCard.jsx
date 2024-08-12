import React from 'react'

const NewFlashCard = () => {
  return (
    <div className=' p-2 h-full flex flex-col items-center justify-center gap-4'>
        <div className='border-2 p-2'>

        <h2 className='text-2xl font-semibold py-4 text-center'>Add FlashCard</h2>
        <form className='flex flex-col'>
            <label htmlFor='question' className='mb-2 text- font-medium'>Question</label>
            <input type='text' placeholder='Enter question' className='border-2 border-gray-300 rounded px-3 py-1 mb-4' />
            <label htmlFor='answer' className='mb-2 text-lg font-medium'>Answer</label>
            <input type='text' placeholder='Enter answer' className='border-2 border-gray-300 rounded px-3 py-1 mb-4' />
            <button type='submit' className='bg-[#ffdd59] py-1 rounded hover:bg-yellow-400 transition'>Add FlashCard</button>
        </form>
        </div>
    </div>
  )
}

export default NewFlashCard