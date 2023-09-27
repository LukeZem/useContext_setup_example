import { useContext, useState } from 'react'
import './App.css'
import { mainContext } from './context/MainProvider'

function App() {

  const { background, setBackground } = useContext(mainContext)


  return (
    <div style={{ background: background }}>
      <button onClick={() => setBackground("green")}>Change Background</button>
    </div>
  )
}

export default App
