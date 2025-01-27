import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './Pages/Menu.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App></App>
  </StrictMode>,
)
