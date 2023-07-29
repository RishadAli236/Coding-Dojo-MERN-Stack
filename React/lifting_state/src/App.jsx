import { useState } from 'react'
import './App.css'
import Message from './components/Message'
import DisplayMessage from './components/DisplayMessage'

function App() {
  const [message, setMessage] = useState("There are no messages")

  return (
    <>
      <Message setMessage = {setMessage} />
      <DisplayMessage message = {message}/>
    </>
  )
}

export default App
