import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import BookEvent from './component/pages/BookEvent'
import Eventdetails from './component/pages/Eventdetails'
import Home from './component/pages/Home'



const App = () => {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eventdetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookevent" element={<BookEvent />} />
        </Routes>
      </BrowserRouter>

    </>
    
  )
}

export default App