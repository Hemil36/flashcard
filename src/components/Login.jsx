"use client"
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email + ' ' + password)
    }



  return (
    <div className='h-full flex-1  flex flex-col justify-center items-center gap-4 '>
        <div className=' border-2 p-4 rounded-md text-xl'>

        <h1 className=' text-3xl font-semibold my-2'>Login</h1>
        <form className=' flex flex-col gap-2' onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='email' className='border-2 border-black' id='email' required />
            <label htmlFor='password'>Password</label>
            <input type='password' className=' border-2 border-black' id='password' required />
            <button className='bg-[#ffdd59] p-1 rounded-md my-2'>Login</button>
        </form>
        <Link to='/register' className='text-sm hover:text-blue-600'>Don't have an account? Register</Link>
        </div>
    </div>
  )
}

export default Login