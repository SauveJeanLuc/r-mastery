import React from 'react'
import { useState } from 'react'

export default function ReducerVUseState() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const step = 50;

  return (
    <>
        {/* <h1 style={ {`color: rgb(${r}, ${g}, ${b})`}} > Change The Color Of This Text </h1> */}
        <h1 style={{color: `rgb(${r}, ${g}, ${b})`}} > Change The Color Of This Text </h1>

        <span>R</span><button onClick={() => {setR(r+step)}}>+</button><button onClick={ () => {setR(r-step)} }>-</button>
        <br />
        <span>G</span><button onClick={() => {setG(g+step)}}>+</button><button onClick={ () => {setG(g-step)} }>-</button>
        <br />
        <span>B</span><button onClick={() => {setB(b+step)}}>+</button><button onClick={ () => {setB(b-step)} }>-</button>
        <br />


    </>
  )
}
