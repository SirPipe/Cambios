import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import QuienesSomosPage from './pages/QuienesSomosPage'
import './App.css'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.slice(1)

    // Wait for the route content to mount before scrolling to the anchor.
    requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
