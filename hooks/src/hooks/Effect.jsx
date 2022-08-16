import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// Using useEffect to update Time after each second
export default function Effect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return ()=> clearTimeout(timer);
  }, [time])

  return (
    <p>Seconds Now: {time.toLocaleDateString()}</p>
  )
}
