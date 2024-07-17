import { useState } from 'react'
import './App.css'
import Aboutme from './components/Aboutme/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aboutme />
    </>
  )
}

export default App
