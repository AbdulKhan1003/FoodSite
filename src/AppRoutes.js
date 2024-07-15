import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

export default function AppRoutes() {
  return (
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Home />} />
    </Routes>
  )
}
