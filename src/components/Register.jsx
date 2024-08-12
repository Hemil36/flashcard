import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const onSubmit = (e) => {

    }
    const emailref = useRef(null);
    useEffect(() => {
        if (emailref.current) {
          emailref.current.focus();
        }
      }, []);
  return (
    <div className='h-full flex-1  flex flex-col justify-center items-center gap-4 '>
    <div className=' border-2 p-4 rounded-md text-xl'>

    <h1 className=' text-3xl font-semibold my-2'>Signup</h1>
    <form className=' flex flex-col gap-2' onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' className='border-2 border-black px-2 text-[1rem]' id='email' required ref={emailref}/>
        <label htmlFor='password'>Password</label>
        <input type='password' className=' border-2 border-black px-2' id='password' required />
        <button className='bg-[#ffdd59] p-1 rounded-md my-2'>Signup</button>
    </form>
    </div>
</div>
  )
}

export default Register