import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearUser, getUser } from '../UserSlice'

const Navbar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(clearUser());
    navigate('/login')
  }
  return (
    <nav className=' bg-[#ffdd59] p-2 flex justify-between'>
      <Link to='/' className=''>
        <h1 className='text-3xl font-bold'>EduFlashcards</h1>
        </Link>
        {
          user? 
          <>
          <div className=' flex gap-3'>

          <Link to='/' className='bg-[#ffdd59] text-2xl font-bold rounded  transition'>
          <button>

          Home
          </button>
          </Link>
          <button onClick={logout}  className='bg-[#ffdd59] text-2xl font-bold rounded  transition'>Logout
          </button>
          </div>
          </>
          :
          <>
          <Link to='/login' className='bg-[#ffdd59] text-2xl font-bold rounded  transition'>Login
          </Link>
          
          </>
        }

    </nav>
  )
}

export default Navbar