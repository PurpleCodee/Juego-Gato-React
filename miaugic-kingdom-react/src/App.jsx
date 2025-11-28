import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edificios from './components/Edificios/Edificios'
import Inicio from './components/Inicio/Inicio'
import MusicBackground from './components/MusicBackground/MusicBackground'

function App() {

  return (
    <Router>
      <MusicBackground />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/edificios" element={<Edificios />} />
      </Routes>
    </Router>
  )
}

export default App
