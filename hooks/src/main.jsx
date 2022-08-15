import React from 'react'
import ReactDOM from 'react-dom/client'
import State from './hooks/State'

export default function App() {
  return (
    <>
        <State/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)