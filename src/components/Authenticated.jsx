import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../UserSlice'
import { Outlet, useNavigate } from 'react-router-dom';

const Authenticated = () => {
    const user = useSelector(getUser);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [])

  return user?<><Outlet /></> : null
}

export default Authenticated