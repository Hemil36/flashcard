import React, { useState, useEffect } from 'react';
import FlashcardContainer from './FlashCardContainer';
import AdminDashboard from './AdminDashBoard';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NewTopic from './components/NewTopic';
import NewFlashCard from './components/newFlashCard';
import Topic from './components/Topic';
import EditCard from './components/EditCard';
import Quiz from './components/Quiz';
import toast, { Toaster } from 'react-hot-toast';
import Authenticated from './components/Authenticated';


function App() {


  return(
    <div className='h-full flex flex-col'>

    <BrowserRouter>
    <Navbar />
    <Routes>

    
      <Route path='/login' element={<Login />} />
      <Route element={<Authenticated />} >
      <Route path='/' element={<AdminDashboard />} />
      <Route path='/:topic' element={<Topic />} />
      <Route path='/:topic/:id/edit' element={<EditCard />} />
      <Route path='/:topic/quiz' element={<Quiz />} />
      <Route path='/:topic/new' element={<NewFlashCard />} />
      <Route path='/:topic/flashcards' element={<FlashcardContainer />} />
      <Route path='/newtopic' element={<NewTopic />} />
      </Route> 
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    <Toaster />
    </div>


  )
}

export default App;
