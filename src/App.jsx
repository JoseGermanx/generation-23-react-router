import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './views/About'
import Contact from './views/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Contact />
  )
}

export default App
