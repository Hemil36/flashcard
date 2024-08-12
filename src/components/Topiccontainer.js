import React from 'react'
import {  useNavigate } from "react-router-dom";

const Topiccontainer = ({topic,id}) => {
    let navigate = useNavigate();

    const onClick = (e) => {
        navigate(`/${id}`)
    }
  return (
    <div className=''>
         <div className=' border-2 border-black bg-yellow-200  rounded-md w-fit '>
            <button onClick={onClick}  className=' size-full flex flex-col items-center  w-[144px] h-[14rem] hover:opacity-65 hover:bg-white transition'>
            <h3 className='text-xl font-semibold text-center my-auto px-2 text-wrap'>{topic}</h3>
            </button>
           
        </div>
    </div>
  )
}

export default Topiccontainer