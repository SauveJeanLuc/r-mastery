import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// Using useEffect to update Time after each second
export default function Effect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
  })

  return (
    <p>Seconds Now: {time.getSeconds()}</p>
  )
}
