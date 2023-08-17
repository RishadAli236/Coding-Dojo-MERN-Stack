import './App.css'
import DisplayOne from './components/DisplayOne'
import HomePage from './views/HomePage'
import{ Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path = "/products" element = {<HomePage/>} default/>
      <Route path = "/products/:id" element = {<DisplayOne/>}/>
    </Routes>
    </>
  )
}

export default App
