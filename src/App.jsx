import './App.css'
import { Hero } from './components/Hero'
import { TwitchBanner } from './components/TwitchBanner'
import { Sponsors } from './components/Sponsors'

function App() {

  return (
    <main>
      <Hero />
      <TwitchBanner />
      <Sponsors />
    </main>
  )
}

export default App