import './App.css'
import Laskuri from './laskuri'
import Viesti from './viesti'
import React, { useState } from 'react'
import Posts from './Posts'


const App = () => {

  const [showLaskuri, setShowLaskuri] = useState(false)

  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio}/>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      <Viesti teksti="Tervehdys App -komponentista!" />

    </div>
  )
}

export default App
