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


function App() {


  return(
    <div className='h-full flex flex-col'>

    <BrowserRouter>
    <Navbar />
    <Routes>

    
      <Route path='/register' element={<Login />} />
      <Route path='/' element={<AdminDashboard />} />
      <Route path='/:topic' element={<Topic />} />
      <Route path='/:topic/:id/edit' element={<EditCard />} />
      <Route path='/:topic/quiz' element={<Quiz />} />
      <Route path='/:topic/new' element={<NewFlashCard />} />
      <Route path='/:topic/flashcards' element={<FlashcardContainer />} />
      <Route path='/register' element={<Register />} />
      <Route path='/newtopic' element={<NewTopic />} />
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App;
