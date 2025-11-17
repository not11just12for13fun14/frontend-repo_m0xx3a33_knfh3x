import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
import Story from './components/Story'
import RSVP from './components/RSVP'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Details />
      <Story />
      <RSVP />
      <footer className="py-12 text-center text-white/60 bg-black">
        Designed with love • Ava & Julian — 06.21.2025
      </footer>
    </div>
  )
}

export default App
