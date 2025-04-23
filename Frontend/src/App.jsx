import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './home/Home.jsx'
import Courses from "./courses/Courses";
import {} from 'react-router-dom';

export default function App() {
  return (
    <>
    <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
   </Routes>
     
    </div>
    </>
  )
}
