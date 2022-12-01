import React, { useState } from 'react'
import './App.css'

const Laskuri = ({ huomio }) => {

    const [luku, setLuku] = useState(0)

    return (
        <>

            <h3>{luku}</h3>
            <button onClick={() => setLuku(luku - 1)}>-</button>
            <button onClick={() => setLuku(0)}>NOLLAA</button>
            <button onClick={() => setLuku(luku + 1)}>+</button>
            <br />
            <br />
            <button onClick={huomio}>HUOMIO</button>
            <br />
            <br />
        </>
    )
}

export default Laskuri
