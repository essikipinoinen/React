import './App.css'
import Laskuri from './laskuri'
import Viesti from './viesti'
import React, { useState } from 'react'
import Posts from './Posts'
import CustomerList from './CustomerList'


const App = () => {

  const [showLaskuri, setShowLaskuri] = useState(false)

  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className="App">
      <h1>Heippa Reactista!</h1>

      <CustomerList />

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio}/>}
      {!showLaskuri && <button className='nappi' onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}
      {showLaskuri && <button className='nappi' onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      <Viesti teksti="Tervehdys App -komponentista!" />

    </div>
  )
}

export default App
