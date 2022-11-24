import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Home } from './components/Home'

export const App = () => {
  const [start, setStart] = useState(true)
  return (
    <div className="App">
      {start ? (<Home setStart={setStart}/>) : (<Dashboard setStart={setStart}/>)}
    </div>
  )
}

