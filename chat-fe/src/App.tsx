import { useState } from 'react'
import './App.css'
import Router from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router></Router>
    </>
  )
}

export default App
