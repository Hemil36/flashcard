import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            },{
              withCredentials: true
            })
            console.log(response)
            toast.success('User registered successfully')
          
        }catch(err){
          toast.error('Please Try again')
        }
        

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
    <label htmlFor='username'>Username</label>
    <input type='text' className='border-2 border-black px-2 text-[1rem]' id='username' required />
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