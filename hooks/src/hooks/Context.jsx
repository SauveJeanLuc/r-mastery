import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import LevelTwo from './TestContextComponents/LevelTwo'

export const UserContext = createContext([
    {
        firstName: "SAUVE",
        lastName: "Jean-Luc",
        age: 34
    }
])

export default function Context() {

  const userState = useState({
    firstName: "Ping",
    lastName: "Pong",
    age: 34,
  })

  return (
    <UserContext.Provider value={userState}>
        <div>Context</div>
        <LevelTwo/>
    </UserContext.Provider>
  )
}
