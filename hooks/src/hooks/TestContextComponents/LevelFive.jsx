
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context';

export default function LevelFive() {

  const [user, setUser] = useContext(UserContext);

  return (
    <div>
        <h5>{`${user.firstName} is ${user.age} Years Old`}</h5>
        <button onClick={() => {
            setUser(Object.assign({} , user, { age: user.age + 1 }))
        }}>Increase Age</button>
    </div>
  )
}
