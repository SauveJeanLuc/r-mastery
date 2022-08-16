import React from 'react'
import ReactDOM from 'react-dom/client'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Context from './hooks/Context'
import Ref from './hooks/Ref'

export default function App() {
  return (
    <>
        <State/>
        <hr />
        <Effect/>
        <hr />
        <Context/>
        <hr />
        <Ref/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)