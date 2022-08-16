import React from 'react'
import { useState, useRef } from "react";

export default function Ref() {
  const [number, setNumber] = useState(0);
  const refNumber = useRef(0);
  const searchRef = useRef();
  
  function delayLogging(){
    setNumber(number +1);
    refNumber.current++;

    setTimeout(() => {
        alert(`State: ${number} | Ref: ${refNumber.current}`)
    },1000)
  }

  function focusOnInput(){
    searchRef.current.focus();
  }


  return (
    <>
        <button onClick={delayLogging}> Delay Logging </button>
        <br />
        <input type="search" ref={searchRef}/>
        <button onClick={focusOnInput}> Focus on the input </button>
    </>
  )
}
