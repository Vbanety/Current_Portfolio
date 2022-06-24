import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import Portfolio from './Pages/Portfolio/Portfolio'
import Skills from './Pages/Skills/Skills'
import Sobre from './Pages/Sobre/Sobre'
import Contato from './Pages/Contato/Contato'
import { AnimatePresence } from 'framer-motion';
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<App />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/skills' exact element={<Skills />} />
          <Route path='/sobre' exact element={<Sobre />} />
          <Route path='/contato' exact element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>

)
