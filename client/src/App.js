import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Rides from './pages/AllRides'
import Ride from './pages/Ride'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ride/:id" element={<Ride />} />
          <Route path="/rides" element={<Rides />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
