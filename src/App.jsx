import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import State1 from './components/State1'
import State2 from './components/State2'
import State3 from './components/State3'
import State4 from './components/State4'
import State5 from './components/State5'


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Confirmationmanager1" replace />} />
        <Route path="/Confirmationmanager1" element={<State1 />} />
        <Route path="/Confirmationmanager2" element={<State2 />} />
        <Route path="/PGHApproval" element={<State3 />} />
        <Route path="/THApproval" element={<State4 />} />
        <Route path="/Report" element={<State5 />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
