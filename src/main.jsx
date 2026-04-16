import React from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import { useAnimationFrame } from 'framer-motion'
import App from './App.jsx'
import './index.css'

// Lenis smooth scroll setup integrated with Framer Motion
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false, // use native scroll on touch — preserves position:fixed
})

function Root() {
  useAnimationFrame((time) => {
    lenis.raf(time)
  })
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
