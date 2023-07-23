import { useState } from 'react'
import './App.css'
import Tab from './components/Tab'
import Display from './components/Display'

function App() {
  const [content, setContent] = useState("")

  return (
    <>
      <Tab 
      arr = {[
        {label: "Tab 1", content : "Tab 1 content is showing here"}, 
        {label: "Tab 2", content : "Tab 2 content is showing here"}, 
        {label: "Tab 3", content : "Tab 3 content is showing here"}
        ]}
        setContent = {setContent}
        />
      <Display content = {content}/>
    </>
  )
}

export default App
