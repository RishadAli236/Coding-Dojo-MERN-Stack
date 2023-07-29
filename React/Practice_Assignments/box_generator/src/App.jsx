import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import Display from './components/Display'

function App() {
  const [boxPropList, setBoxPropList] = useState([])

  return (
    <div>
      <Box 
        boxPropList = {boxPropList}
        setBoxPropList = {setBoxPropList}
      />
      <Display boxPropList = {boxPropList}/>
    </div>
  )
}

export default App
