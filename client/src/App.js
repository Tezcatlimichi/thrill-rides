import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Rides from './pages/AllRides'
import Ride from './pages/Ride'
import Ticket from './pages/Ticket'

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
          <Route path="/all/tickets" element={<Ticket />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
