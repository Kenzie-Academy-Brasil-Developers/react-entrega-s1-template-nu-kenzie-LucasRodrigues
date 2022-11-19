import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/dashboard'
import { Home } from './components/home'

export const App = () => {
  const [start, setStart] = useState(true)
  return (
    <div className="App">
      {start ? (<Home setStart={setStart}/>) : (<Dashboard setStart={setStart}/>)}
    </div>
  )
}

