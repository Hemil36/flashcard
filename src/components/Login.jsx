"use client"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../UserSlice'

const Login = () => {
const dispatch = useDispatch()
const navigate = useNavigate() ;
    const onSubmit = async (e) => {
        e.preventDefault()
        try{

        const response = await axios.post('https://flashbackend.vercel.app/api/users/login', {
            email: e.target.email.value,
            password: e.target.password.value
        },{
          withCredentials: true
        })
        console.log(response)
        dispatch(setUser(response.data));
        navigate('/')
      }catch(err){
        console.log(err)
        toast.error('Invalid credentials')
      }

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