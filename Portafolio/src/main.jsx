import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from "motion/react"

import './index.css'

import App from './App.jsx'
import Header from './components/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header class=''/>
    <App />
  </StrictMode>,
)
