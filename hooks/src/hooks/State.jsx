import React from 'react'
import { useState } from 'react'

export default function State() {

  const [textColor, setTextColor ] = useState("red");

  return (
    <p style={{color: `${textColor}`}} onClick={() => setTextColor("green")}>Text for Testing</p>
  )
}
