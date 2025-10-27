import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edificios from './components/Edificios/Edificios'
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/edificios" element={<Edificios />} />
      </Routes>
    </Router>
  )
}

export default App
